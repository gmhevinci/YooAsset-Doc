# 资源移除

学习如何进行资源文件的移除。

### 清理文件系统所有的缓存资源文件

````csharp
private IEnumerator ClearPackageAllCacheFiles()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var operation = package.ClearAllBundleFilesAsync();
    yield return operation;

    if (operation.Status == EOperationStatus.Succeed)
    {
        //清理成功
    }
    else
    {
        //清理失败
        Debug.LogError(operation.Error);
    }
}
````

### 清理文件系统未使用的缓存资源文件

以当前激活的资源清单为准，清理该资源清单内未再使用的缓存文件。

````csharp
private IEnumerator ClearPackageUnusedCacheFiles()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var operation = package.ClearUnusedBundleFilesAsync();
    yield return operation;

    if (operation.Status == EOperationStatus.Succeed)
    {
        //清理成功
    }
    else
    {
        //清理失败
        Debug.LogError(operation.Error);
    }
}
````

