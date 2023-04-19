---
title: Class ResourcePackage
sidebar_label: ResourcePackage
---
# Class ResourcePackage


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L9)
```csharp title="Declaration"
public class ResourcePackage
```
## Properties
### PackageName
包裹名
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L22)
```csharp title="Declaration"
public string PackageName { get; }
```
### InitializeStatus
初始化状态
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L27)
```csharp title="Declaration"
public EOperationStatus InitializeStatus { get; }
```
## Methods
### InitializeAsync(InitializeParameters)
异步初始化
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L74)
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
向网络端请求最新的资源版本
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L213)
```csharp title="Declaration"
public UpdatePackageVersionOperation UpdatePackageVersionAsync(bool appendTimeTicks = true, int timeout = 60)
```

##### Returns

[YooAsset.UpdatePackageVersionOperation](../YooAsset/UpdatePackageVersionOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *appendTimeTicks* | 在URL末尾添加时间戳 |
| `System.Int32` | *timeout* | 超时时间（默认值：60秒） |

### UpdatePackageManifestAsync(string, int)
向网络端请求并更新清单
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L225)
```csharp title="Declaration"
public UpdatePackageManifestOperation UpdatePackageManifestAsync(string packageVersion, int timeout = 60)
```

##### Returns

[YooAsset.UpdatePackageManifestOperation](../YooAsset/UpdatePackageManifestOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageVersion* | 更新的包裹版本 |
| `System.Int32` | *timeout* | 超时时间（默认值：60秒） |

### PreDownloadContentAsync(string, int)
预下载指定版本的包裹资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L237)
```csharp title="Declaration"
public PreDownloadContentOperation PreDownloadContentAsync(string packageVersion, int timeout = 60)
```

##### Returns

[YooAsset.PreDownloadContentOperation](../YooAsset/PreDownloadContentOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageVersion* | 下载的包裹版本 |
| `System.Int32` | *timeout* | 超时时间（默认值：60秒） |

### ClearUnusedCacheFilesAsync()
清理包裹未使用的缓存文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L246)
```csharp title="Declaration"
public ClearUnusedCacheFilesOperation ClearUnusedCacheFilesAsync()
```

##### Returns

[YooAsset.ClearUnusedCacheFilesOperation](../YooAsset/ClearUnusedCacheFilesOperation.md)
### GetPackageVersion()
获取本地包裹的版本信息
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L257)
```csharp title="Declaration"
public string GetPackageVersion()
```

##### Returns

`System.String`
### UnloadUnusedAssets()
资源回收（卸载引用计数为零的资源）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L268)
```csharp title="Declaration"
public void UnloadUnusedAssets()
```
### ForceUnloadAllAssets()
强制回收所有资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L278)
```csharp title="Declaration"
public void ForceUnloadAllAssets()
```
### IsNeedDownloadFromRemote(string)
是否需要从远端更新下载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L290)
```csharp title="Declaration"
public bool IsNeedDownloadFromRemote(string location)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### IsNeedDownloadFromRemote(AssetInfo)
是否需要从远端更新下载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L311)
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
获取资源信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L331)
```csharp title="Declaration"
public AssetInfo[] GetAssetInfos(string tag)
```

##### Returns

`YooAsset.AssetInfo[]`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *tag* | 资源标签 |

### GetAssetInfos(string[])
获取资源信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L342)
```csharp title="Declaration"
public AssetInfo[] GetAssetInfos(string[] tags)
```

##### Returns

`YooAsset.AssetInfo[]`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *tags* | 资源标签列表 |

### GetAssetInfo(string)
获取资源信息
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L352)
```csharp title="Declaration"
public AssetInfo GetAssetInfo(string location)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### CheckLocationValid(string)
检查资源定位地址是否有效
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L363)
```csharp title="Declaration"
public bool CheckLocationValid(string location)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadRawFileSync(AssetInfo)
同步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L376)
```csharp title="Declaration"
public RawFileOperationHandle LoadRawFileSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadRawFileSync(string)
同步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L386)
```csharp title="Declaration"
public RawFileOperationHandle LoadRawFileSync(string location)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadRawFileAsync(AssetInfo)
异步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L397)
```csharp title="Declaration"
public RawFileOperationHandle LoadRawFileAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadRawFileAsync(string)
异步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L407)
```csharp title="Declaration"
public RawFileOperationHandle LoadRawFileAsync(string location)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadSceneAsync(string, LoadSceneMode, bool, int)
异步加载场景
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L441)
```csharp title="Declaration"
public SceneOperationHandle LoadSceneAsync(string location, LoadSceneMode sceneMode = LoadSceneMode.Single, bool activateOnLoad = true, int priority = 100)
```

##### Returns

[YooAsset.SceneOperationHandle](../YooAsset/SceneOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 场景的定位地址 |
| `UnityEngine.SceneManagement.LoadSceneMode` | *sceneMode* | 场景加载模式 |
| `System.Boolean` | *activateOnLoad* | 加载完毕时是否主动激活 |
| `System.Int32` | *priority* | 优先级 |

### LoadSceneAsync(AssetInfo, LoadSceneMode, bool, int)
异步加载场景
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L456)
```csharp title="Declaration"
public SceneOperationHandle LoadSceneAsync(AssetInfo assetInfo, LoadSceneMode sceneMode = LoadSceneMode.Single, bool activateOnLoad = true, int priority = 100)
```

##### Returns

[YooAsset.SceneOperationHandle](../YooAsset/SceneOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 场景的资源信息 |
| `UnityEngine.SceneManagement.LoadSceneMode` | *sceneMode* | 场景加载模式 |
| `System.Boolean` | *activateOnLoad* | 加载完毕时是否主动激活 |
| `System.Int32` | *priority* | 优先级 |

### LoadAssetSync(AssetInfo)
同步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L469)
```csharp title="Declaration"
public AssetOperationHandle LoadAssetSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadAssetSync&lt;TObject&gt;(string)
同步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L480)
```csharp title="Declaration"
public AssetOperationHandle LoadAssetSync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadAssetSync(string, Type)
同步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L492)
```csharp title="Declaration"
public AssetOperationHandle LoadAssetSync(string location, Type type)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 资源类型 |

