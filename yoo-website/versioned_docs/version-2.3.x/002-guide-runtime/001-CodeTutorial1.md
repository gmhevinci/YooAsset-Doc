# 初始化

学习如何进行资源系统的初始化。

**创建资源包对象**

```csharp
// 初始化资源系统
YooAssets.Initialize();

// 创建默认的资源包
var package = YooAssets.CreatePackage("DefaultPackage");

// 获取指定的资源包，如果没有找到会报错
var package = YooAssets.GetPackage("DefaultPackage");

// 获取指定的资源包，如果没有找到不会报错
var package = YooAssets.TryGetPackage("DefaultPackage");

// 设置该资源包为默认的资源包，可以使用YooAssets相关加载接口加载该资源包内容。
YooAssets.SetDefaultPackage(package);
```

**销毁资源包对象**

```csharp
private IEnumerator DestroyPackage()
{
    // 先销毁资源包
    var package = YooAssets.GetPackage("DefaultPackage");
    DestroyOperation operation = package.DestroyAsync();
    yield return operation;
    
    // 然后移除资源包
    if (YooAssets.RemovePackage(package))
    {
        Debug.Log("移除成功！");
    }
}
```

### 资源系统的运行模式

- 编辑器模拟模式 (EditorSimulateMode)
- 单机运行模式  (OfflinePlayMode)
- 联机运行模式  (HostPlayMode)
- Web运行模式  (WebPlayMode)
- 自定义运行模式  (CustomPlayMode)

### 编辑器模拟模式 (EditorSimulateMode)

在编辑器下，不需要构建资源包，来模拟运行游戏。

注意：该模式只在编辑器下起效

````csharp
private IEnumerator InitPackage()
{  
    var buildResult = EditorSimulateModeHelper.SimulateBuild("DefaultPackage");    
    var packageRoot = buildResult.PackageRootDirectory;
    var editorFileSystemParams = FileSystemParameters.CreateDefaultEditorFileSystemParameters(packageRoot);
    var initParameters = new EditorSimulateModeParameters();
    initParameters.EditorFileSystemParameters = editorFileSystemParams;
    var initOperation = package.InitializeAsync(initParameters);
    yield return initOperation;
    
    if(initOperation.Status == EOperationStatus.Succeed)
        Debug.Log("资源包初始化成功！");
    else 
        Debug.LogError($"资源包初始化失败：{initOperation.Error}");
}
````

### 单机运行模式  (OfflinePlayMode)

对于不需要热更新资源的游戏，可以使用单机运行模式。

注意：该模式需要构建资源包

````csharp
private IEnumerator InitPackage()
{
    var buildinFileSystemParams = FileSystemParameters.CreateDefaultBuildinFileSystemParameters();
    var initParameters = new OfflinePlayModeParameters();
    initParameters.BuildinFileSystemParameters = buildinFileSystemParams;
    var initOperation = package.InitializeAsync(initParameters);
    yield return initOperation;
    
    if(initOperation.Status == EOperationStatus.Succeed)
        Debug.Log("资源包初始化成功！");
    else 
        Debug.LogError($"资源包初始化失败：{initOperation.Error}");
}
````

### 联机运行模式 (HostPlayMode)

对于需要热更新资源的游戏，可以使用联机运行模式。

注意：该模式需要构建资源包

````csharp
private IEnumerator InitPackage()
{
    string defaultHostServer = "http://127.0.0.1/CDN/Android/v1.0";
    string fallbackHostServer = "http://127.0.0.1/CDN/Android/v1.0";
    IRemoteServices remoteServices = new RemoteServices(defaultHostServer, fallbackHostServer);
    var cacheFileSystemParams = FileSystemParameters.CreateDefaultCacheFileSystemParameters(remoteServices);
    var buildinFileSystemParams = FileSystemParameters.CreateDefaultBuildinFileSystemParameters();   
    
    var initParameters = new HostPlayModeParameters();
    initParameters.BuildinFileSystemParameters = buildinFileSystemParams; 
    initParameters.CacheFileSystemParameters = cacheFileSystemParams;
    var initOperation = package.InitializeAsync(initParameters);
    yield return initOperation;
    
    if(initOperation.Status == EOperationStatus.Succeed)
        Debug.Log("资源包初始化成功！");
    else 
        Debug.LogError($"资源包初始化失败：{initOperation.Error}");
}
````

