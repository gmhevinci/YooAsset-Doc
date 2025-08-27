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

### 资源文件解密方法

实现一个继承IDecryptionServices接口的类，参考代码：[示例代码](https://github.com/tuyoogame/YooAsset/blob/dev/Assets/YooAsset/Samples~/Test%20Sample/Runtime/CryptoSample/TestFileStreamEncryption.cs)

```csharp
// 初始化资源包
var decryption = new TestFileStreamDecryption();
var initParams = new OfflinePlayModeParameters();
initParams.BuildinFileSystemParameters = FileSystemParameters.CreateDefaultBuildinFileSystemParameters(decryption);
var initializeOp = package.InitializeAsync(initParams);
yield return initializeOp;
```

### WebGL平台解密方法

注：2.3x版本开始支持WebGL和小游戏平台加密。

实现一个继承IWebDecryptionServices接口的类，参考代码：[示例代码](https://github.com/tuyoogame/YooAsset/blob/dev/Assets/YooAsset/Samples~/Test%20Sample/Runtime/CryptoSample/TestFileStreamEncryption.cs)

```csharp
// 初始化资源包
var decryption = new TestWebFileMemoryDecryption();
var initParams = new WebPlayModeParameters();
initParams.WebServerFileSystemParameters = FileSystemParameters.CreateDefaultWebServerFileSystemParameters(decryption);
var initializeOp = package.InitializeAsync(initParams);
yield return initializeOp;
```

### 资源清单解密方法

实现一个继承IManifestServices接口的类，参考代码：[示例代码](https://github.com/tuyoogame/YooAsset/blob/dev/Assets/YooAsset/Samples~/Test%20Sample/Runtime/T2_TestBuldinFileSystem/TestProcessManifest.cs)

```csharp
// 初始化资源包
var initParams = new OfflinePlayModeParameters();
var decryption = new TestProcessManifest();
initParams.BuildinFileSystemParameters = FileSystemParameters.CreateDefaultBuildinFileSystemParameters();
initParams.BuildinFileSystemParameters.AddParameter(FileSystemParametersDefine.MANIFEST_SERVICES, decryption);
var initializeOp = package.InitializeAsync(initParams);
yield return initializeOp;
```

### 注意事项

如果指定内置文件系统的根目录为沙盒目录，是一件十分危险的行为。

1. 内置文件系统类并不会在初始化的时候去校验内置文件。
2. 内置文件系统类没有处理加载资源文件失败的Fallback机制。
3. 要想解决上面的问题，需要开发者扩展默认的内置文件系统类。

```csharp
string packageRoot = Application.persistentDataPath + "/buildin"; //沙盒目录
FileSystemParameters.CreateDefaultBuildinFileSystemParameters(null, packageRoot);
```

另外的正确处理方法是，对下载的ZIP包解压后，可以通过导入器将解压的资源文件拷贝到YOO的缓存目录下。

1. 缓存文件系统类在初始化的时候会自动校验缓存文件。
2. 缓存文件系统类有完备的资源文件加载失败的Fallback机制。

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

  