### LoadAssetAsync(AssetInfo)
异步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L504)
```csharp title="Declaration"
public AssetOperationHandle LoadAssetAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadAssetAsync&lt;TObject&gt;(string)
异步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L515)
```csharp title="Declaration"
public AssetOperationHandle LoadAssetAsync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadAssetAsync(string, Type)
异步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L527)
```csharp title="Declaration"
public AssetOperationHandle LoadAssetAsync(string location, Type type)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 资源类型 |

### LoadSubAssetsSync(AssetInfo)
同步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L558)
```csharp title="Declaration"
public SubAssetsOperationHandle LoadSubAssetsSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadSubAssetsSync&lt;TObject&gt;(string)
同步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L569)
```csharp title="Declaration"
public SubAssetsOperationHandle LoadSubAssetsSync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadSubAssetsSync(string, Type)
同步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L581)
```csharp title="Declaration"
public SubAssetsOperationHandle LoadSubAssetsSync(string location, Type type)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |

### LoadSubAssetsAsync(AssetInfo)
异步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L593)
```csharp title="Declaration"
public SubAssetsOperationHandle LoadSubAssetsAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadSubAssetsAsync&lt;TObject&gt;(string)
异步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L604)
```csharp title="Declaration"
public SubAssetsOperationHandle LoadSubAssetsAsync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadSubAssetsAsync(string, Type)
异步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L616)
```csharp title="Declaration"
public SubAssetsOperationHandle LoadSubAssetsAsync(string location, Type type)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |

### CreateResourceDownloader(int, int, int)
创建资源下载器，用于下载当前资源版本所有的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L649)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateResourceDownloader(string, int, int, int)
创建资源下载器，用于下载指定的资源标签关联的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L662)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(string tag, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *tag* | 资源标签 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateResourceDownloader(string[], int, int, int)
创建资源下载器，用于下载指定的资源标签列表关联的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L675)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(string[] tags, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *tags* | 资源标签列表 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(string, int, int, int)
创建资源下载器，用于下载指定的资源依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L688)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(string location, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(string[], int, int, int)
创建资源下载器，用于下载指定的资源列表依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L703)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(string[] locations, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *locations* | 资源的定位地址列表 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(AssetInfo, int, int, int)
创建资源下载器，用于下载指定的资源依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L722)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(AssetInfo assetInfo, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(AssetInfo[], int, int, int)
创建资源下载器，用于下载指定的资源列表依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L736)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(AssetInfo[] assetInfos, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `YooAsset.AssetInfo[]` | *assetInfos* | 资源信息列表 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateResourceUnpacker(string, int, int)
创建内置资源解压器
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L750)
```csharp title="Declaration"
public ResourceUnpackerOperation CreateResourceUnpacker(string tag, int unpackingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceUnpackerOperation](../YooAsset/ResourceUnpackerOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *tag* | 资源标签 |
| `System.Int32` | *unpackingMaxNumber* | 同时解压的最大文件数 |
| `System.Int32` | *failedTryAgain* | 解压失败的重试次数 |

### CreateResourceUnpacker(string[], int, int)
创建内置资源解压器
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L762)
```csharp title="Declaration"
public ResourceUnpackerOperation CreateResourceUnpacker(string[] tags, int unpackingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceUnpackerOperation](../YooAsset/ResourceUnpackerOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *tags* | 资源标签列表 |
| `System.Int32` | *unpackingMaxNumber* | 同时解压的最大文件数 |
| `System.Int32` | *failedTryAgain* | 解压失败的重试次数 |

### CreateResourceUnpacker(int, int)
创建内置资源解压器
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/ResourcePackage.cs#L773)
```csharp title="Declaration"
public ResourceUnpackerOperation CreateResourceUnpacker(int unpackingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceUnpackerOperation](../YooAsset/ResourceUnpackerOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *unpackingMaxNumber* | 同时解压的最大文件数 |
| `System.Int32` | *failedTryAgain* | 解压失败的重试次数 |

