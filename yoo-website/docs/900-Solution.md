# 解决方案

了解一些常规的解决方案。

### 分布式构建解决方案

对于一些超大项目，一般会采取美术工程和游戏工程分开的方案。

通过使用YooAsset的Package机制，可以完美适配该方案。可以把Package理解为一个独立的资源包裹，每个Package之间不存在互相依赖的资源，都是互相独立的沙盒。

**美术工程**

该工程内包含关卡场景，3D模型，粒子特效，着色器等资源，创建名为GameArt的Package收集器。

注意：美术工程在修改完毕后，可以通过自动化工具来打包，然后上传到公司本地的资源服务器。

**游戏工程**

该工程内包含逻辑代码，UI图集，UI面板，UI字体，音频等资源，创建名为GameLogic的Package收集器。

注意：游戏工程里不要使用美术工程里的着色器，避免造成冗余！

```csharp
// 以下是项目开发阶段的解决方案
private IEnumerator Start()
{
    // 游戏工程使用编辑器模拟运行方式，可以方便快捷的验证游戏修改效果。
    {
        var package = YooAssets.CreatePackage("GameLogic");
        var createParameters = new EditorSimulateModeParameters();
        createParameters.SimulateManifestFilePath = EditorSimulateModeHelper.SimulateBuild("GameLogic");
        var initializationOperation = package.InitializeAsync(createParameters);
        yield return initializationOperation;        
    }

    // 美术工程使用HostPlayMode运行方式，通过公司本地的资源服务器来更新。
    {
        var package = YooAssets.CreatePackage("GameArt");
        var createParameters = new HostPlayModeParameters();
        createParameters.QueryServices = new GameQueryServices();
        createParameters.DefaultHostServer = GetHostServerURL();
        createParameters.FallbackHostServer = GetHostServerURL();
        initializationOperation = package.InitializeAsync(createParameters);
        yield return initializationOperation;  
        
        //美术资源更新流程
        ......
    }
}
```



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

### 微信小游戏支持解决方案

微信小游戏注意事项：

1. 不支持同步加载。
2. 不支持资源加密。
3. 所有下载器无效。
4. 不支持多Package

**关闭WebGL本地缓存***

因为微信小游戏平台的特殊性，需要关闭WebGL的缓存系统，使用微信自带的缓存系统。

```csharp
YooAssets.SetCacheSystemDisableCacheOnWebGL();
```

### UniTask支持解决方案

详情参考 [UniTask 配置教程](https://github.com/tuyoogame/YooAsset/tree/main/Assets/YooAsset/Samples~/UniTask%20Sample/README.md)