```csharp
/// <summary>
/// 远端资源地址查询服务类
/// </summary>
private class RemoteServices : IRemoteServices
{
    private readonly string _defaultHostServer;
    private readonly string _fallbackHostServer;

    public RemoteServices(string defaultHostServer, string fallbackHostServer)
    {
        _defaultHostServer = defaultHostServer;
        _fallbackHostServer = fallbackHostServer;
    }
    string IRemoteServices.GetRemoteMainURL(string fileName)
    {
        return $"{_defaultHostServer}/{fileName}";
    }
    string IRemoteServices.GetRemoteFallbackURL(string fileName)
    {
        return $"{_fallbackHostServer}/{fileName}";
    }
}
```

### Web运行模式 (WebPlayMode)

针对WebGL平台的专属模式，包括微信小游戏，抖音小游戏都需要选择该模式。

注意：微信小游戏，抖音小游戏请参考解决方案文档介绍。

注意：该模式需要构建资源包

```csharp
private IEnumerator InitPackage()
{
    //说明：RemoteServices类定义请参考联机运行模式！
    IRemoteServices remoteServices = new RemoteServices(defaultHostServer, fallbackHostServer);
    var webServerFileSystemParams = FileSystemParameters.CreateDefaultWebServerFileSystemParameters();
    var webRemoteFileSystemParams = FileSystemParameters.CreateDefaultWebRemoteFileSystemParameters(remoteServices); //支持跨域下载
    
    var initParameters = new WebPlayModeParameters();
    initParameters.WebServerFileSystemParameters = webServerFileSystemParams;
    initParameters.WebRemoteFileSystemParameters = webRemoteFileSystemParams;
    
    var initOperation = package.InitializeAsync(initParameters);
    yield return initOperation;
    
    if(initOperation.Status == EOperationStatus.Succeed)
        Debug.Log("资源包初始化成功！");
    else 
        Debug.LogError($"资源包初始化失败：{initOperation.Error}");
}
```

### 自定义运行模式  (CustomPlayMode)

支持多个文件系统。

注意：列表最后一个元素作为主文件系统！

```csharp
private IEnumerator InitPackage()
{
    // 配置各个文件系统参数
    ......
    
    var initParameters = new CustomPlayModeParameters();
    initParameters.FileSystemParameterList.Add(FileSystemParamsA);
    initParameters.FileSystemParameterList.Add(FileSystemParamsB);
    initParameters.FileSystemParameterList.Add(FileSystemParamsC);
    
    var initOperation = package.InitializeAsync(initParameters);
    yield return initOperation;
    
    if(initOperation.Status == EOperationStatus.Succeed)
        Debug.Log("资源包初始化成功！");
    else 
        Debug.LogError($"资源包初始化失败：{initOperation.Error}");
}
```

### 解密方法

实现一个继承IDecryptionServices接口的类，参考代码：[单元测试工程](https://github.com/tuyoogame/YooAsset/blob/dev/Assets/YooAsset/Samples~/Test%20Sample/Runtime/T2_TestBuldinFileSystem/TestBundleEncryption.cs)

FileSystemParameters.cs类里有各个默认的文件系统的初始化方法。

```csharp
// 初始化资源包
var initParams = new OfflinePlayModeParameters();
var decryption = new FileStreamDecryption();
initParams.BuildinFileSystemParameters = FileSystemParameters.CreateDefaultBuildinFileSystemParameters(decryption, packageRoot);
var initializeOp = package.InitializeAsync(initParams);
yield return initializeOp;
```

### 源代码解析

Package.InitializeAsync()方法解析。

- 编辑器模拟模式

  每次启动调用EditorSimulateModeHelper.SimulateBuild方法，都会在底层执行一次模拟构建（Simulate Build）。

  如果参与构建的资源对象数量级很大的话则会有卡顿现象，可以通过直接指定已有的清单路径来避免每次都重复执行模拟构建。

- 单机运行模式

  在初始化的时候，会初始化内置文件系统。

- 联机运行模式

  在初始化的时候，会初始化内置文件系统和缓存文件系统。

  **注意：内置文件系统可以为空。**

  
