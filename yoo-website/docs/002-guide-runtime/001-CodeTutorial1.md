# 初始化

学习如何进行资源系统的初始化。

初始化资源系统

```csharp
// 初始化资源系统
YooAssets.Initialize();

// 创建默认的资源包
var package = YooAssets.CreatePackage("DefaultPackage");

// 设置该资源包为默认的资源包，可以使用YooAssets相关加载接口加载该资源包内容。
YooAssets.SetDefaultPackage(package);
```

资源系统的运行模式支持三种：编辑器模拟模式，单机运行模式，联机运行模式。

### 编辑器模拟模式

在编辑器下，不需要构建资源包，来模拟运行游戏。

注意：该模式只在编辑器下起效

````csharp
private IEnumerator InitializeYooAsset()
{
    var initParameters = new EditorSimulateModeParameters();
    var simulateManifestFilePath = EditorSimulateModeHelper.SimulateBuild(EDefaultBuildPipeline.BuiltinBuildPipeline, "DefaultPackage");
    initParameters.SimulateManifestFilePath  = simulateManifestFilePath;
    yield return package.InitializeAsync(initParameters);
}
````

### 单机运行模式

对于不需要热更新资源的游戏，可以使用单机运行模式。

注意：该模式需要构建资源包

````csharp
private IEnumerator InitializeYooAsset()
{
    var initParameters = new OfflinePlayModeParameters();
    yield return package.InitializeAsync(initParameters);
}
````

### 联机运行模式

对于需要热更新资源的游戏，可以使用联机运行模式，该模式下初始化参数会很多。

注意：该模式需要构建资源包

- DecryptionServices : 如果资源包在构建的时候有加密，需要提供实现IDecryptionServices接口的实例类。
- QueryServices：内置资源查询服务接口。
- RemoteServices: 远端服务器查询服务接口。

````csharp
private IEnumerator InitializeYooAsset()
{
    // 注意：GameQueryServices.cs 太空战机的脚本类，详细见StreamingAssetsHelper.cs
    string defaultHostServer = "http://127.0.0.1/CDN/Android/v1.0";
    string fallbackHostServer = "http://127.0.0.1/CDN/Android/v1.0";
    var initParameters = new HostPlayModeParameters();
    initParameters.BuildinQueryServices = new GameQueryServices(); 
    initParameters.DecryptionServices = new FileOffsetDecryption();
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

### WebGL运行模式

针对WebGL平台的专属模式，包括微信小游戏，抖音小游戏都需要选择该模式。

注意：该模式需要构建资源包

- DecryptionServices : WebGL平台不支持加密，可以设置为NULL。
- QueryServices：WebSite站内资源查询服务接口。
- RemoteServices: 远端服务器查询服务接口。

```csharp
private IEnumerator InitializeYooAsset()
{
    // 注意：GameQueryServices.cs 太空战机的脚本类，详细见StreamingAssetsHelper.cs
    string defaultHostServer = "http://127.0.0.1/CDN/WebGL/v1.0";
    string fallbackHostServer = "http://127.0.0.1/CDN/WebGL/v1.0";
    var initParameters = new WebPlayModeParameters();
    initParameters.BuildinQueryServices = new GameQueryServices();
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

### 解密方法

实现一个继承IDecryptionServices接口的运行时的类。

```csharp
/// <summary>
/// 资源文件偏移加载解密类
/// </summary>
private class FileOffsetDecryption : IDecryptionServices
{
    /// <summary>
    /// 同步方式获取解密的资源包对象
    /// 注意：加载流对象在资源包对象释放的时候会自动释放
    /// </summary>
    AssetBundle IDecryptionServices.LoadAssetBundle(DecryptFileInfo fileInfo, out Stream managedStream)
    {
        managedStream = null;
        return AssetBundle.LoadFromFile(fileInfo.FileLoadPath, fileInfo.ConentCRC, GetFileOffset());
    }

    /// <summary>
    /// 异步方式获取解密的资源包对象
    /// 注意：加载流对象在资源包对象释放的时候会自动释放
    /// </summary>
    AssetBundleCreateRequest IDecryptionServices.LoadAssetBundleAsync(DecryptFileInfo fileInfo, out Stream managedStream)
    {
        managedStream = null;
        return AssetBundle.LoadFromFileAsync(fileInfo.FileLoadPath, fileInfo.ConentCRC, GetFileOffset());
    }

    private static ulong GetFileOffset()
    {
        return 32;
    }
}
```

### 源代码解析

Package.InitializeAsync()方法解析。

- 编辑器模拟模式

  每次启动调用EditorSimulateModeHelper.SimulateBuild方法，都会在底层执行一次模拟构建（Simulate Build）。

  如果参与构建的资源对象数量级很大的话则会有卡顿现象，可以通过直接指定已有的清单路径来避免每次都重复执行模拟构建。

- 单机运行模式

  在初始化的时候，会直接读取内置清单文件（StreamingAssets文件夹里的文件），最后初始化缓存系统。

- 联机运行模式

  在初始化的时候，会优先从沙盒里加载清单，如果沙盒里不存在，则会尝试加载内置清单并将其拷贝到沙盒里。最后初始化缓存系统。

  **注意**：如果沙盒清单和内置清单都不存在，初始化也会被判定为成功！

  
