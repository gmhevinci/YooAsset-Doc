# Initialization

Learn how to initialize the resource system.

Initializing the Resource System

```csharp
// 初始化资源系统
YooAssets.Initialize();

// 创建默认的资源包
var package = YooAssets.CreatePackage("DefaultPackage");

// 设置该资源包为默认的资源包，可以使用YooAssets相关加载接口加载该资源包内容。
YooAssets.SetDefaultPackage(package);
```

The resource system supports three modes of operation: Editor Simulation Mode, Standalone Mode, and Online Mode.

### Editor Simulation Mode

In the editor, there is no need to build asset bundles to simulate running the game.

Note: This mode only works in the editor.

````csharp
private IEnumerator InitializeYooAsset()
{
    var initParameters = new EditorSimulateModeParameters();
    initParameters.SimulateManifestFilePath  = EditorSimulateModeHelper.SimulateBuild("DefaultPackage");
    yield return package.InitializeAsync(initParameters);
}
````

### Standalone Mode

For games that do not require hot-updated resources, you can use the standalone mode.

Note: This mode requires building asset bundles.

````csharp
private IEnumerator InitializeYooAsset()
{
    var initParameters = new OfflinePlayModeParameters();
    yield return package.InitializeAsync(initParameters);
}
````

### Online Mode

For games that require hot-updated resources, you can use the online mode. This mode requires many initialization parameters.

Note: This mode requires building asset bundles.

- DecryptionServices: If the asset bundles are encrypted during the build process, you need to provide an instance of a class that implements the IDecryptionServices interface.
- QueryServices: Built-in resource query service interface.
- RemoteServices: Remote server query service interface.

````csharp
private IEnumerator InitializeYooAsset()
{
    string defaultHostServer = "http://127.0.0.1/CDN/Android/v1.0";
    string fallbackHostServer = "http://127.0.0.1/CDN/Android/v1.0";
    var initParameters = new HostPlayModeParameters();
    initParameters.QueryServices = new GameQueryServices(); //太空战机DEMO的脚本类，详细见StreamingAssetsHelper
    initParameters.DecryptionServices = new GameDecryptionServices();
    initParameters.RemoteServices = new RemoteServices(defaultHostServer, fallbackHostServer);
    var initOperation = package.InitializeAsync(initParameters);
    yield return initOperation;
    
    if(initOperation.Status == EOperationStatus.Succeed)
    {
        Debug.Log("资源包初始化成功！");
    }
    else 
    {
        Debug.LogError($"资源包初始化失败：{initOperation.Error}");
    }
}
````

### WebGL Mode

This is an exclusive mode for the WebGL platform, including WeChat Mini Games and Douyin Mini Games.

Note: This mode requires building asset bundles.

- DecryptionServices: WebGL platform does not support encryption, so it can be set to NULL.
- QueryServices: WebSite internal resource query service interface.
- RemoteServices: Remote server query service interface.

```csharp
private IEnumerator InitializeYooAsset()
{
    string defaultHostServer = "http://127.0.0.1/CDN/WebGL/v1.0";
    string fallbackHostServer = "http://127.0.0.1/CDN/WebGL/v1.0";
    var initParameters = new WebPlayModeParameters();
    initParameters.QueryServices = new GameQueryServices(); //太空战机DEMO的脚本类，详细见StreamingAssetsHelper
    initParameters.RemoteServices = new RemoteServices(defaultHostServer, fallbackHostServer);
    var initOperation = package.InitializeAsync(initParameters);
    yield return initOperation;
    
    if(initOperation.Status == EOperationStatus.Succeed)
    {
        Debug.Log("资源包初始化成功！");
    }
    else 
    {
        Debug.LogError($"资源包初始化失败：{initOperation.Error}");
    }
}
```

### Decryption Method

Implement a runtime class that inherits from the IDecryptionServices interface.

```csharp
// 文件解密的示例代码
// 注意：解密类必须配合加密类。
private class GameDecryptionServices : IDecryptionServices
{
    public ulong LoadFromFileOffset(DecryptFileInfo fileInfo)
    {
        return 32;
    }
    
    public byte[] LoadFromMemory(DecryptFileInfo fileInfo)
    {
        // 如果没有内存加密方式，可以返回空
        throw new NotImplementedException();
    }

    public Stream LoadFromStream(DecryptFileInfo fileInfo)
    {
        // 如果没有流加密方式，可以返回空
        throw new NotImplementedException();
    }
    
    public uint GetManagedReadBufferSize()
    {
        return 1024;
    }
}
```

### Source Code Analysis

Package.InitializeAsync() method analysis.

- Editor Simulation Mode

  Each time EditorSimulateModeHelper.SimulateBuild() method is called during startup, a simulated build will be performed at the lower level.

  If there is a large number of resource objects involved in the build, there may be a lag. You can avoid repetitive execution of simulated builds by directly specifying an existing manifest path.

- Standalone Mode

  During initialization, the built-in manifest file (file in the StreamingAssets folder) will be directly read, and the cache system will be initialized.

- Online Mode

  During initialization, the manifest will be loaded from the sandbox first. If the manifest does not exist in the sandbox, it will attempt to load the built-in manifest and copy it to the sandbox. Finally, the cache system will be initialized.

  **Note**: If both the sandbox manifest and the built-in manifest do not exist, the initialization will still be considered successful!
