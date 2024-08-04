# Resource Update

Learn how to update resource files.

### Get Resource Version

For online mode, you need to get a resource version before updating the patch manifest.

The resource version can be obtained through the interface provided by YooAssets or by accessing the game server via HTTP.

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

### Update Patch Manifest

For online mode, after obtaining the resource version, you can update the patch manifest.

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

### Resource Package Download

After the patch manifest is updated, you can proceed with the resource file update.

Depending on the product requirements, you can choose to update all resources or only specific resources.

Patch package download interfaces:

- YooAssets.CreateResourceDownloader(int downloadingMaxNumber, int failedTryAgain, int timeout)

  Used to download all resource package files for the current resource version.

- YooAssets.CreateResourceDownloader(string[] tags, int downloadingMaxNumber, int failedTryAgain, int timeout)

  Used to download resource package files specified by resource tags.

- YooAssets.CreateBundleDownloader(AssetInfo[] assetInfos, int downloadingMaxNumber, int failedTryAgain, int timeout)

  Used to download resource package files that are dependencies of the specified resource list.

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

### Source Code Analysis

Package.UpdatePackageManifestAsync() method analysis.

- Online mode

  By comparing the provided manifest version with the currently active manifest version, if they are the same, return success directly. If there are differences, search for a matching manifest in the cache. If it doesn't exist in the cache, download it from the remote server and save it to the sandbox. Finally, load the matching manifest file from the sandbox.
