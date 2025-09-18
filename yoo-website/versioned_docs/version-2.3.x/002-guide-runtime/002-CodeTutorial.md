# 文件系统

学习如何配置文件系统的初始化参数。

YOO默认提供了多个文件系统类，可以满足大部分项目的业务需求。

- DefaultEditorFileSystem 编辑器模拟文件系统类
- DefaultBuildinFileSystem 内置文件系统类
- DefaultCacheFileSystem 缓存文件系统类
- DefaultWebRemoteFileSystem Web平台远端文件系统类
- DefaultWebServerFileSystem Web平台服务端文件系统类

还包含各类小游戏平台的文件系统扩展类，该文档不做解释说明！

### 文件系统初始化参数

**FILE_VERIFY_LEVEL**

参数说明：在文件系统初始化的时候，沙盒内缓存文件的校验级别。

支持范围：DefaultBuildinFileSystem, DefaultCacheFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.FILE_VERIFY_LEVEL, EFileVerifyLevel.High);
```



**FILE_VERIFY_MAX_CONCURRENCY**

参数说明：在文件系统初始化的时候，沙盒内缓存文件校验最大并发数。

注意事项：参数不会超过系统提供的最大工作线程数量，超过会被截断。

支持范围：DefaultBuildinFileSystem, DefaultCacheFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.FILE_VERIFY_MAX_CONCURRENCY, 100);
```



**INSTALL_CLEAR_MODE**

参数说明：在覆盖安装之后，首次启动对沙盒内缓存文件的清理模式。

支持范围：DefaultBuildinFileSystem, DefaultCacheFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.INSTALL_CLEAR_MODE, EOverwriteInstallClearMode.ClearAllCacheFiles);
```



**REMOTE_SERVICES**

参数说明：远程服务接口的实例类。

支持范围：DefaultCacheFileSystem, DefaultWebRemoteFileSystem

```csharp
IRemoteServices remoteServices = new RemoteServices(defaultHostServer, fallbackHostServer);
fileSystemParameters.AddParameter(FileSystemParametersDefine.REMOTE_SERVICES, remoteServices);
```



**DECRYPTION_SERVICES**

参数说明：解密服务接口的实例类。

支持范围：DefaultBuildinFileSystem, DefaultCacheFileSystem, DefaultWebRemoteFileSystem, DefaultWebServerFileSystem 

```csharp
IDecryptionServices decryptionServices = new FileDecryptionServices();
fileSystemParameters.AddParameter(FileSystemParametersDefine.DECRYPTION_SERVICES, decryptionServices);
```



**MANIFEST_SERVICES**

参数说明：资源清单服务类。可以实现资源清单的解密或解压。

支持范围：DefaultBuildinFileSystem, DefaultCacheFileSystem, DefaultWebRemoteFileSystem, DefaultWebServerFileSystem 

```csharp
IManifestRestoreServices manifestServices = new ManifestRestoreServices();
fileSystemParameters.AddParameter(FileSystemParametersDefine.MANIFEST_SERVICES, manifestServices);
```



**APPEND_FILE_EXTENSION**

参数说明：缓存的数据文件追加文件格式。

实际用途：针对原生文件例如视频文件，开启后缓存的文件会追加后缀名。可以通过地址直接播放缓存的视频文件。

支持范围：DefaultBuildinFileSystem, DefaultCacheFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.APPEND_FILE_EXTENSION, true);
```



**DISABLE_CATALOG_FILE**

参数说明：禁用Catalog目录查询文件。

支持范围：DefaultBuildinFileSystem

```csharp
 fileSystemParameters.AddParameter(FileSystemParametersDefine.DISABLE_CATALOG_FILE, true);
```



**DISABLE_UNITY_WEB_CACHE**

参数说明：禁用Unity的网络缓存。

支持范围：DefaultWebRemoteFileSystem, DefaultWebServerFileSystem 

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.DISABLE_UNITY_WEB_CACHE, true);
```



**DISABLE_ONDEMAND_DOWNLOAD**

参数说明：禁用边玩边下机制。（不推荐开启）

支持范围：DefaultCacheFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.DISABLE_ONDEMAND_DOWNLOAD, true);
```



**DOWNLOAD_MAX_CONCURRENCY**

参数说明：下载系统，最大并发连接数。可以控制同时下载的文件数量。

