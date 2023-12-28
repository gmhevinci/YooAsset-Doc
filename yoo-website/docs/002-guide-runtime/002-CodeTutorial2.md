# 资源更新

学习如何进行资源文件的更新。

### 获取资源版本

对于联机运行模式，在更新补丁清单之前，需要获取一个资源版本。

该资源版本可以通过YooAssets提供的接口来更新，也可以通过HTTP访问游戏服务器来获取。

````csharp
private IEnumerator UpdatePackageVersion()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var operation = package.UpdatePackageVersionAsync();
    yield return operation;

    if (operation.Status == EOperationStatus.Succeed)
    {
        //更新成功
        string packageVersion = operation.PackageVersion;
        Debug.Log($"Updated package Version : {packageVersion}");
    }
    else
    {
        //更新失败
        Debug.LogError(operation.Error);
    }
}
````

### 更新资源清单

对于联机运行模式，在获取到资源版本号之后，就可以更新资源清单了。

````csharp
private IEnumerator UpdatePackageManifest()
{
    // 更新成功后自动保存版本号，作为下次初始化的版本。
    // 也可以通过operation.SavePackageVersion()方法保存。
    bool savePackageVersion = true;
    var package = YooAssets.GetPackage("DefaultPackage");
    var operation = package.UpdatePackageManifestAsync(packageVersion, savePackageVersion);
    yield return operation;

    if (operation.Status == EOperationStatus.Succeed)
    {
        //更新成功
    }
    else
    {
        //更新失败
        Debug.LogError(operation.Error);
    }
}
````

### 资源包下载

在补丁清单更新完毕后，就可以更新资源文件了。

根据产品需求，可以选择更新全部资源，或者只更新部分资源。

补丁包下载接口：

- YooAssets.CreateResourceDownloader(int downloadingMaxNumber, int failedTryAgain, int timeout)

  用于下载更新当前资源版本所有的资源包文件。

- YooAssets.CreateResourceDownloader(string[] tags, int downloadingMaxNumber, int failedTryAgain, int timeout)

  用于下载更新资源标签指定的资源包文件。

- YooAssets.CreateBundleDownloader(AssetInfo[] assetInfos, int downloadingMaxNumber, int failedTryAgain, int timeout)

  用于下载更新指定的资源列表依赖的资源包文件。

````csharp
IEnumerator Download()
{
    int downloadingMaxNum = 10;
    int failedTryAgain = 3;
    var package = YooAssets.GetPackage("DefaultPackage");
    var downloader = package.CreateResourceDownloader(downloadingMaxNum, failedTryAgain);
    
    //没有需要下载的资源
    if (downloader.TotalDownloadCount == 0)
    {        
        yield break;
    }

    //需要下载的文件总数和总大小
    int totalDownloadCount = downloader.TotalDownloadCount;
    long totalDownloadBytes = downloader.TotalDownloadBytes;    

    //注册回调方法
    downloader.OnDownloadErrorCallback = OnDownloadErrorFunction;
    downloader.OnDownloadProgressCallback = OnDownloadProgressUpdateFunction;
    downloader.OnDownloadOverCallback = OnDownloadOverFunction;
    downloader.OnStartDownloadFileCallback = OnStartDownloadFileFunction;

    //开启下载
    downloader.BeginDownload();
    yield return downloader;

    //检测下载结果
    if (downloader.Status == EOperationStatus.Succeed)
    {
        //下载成功
    }
    else
    {
        //下载失败
    }
}
````

### 下载器合并

可以把同一个package下的多个下载器合并。

```csharp
// 例如：把关卡资源下载器和某个指定资源下载器进行合并。
var downloader1 = package.CreateResourceDownloader("level_tag", downloadingMaxNum, failedTryAgain);
var downloader2 = package.CreateBundleDownloader("asset_location", downloadingMaxNum, failedTryAgain);
downloader1.Combine(downloader2);

//开启下载
downloader1.BeginDownload();
```

### 源代码解析

Package.UpdatePackageManifestAsync()方法解析。

- 联机运行模式

  通过传入的清单版本，优先比对当前激活清单的版本，如果相同就直接返回成功。如果有差异就从缓存里去查找匹配的清单，如果缓存里不存在，就去远端下载并保存到沙盒里。最后加载沙盒内匹配的清单文件。

  
