---
title: Class YooAssets
sidebar_label: YooAssets
---
# Class YooAssets


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public static class YooAssets
```
## Methods
### Initialize(ILogger)


```csharp title="Declaration"
public static void Initialize(ILogger logger = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.ILogger](../YooAsset/ILogger.md) | *logger* |

### Destroy()


```csharp title="Declaration"
public static void Destroy()
```
### CreatePackage(string)


```csharp title="Declaration"
public static ResourcePackage CreatePackage(string packageName)
```

##### Returns

[YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### GetPackage(string)


```csharp title="Declaration"
public static ResourcePackage GetPackage(string packageName)
```

##### Returns

[YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### TryGetPackage(string)


```csharp title="Declaration"
public static ResourcePackage TryGetPackage(string packageName)
```

##### Returns

[YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### HasPackage(string)


```csharp title="Declaration"
public static bool HasPackage(string packageName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### StartOperation(GameAsyncOperation)


```csharp title="Declaration"
public static void StartOperation(GameAsyncOperation operation)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.GameAsyncOperation](../YooAsset/GameAsyncOperation.md) | *operation* |

### SetDownloadSystemBreakpointResumeFileSize(int)


```csharp title="Declaration"
public static void SetDownloadSystemBreakpointResumeFileSize(int fileBytes)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *fileBytes* |

### SetDownloadSystemClearFileResponseCode(List&lt;long&gt;)


```csharp title="Declaration"
public static void SetDownloadSystemClearFileResponseCode(List<long> codes)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.Int64>` | *codes* |

### SetDownloadSystemCertificateHandler(CertificateHandler)


```csharp title="Declaration"
public static void SetDownloadSystemCertificateHandler(CertificateHandler instance)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Networking.CertificateHandler` | *instance* |

### SetDownloadSystemUnityWebRequest(DownloadRequestDelegate)


```csharp title="Declaration"
public static void SetDownloadSystemUnityWebRequest(DownloadRequestDelegate requestDelegate)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DownloadRequestDelegate](../YooAsset/DownloadRequestDelegate.md) | *requestDelegate* |

### SetOperationSystemMaxTimeSlice(long)


```csharp title="Declaration"
public static void SetOperationSystemMaxTimeSlice(long milliseconds)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int64` | *milliseconds* |

### SetCacheSystemCachedFileVerifyLevel(EVerifyLevel)


```csharp title="Declaration"
public static void SetCacheSystemCachedFileVerifyLevel(EVerifyLevel verifyLevel)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.EVerifyLevel](../YooAsset/EVerifyLevel.md) | *verifyLevel* |

### GetStreamingAssetBuildinFolderName()


```csharp title="Declaration"
public static string GetStreamingAssetBuildinFolderName()
```

##### Returns

`System.String`
### GetSandboxRoot()


```csharp title="Declaration"
public static string GetSandboxRoot()
```

##### Returns

`System.String`
### ClearSandbox()


```csharp title="Declaration"
public static void ClearSandbox()
```
### SetDefaultPackage(ResourcePackage)


```csharp title="Declaration"
public static void SetDefaultPackage(ResourcePackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md) | *package* |

### IsNeedDownloadFromRemote(string)


```csharp title="Declaration"
public static bool IsNeedDownloadFromRemote(string location)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### IsNeedDownloadFromRemote(AssetInfo)


```csharp title="Declaration"
public static bool IsNeedDownloadFromRemote(AssetInfo assetInfo)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### GetAssetInfos(string)


```csharp title="Declaration"
public static AssetInfo[] GetAssetInfos(string tag)
```

##### Returns

`YooAsset.AssetInfo[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *tag* |

### GetAssetInfos(string[])


```csharp title="Declaration"
public static AssetInfo[] GetAssetInfos(string[] tags)
```

##### Returns

`YooAsset.AssetInfo[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *tags* |

### GetAssetInfo(string)


```csharp title="Declaration"
public static AssetInfo GetAssetInfo(string location)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### CheckLocationValid(string)


```csharp title="Declaration"
public static bool CheckLocationValid(string location)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### LoadRawFileSync(AssetInfo)


```csharp title="Declaration"
public static RawFileOperationHandle LoadRawFileSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadRawFileSync(string)


```csharp title="Declaration"
public static RawFileOperationHandle LoadRawFileSync(string location)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### LoadRawFileAsync(AssetInfo)


```csharp title="Declaration"
public static RawFileOperationHandle LoadRawFileAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadRawFileAsync(string)


```csharp title="Declaration"
public static RawFileOperationHandle LoadRawFileAsync(string location)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### LoadSceneAsync(string, LoadSceneMode, bool, int)


```csharp title="Declaration"
public static SceneOperationHandle LoadSceneAsync(string location, LoadSceneMode sceneMode = 0, bool activateOnLoad = true, int priority = 100)
```

##### Returns

[YooAsset.SceneOperationHandle](../YooAsset/SceneOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `UnityEngine.SceneManagement.LoadSceneMode` | *sceneMode* |
| `System.Boolean` | *activateOnLoad* |
| `System.Int32` | *priority* |

### LoadSceneAsync(AssetInfo, LoadSceneMode, bool, int)


```csharp title="Declaration"
public static SceneOperationHandle LoadSceneAsync(AssetInfo assetInfo, LoadSceneMode sceneMode = 0, bool activateOnLoad = true, int priority = 100)
```

##### Returns

[YooAsset.SceneOperationHandle](../YooAsset/SceneOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |
| `UnityEngine.SceneManagement.LoadSceneMode` | *sceneMode* |
| `System.Boolean` | *activateOnLoad* |
| `System.Int32` | *priority* |

### LoadAssetSync(AssetInfo)


```csharp title="Declaration"
public static AssetOperationHandle LoadAssetSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadAssetSync&lt;TObject&gt;(string)


```csharp title="Declaration"
public static AssetOperationHandle LoadAssetSync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

##### Type Parameters
* `TObject`
### LoadAssetSync(string, Type)


```csharp title="Declaration"
public static AssetOperationHandle LoadAssetSync(string location, Type type)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `System.Type` | *type* |

### LoadAssetAsync(AssetInfo)


```csharp title="Declaration"
public static AssetOperationHandle LoadAssetAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadAssetAsync&lt;TObject&gt;(string)


```csharp title="Declaration"
public static AssetOperationHandle LoadAssetAsync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

##### Type Parameters
* `TObject`
### LoadAssetAsync(string, Type)


```csharp title="Declaration"
public static AssetOperationHandle LoadAssetAsync(string location, Type type)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `System.Type` | *type* |

### LoadSubAssetsSync(AssetInfo)


```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadSubAssetsSync&lt;TObject&gt;(string)


```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsSync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

##### Type Parameters
* `TObject`
### LoadSubAssetsSync(string, Type)


```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsSync(string location, Type type)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `System.Type` | *type* |

### LoadSubAssetsAsync(AssetInfo)


```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadSubAssetsAsync&lt;TObject&gt;(string)


```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsAsync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

##### Type Parameters
* `TObject`
### LoadSubAssetsAsync(string, Type)


```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsAsync(string location, Type type)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `System.Type` | *type* |

### CreateResourceDownloader(int, int)


```csharp title="Declaration"
public static ResourceDownloaderOperation CreateResourceDownloader(int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateResourceDownloader(string, int, int)


```csharp title="Declaration"
public static ResourceDownloaderOperation CreateResourceDownloader(string tag, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *tag* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateResourceDownloader(string[], int, int)


```csharp title="Declaration"
public static ResourceDownloaderOperation CreateResourceDownloader(string[] tags, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *tags* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateBundleDownloader(string, int, int)


```csharp title="Declaration"
public static ResourceDownloaderOperation CreateBundleDownloader(string location, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateBundleDownloader(string[], int, int)


```csharp title="Declaration"
public static ResourceDownloaderOperation CreateBundleDownloader(string[] locations, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *locations* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateBundleDownloader(AssetInfo, int, int)


```csharp title="Declaration"
public static ResourceDownloaderOperation CreateBundleDownloader(AssetInfo assetInfo, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateBundleDownloader(AssetInfo[], int, int)


```csharp title="Declaration"
public static ResourceDownloaderOperation CreateBundleDownloader(AssetInfo[] assetInfos, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `YooAsset.AssetInfo[]` | *assetInfos* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateResourceUnpacker(string, int, int)


```csharp title="Declaration"
public static ResourceUnpackerOperation CreateResourceUnpacker(string tag, int unpackingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceUnpackerOperation](../YooAsset/ResourceUnpackerOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *tag* |
| `System.Int32` | *unpackingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateResourceUnpacker(string[], int, int)


```csharp title="Declaration"
public static ResourceUnpackerOperation CreateResourceUnpacker(string[] tags, int unpackingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceUnpackerOperation](../YooAsset/ResourceUnpackerOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *tags* |
| `System.Int32` | *unpackingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

### CreateResourceUnpacker(int, int)


```csharp title="Declaration"
public static ResourceUnpackerOperation CreateResourceUnpacker(int unpackingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceUnpackerOperation](../YooAsset/ResourceUnpackerOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *unpackingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

