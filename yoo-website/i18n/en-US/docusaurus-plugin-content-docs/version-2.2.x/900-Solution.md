# Solution

Learn about some common solutions.

### Distributed Build Solution

For some large projects, it is generally recommended to separate the art engineering and game engineering.

By using the YooAsset Package mechanism, this solution can be perfectly adapted. You can think of a Package as an independent resource package, where each Package does not depend on each other and is independent.

**Art Engineering**

This engineering includes level scenes, 3D models, particle effects, shaders, and other resources. Create a Package collector named GameArt.

Note: After modifying the art engineering, you can use automated tools to package it and then upload it to the company's local resource server.

**Game Engineering**

This engineering includes logic code, UI atlases, UI panels, UI fonts, audio, and other resources. Create a Package collector named GameLogic.

Note: Do not use shaders from the art engineering in the game engineering to avoid redundancy!

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



### Video Packaging and Loading Solution

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

### Solution for Weak Network Environment

For projects that are more focused on single-player but also require resource hot updates. When players have no network connection, we don't want them to get stuck in the resource update step and unable to play the game. So when the player's local network has issues, we can skip the resource update step.

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

### FairyGUI Support Solution

Note: When the FairyGUI panel is destroyed, release the resource handle list to avoid resource leaks.

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

### WeChat Mini Game Support Solution

Considerations for WeChat Mini Games:

1. Synchronous loading is not supported.
2. Resource encryption is not supported.
3. All downloaders are invalid.
4. Multiple Packages are not supported.

**Disable WebGL Local Cache**

Due to the special nature of the WeChat Mini Game platform, the WebGL cache system needs to be disabled, and the built-in WeChat cache system should be used.

```csharp
YooAssets.SetCacheSystemDisableCacheOnWebGL();
```

### UniTask Support Solution

For more details, refer to the [UniTask Configuration Tutorial](https://github.com/tuyoogame/YooAsset/tree/main/Assets/YooAsset/Samples~/UniTask%20Sample/README.md)