支持范围：DefaultCacheFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.DOWNLOAD_MAX_CONCURRENCY, 10);
```



**DOWNLOAD_MAX_REQUEST_PER_FRAME**

参数说明：下载系统，每帧发起的最大请求数。

支持范围：DefaultCacheFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.DOWNLOAD_MAX_REQUEST_PER_FRAME, 10);
```



**DOWNLOAD_WATCH_DOG_TIME**

参数说明：下载任务的看门狗机制监控时间。

参数解读：监控时间范围内，如果没有接收到任何下载数据，那么直接终止任务！

支持范围：DefaultCacheFileSystem

```csharp
int seconds = 60; //单位：秒
fileSystemParameters.AddParameter(FileSystemParametersDefine.DOWNLOAD_WATCH_DOG_TIME, seconds);
```



**RESUME_DOWNLOAD_MINMUM_SIZE**

参数说明：启用断点续传的文件最小尺寸。小于该尺寸的文件不启用断点续传。

支持范围：DefaultCacheFileSystem

```csharp
int fileSize = 1024 * 1024; //单位：byte
fileSystemParameters.AddParameter(FileSystemParametersDefine.RESUME_DOWNLOAD_MINMUM_SIZE, fileSize);
```



**RESUME_DOWNLOAD_RESPONSE_CODES**

参数说明：断点续传下载器关注的错误码。

实际用途：如果遇到以下错误返回码，验证失败直接删除下载文件。

支持范围：DefaultCacheFileSystem

```csharp
List<long> httpCodes = new List<long> { 401 }; //HTTP返回码
fileSystemParameters.AddParameter(FileSystemParametersDefine.RESUME_DOWNLOAD_RESPONSE_CODES, httpCodes);
```



**VIRTUAL_WEBGL_MODE**

参数说明：模拟WebGL平台模式。

实际用途：编辑器下不需要构建AB，也可以模拟小游戏开发环境，等同真机运行环境。

支持范围：DefaultEditorFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.VIRTUAL_WEBGL_MODE, true);
```



**VIRTUAL_DOWNLOAD_MODE**

参数说明：模拟虚拟下载模式。

实际用途：编辑器下不需要构建AB，也可以模拟远端资源下载，等同真机运行环境。

支持范围：DefaultEditorFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.VIRTUAL_DOWNLOAD_MODE, true);
```



**VIRTUAL_DOWNLOAD_SPEED**

参数说明：模拟虚拟下载的网速。

支持范围：DefaultEditorFileSystem

```csharp
int speed = 1024 * 1024; //单位：字节
fileSystemParameters.AddParameter(FileSystemParametersDefine.VIRTUAL_DOWNLOAD_SPEED, speed);
```



**ASYNC_SIMULATE_MIN_FRAME**

参数说明：异步模拟加载最小帧数。

实际用途：编辑器下不需要构建AB，也可以模拟异步加载的最小耗时。

支持范围：DefaultEditorFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.ASYNC_SIMULATE_MIN_FRAME, 5);
```



**ASYNC_SIMULATE_MAX_FRAME**

参数说明：异步模拟加载最大帧数。

实际用途：编辑器下不需要构建AB，也可以模拟异步加载的最大耗时。

支持范围：DefaultEditorFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.ASYNC_SIMULATE_MAX_FRAME, 20);
```



**COPY_BUILDIN_PACKAGE_MANIFEST**

参数说明：拷贝内置清单。

支持范围：DefaultBuildinFileSystem

```csharp
fileSystemParameters.AddParameter(FileSystemParametersDefine.COPY_BUILDIN_PACKAGE_MANIFEST, true);
```



**COPY_BUILDIN_PACKAGE_MANIFEST_DEST_ROOT**

参数说明：拷贝内置清单的目标目录。

支持范围：DefaultBuildinFileSystem

```csharp
string destDirectory = $"{Application.persistentDataPath}/yoo/PackageName/ManifestFiles/";
fileSystemParameters.AddParameter(FileSystemParametersDefine.COPY_BUILDIN_PACKAGE_MANIFEST_DEST_ROOT, destFilePath);
```



**COPY_LOCAL_FILE_SERVICES**

参数说明：拷贝内置文件接口的实例类。

实际用途：参考YOO官方文档：解决方案 - 本地资源拷贝定制解决方案

支持范围：DefaultBuildinFileSystem

```csharp
ICopyLocalFileServices copyLocalFileServices = new CopyLocalFileServices();
fileSystemParameters.AddParameter(FileSystemParametersDefine.COPY_LOCAL_FILE_SERVICES, copyLocalFileServices);
```

