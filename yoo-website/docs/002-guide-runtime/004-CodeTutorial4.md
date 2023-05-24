# 解决方案

了解一些常规的解决方案。

### 视频打包和加载解决方案

```csharp
// 编写自定义打包规则，然后将脚本放在Editor目录下。
// 然后在AssetBundleCollector界面对视频文件使用扩展的打包规则。
public class PackVideo : IPackRule
{
    public PackRuleResult GetPackRuleResult(PackRuleData data)
    {
        string bundleName = data.AssetPath;
        string fileExtension = Path.GetExtension(data.AssetPath);
        fileExtension = fileExtension.Remove(0, 1);
        PackRuleResult result = new PackRuleResult(bundleName, fileExtension);
        return result;
    }

    bool IPackRule.IsRawFilePackRule()
    {
        return true; //视频文件作为原生文件管理
    }
}
```

```csharp
// 视频加载范例
public IEnumerator Start()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var handle = package.LoadRawFileAsync(location);
    yield return handle;
    
    _videoPlayer.url = handle.GetRawFilePath();
    _videoPlayer.Play();
}
```

### 弱联网环境解决方案

对于偏单机但是也有资源热更需求的项目。当玩家在无网络的时候，我们又不希望玩家卡在资源更新步骤而不能正常游戏。所以当玩家本地网络有问题的时候，我们可以跳过资源更新的步骤。

````csharp
private IEnumerator Start()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var operation = package.UpdatePackageVersionAsync(30);
    yield return operation;
    if (operation.Status == EOperationStatus.Succeed)
    {
        // 如果获取远端资源版本成功，说明当前网络连接通畅，可以走正常更新流程。
        ......
    }
    else
    {
        // 如果获取远端资源版本失败，说明当前网络无连接。
        // 在正常开始游戏之前，需要验证本地清单内容的完整性。
        string packageVersion = package.GetPackageVersion();
        var operation = package.PreDownloadContentAsync(packageVersion);
        yield return operation;
        if (operation.Status != EOperationStatus.Succeed)
        {
            ShowMessageBox("请检查本地网络，有新的游戏内容需要更新！");
            yield break;
        }
        
        int downloadingMaxNum = 10;
        int failedTryAgain = 3;
        int timeout = 60;
        var downloader = operation.CreateResourceDownloader(downloadingMaxNum, failedTryAgain, timeout);
        if (downloader.TotalDownloadCount > 0)   
        {
            // 资源内容本地并不完整，需要提示玩家联网更新。
            ShowMessageBox("请检查本地网络，有新的游戏内容需要更新！");
            yield break;
        }
        
        // 开始游戏
        StartGame();
    }
}
````

### FairyGUI支持解决方案

注意：在FairyGUI的面板销毁的时候，将资源句柄列表释放，否则会造成资源泄漏。

````csharp
// 资源句柄列表
private List<AssetOperationHandle> _handles = new List<AssetOperationHandle>(100);

// 加载方法
private object LoadFunc(string name, string extension, System.Type type, out DestroyMethod method)
{
    method = DestroyMethod.None; //注意：这里一定要设置为None
    string location = $"Assets/FairyRes/{name}{extension}";
    var package = YooAssets.GetPackage("DefaultPackage");
    var handle = package.LoadAssetSync(location , type);
    _handles.Add(handle);
    return handle.AssetObject;
}

// 执行FairyGUI的添加包函数
UIPackage.AddPackage(name, LoadFunc);

// 释放资源句柄列表
private void ReleaseHandles()
{
    foreach(var handle in _handles)
    {
        handle.Release();
    }
    _handles.Clear();
}
````

### UniTask支持解决方案

详情参考 [UniTask 配置教程](https://github.com/tuyoogame/YooAsset/tree/main/Assets/YooAsset/Samples~/UniTask%20Sample/README.md)
