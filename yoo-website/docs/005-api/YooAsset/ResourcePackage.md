---
title: Class ResourcePackage
sidebar_label: ResourcePackage
---
# Class ResourcePackage


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public class ResourcePackage
```
## Properties
### PackageName


```csharp title="Declaration"
public string PackageName { get; }
```
### InitializeStatus


```csharp title="Declaration"
public EOperationStatus InitializeStatus { get; }
```
## Methods
### InitializeAsync(InitializeParameters)


```csharp title="Declaration"
public InitializationOperation InitializeAsync(InitializeParameters parameters)
```

##### Returns

[YooAsset.InitializationOperation](../YooAsset/InitializationOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.InitializeParameters](../YooAsset/InitializeParameters.md) | *parameters* |

### UpdatePackageVersionAsync(bool, int)


```csharp title="Declaration"
public UpdatePackageVersionOperation UpdatePackageVersionAsync(bool appendTimeTicks = true, int timeout = 60)
```

##### Returns

[YooAsset.UpdatePackageVersionOperation](../YooAsset/UpdatePackageVersionOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *appendTimeTicks* |
| `System.Int32` | *timeout* |

### UpdatePackageManifestAsync(string, int)


```csharp title="Declaration"
public UpdatePackageManifestOperation UpdatePackageManifestAsync(string packageVersion, int timeout = 60)
```

##### Returns

[YooAsset.UpdatePackageManifestOperation](../YooAsset/UpdatePackageManifestOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageVersion* |
| `System.Int32` | *timeout* |

### PreDownloadContentAsync(string, int)


```csharp title="Declaration"
public PreDownloadContentOperation PreDownloadContentAsync(string packageVersion, int timeout = 60)
```

##### Returns

[YooAsset.PreDownloadContentOperation](../YooAsset/PreDownloadContentOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageVersion* |
| `System.Int32` | *timeout* |

### ClearUnusedCacheFilesAsync()


```csharp title="Declaration"
public ClearUnusedCacheFilesOperation ClearUnusedCacheFilesAsync()
```

##### Returns

[YooAsset.ClearUnusedCacheFilesOperation](../YooAsset/ClearUnusedCacheFilesOperation.md)
### GetPackageVersion()


```csharp title="Declaration"
public string GetPackageVersion()
```

##### Returns

`System.String`
### UnloadUnusedAssets()


```csharp title="Declaration"
public void UnloadUnusedAssets()
```
### ForceUnloadAllAssets()


```csharp title="Declaration"
public void ForceUnloadAllAssets()
```
### IsNeedDownloadFromRemote(string)


```csharp title="Declaration"
public bool IsNeedDownloadFromRemote(string location)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### IsNeedDownloadFromRemote(AssetInfo)


```csharp title="Declaration"
public bool IsNeedDownloadFromRemote(AssetInfo assetInfo)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### GetAssetInfos(string)


```csharp title="Declaration"
public AssetInfo[] GetAssetInfos(string tag)
```

##### Returns

`YooAsset.AssetInfo[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *tag* |

### GetAssetInfos(string[])


```csharp title="Declaration"
public AssetInfo[] GetAssetInfos(string[] tags)
```

##### Returns

`YooAsset.AssetInfo[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *tags* |

### GetAssetInfo(string)


```csharp title="Declaration"
public AssetInfo GetAssetInfo(string location)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### CheckLocationValid(string)


```csharp title="Declaration"
public bool CheckLocationValid(string location)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### LoadRawFileSync(AssetInfo)


```csharp title="Declaration"
public RawFileOperationHandle LoadRawFileSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadRawFileSync(string)


```csharp title="Declaration"
public RawFileOperationHandle LoadRawFileSync(string location)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### LoadRawFileAsync(AssetInfo)


```csharp title="Declaration"
public RawFileOperationHandle LoadRawFileAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadRawFileAsync(string)


```csharp title="Declaration"
public RawFileOperationHandle LoadRawFileAsync(string location)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### LoadSceneAsync(string, LoadSceneMode, bool, int)


```csharp title="Declaration"
public SceneOperationHandle LoadSceneAsync(string location, LoadSceneMode sceneMode = 0, bool activateOnLoad = true, int priority = 100)
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
public SceneOperationHandle LoadSceneAsync(AssetInfo assetInfo, LoadSceneMode sceneMode = 0, bool activateOnLoad = true, int priority = 100)
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
public AssetOperationHandle LoadAssetSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadAssetSync&lt;TObject&gt;(string)


```csharp title="Declaration"
public AssetOperationHandle LoadAssetSync<TObject>(string location) where TObject : Object
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
public AssetOperationHandle LoadAssetSync(string location, Type type)
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
public AssetOperationHandle LoadAssetAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadAssetAsync&lt;TObject&gt;(string)


```csharp title="Declaration"
public AssetOperationHandle LoadAssetAsync<TObject>(string location) where TObject : Object
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
public AssetOperationHandle LoadAssetAsync(string location, Type type)
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
public SubAssetsOperationHandle LoadSubAssetsSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadSubAssetsSync&lt;TObject&gt;(string)


```csharp title="Declaration"
public SubAssetsOperationHandle LoadSubAssetsSync<TObject>(string location) where TObject : Object
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
public SubAssetsOperationHandle LoadSubAssetsSync(string location, Type type)
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
public SubAssetsOperationHandle LoadSubAssetsAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### LoadSubAssetsAsync&lt;TObject&gt;(string)


```csharp title="Declaration"
public SubAssetsOperationHandle LoadSubAssetsAsync<TObject>(string location) where TObject : Object
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
public SubAssetsOperationHandle LoadSubAssetsAsync(string location, Type type)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `System.Type` | *type* |

### CreateResourceDownloader(int, int, int)


```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateResourceDownloader(string, int, int, int)


```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(string tag, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *tag* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateResourceDownloader(string[], int, int, int)


```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(string[] tags, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *tags* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateBundleDownloader(string, int, int, int)


```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(string location, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateBundleDownloader(string[], int, int, int)


```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(string[] locations, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *locations* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateBundleDownloader(AssetInfo, int, int, int)


```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(AssetInfo assetInfo, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateBundleDownloader(AssetInfo[], int, int, int)


```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(AssetInfo[] assetInfos, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `YooAsset.AssetInfo[]` | *assetInfos* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateResourceUnpacker(string, int, int)


```csharp title="Declaration"
public ResourceUnpackerOperation CreateResourceUnpacker(string tag, int unpackingMaxNumber, int failedTryAgain)
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
public ResourceUnpackerOperation CreateResourceUnpacker(string[] tags, int unpackingMaxNumber, int failedTryAgain)
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
public ResourceUnpackerOperation CreateResourceUnpacker(int unpackingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceUnpackerOperation](../YooAsset/ResourceUnpackerOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *unpackingMaxNumber* |
| `System.Int32` | *failedTryAgain* |

