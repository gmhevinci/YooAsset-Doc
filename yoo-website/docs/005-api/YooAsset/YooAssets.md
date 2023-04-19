---
title: Class YooAssets
sidebar_label: YooAssets
---
# Class YooAssets


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L9)
```csharp title="Declaration"
public static class YooAssets
```
## Methods
### SetDefaultPackage(ResourcePackage)
设置默认的资源包
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L16)
```csharp title="Declaration"
public static void SetDefaultPackage(ResourcePackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md) | *package* |

### IsNeedDownloadFromRemote(string)
是否需要从远端更新下载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L26)
```csharp title="Declaration"
public static bool IsNeedDownloadFromRemote(string location)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### IsNeedDownloadFromRemote(AssetInfo)
是否需要从远端更新下载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L36)
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
获取资源信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L46)
```csharp title="Declaration"
public static AssetInfo[] GetAssetInfos(string tag)
```

##### Returns

`YooAsset.AssetInfo[]`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *tag* | 资源标签 |

### GetAssetInfos(string[])
获取资源信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L56)
```csharp title="Declaration"
public static AssetInfo[] GetAssetInfos(string[] tags)
```

##### Returns

`YooAsset.AssetInfo[]`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *tags* | 资源标签列表 |

### GetAssetInfo(string)
获取资源信息
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L66)
```csharp title="Declaration"
public static AssetInfo GetAssetInfo(string location)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### CheckLocationValid(string)
检查资源定位地址是否有效
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L76)
```csharp title="Declaration"
public static bool CheckLocationValid(string location)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadRawFileSync(AssetInfo)
同步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L88)
```csharp title="Declaration"
public static RawFileOperationHandle LoadRawFileSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadRawFileSync(string)
同步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L98)
```csharp title="Declaration"
public static RawFileOperationHandle LoadRawFileSync(string location)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadRawFileAsync(AssetInfo)
异步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L108)
```csharp title="Declaration"
public static RawFileOperationHandle LoadRawFileAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadRawFileAsync(string)
异步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L118)
```csharp title="Declaration"
public static RawFileOperationHandle LoadRawFileAsync(string location)
```

##### Returns

[YooAsset.RawFileOperationHandle](../YooAsset/RawFileOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadSceneAsync(string, LoadSceneMode, bool, int)
异步加载场景
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L133)
```csharp title="Declaration"
public static SceneOperationHandle LoadSceneAsync(string location, LoadSceneMode sceneMode = LoadSceneMode.Single, bool activateOnLoad = true, int priority = 100)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L146)
```csharp title="Declaration"
public static SceneOperationHandle LoadSceneAsync(AssetInfo assetInfo, LoadSceneMode sceneMode = LoadSceneMode.Single, bool activateOnLoad = true, int priority = 100)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L158)
```csharp title="Declaration"
public static AssetOperationHandle LoadAssetSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadAssetSync&lt;TObject&gt;(string)
同步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L169)
```csharp title="Declaration"
public static AssetOperationHandle LoadAssetSync<TObject>(string location) where TObject : Object
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L180)
```csharp title="Declaration"
public static AssetOperationHandle LoadAssetSync(string location, Type type)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L191)
```csharp title="Declaration"
public static AssetOperationHandle LoadAssetAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetOperationHandle](../YooAsset/AssetOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadAssetAsync&lt;TObject&gt;(string)
异步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L202)
```csharp title="Declaration"
public static AssetOperationHandle LoadAssetAsync<TObject>(string location) where TObject : Object
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L213)
```csharp title="Declaration"
public static AssetOperationHandle LoadAssetAsync(string location, Type type)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L225)
```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadSubAssetsSync&lt;TObject&gt;(string)
同步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L236)
```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsSync<TObject>(string location) where TObject : Object
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L247)
```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsSync(string location, Type type)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L258)
```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsAsync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadSubAssetsAsync&lt;TObject&gt;(string)
异步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L269)
```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsAsync<TObject>(string location) where TObject : Object
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L280)
```csharp title="Declaration"
public static SubAssetsOperationHandle LoadSubAssetsAsync(string location, Type type)
```

##### Returns

[YooAsset.SubAssetsOperationHandle](../YooAsset/SubAssetsOperationHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |

### CreateResourceDownloader(int, int)
创建资源下载器，用于下载当前资源版本所有的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L293)
```csharp title="Declaration"
public static ResourceDownloaderOperation CreateResourceDownloader(int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |

### CreateResourceDownloader(string, int, int)
创建资源下载器，用于下载指定的资源标签关联的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L305)
```csharp title="Declaration"
public static ResourceDownloaderOperation CreateResourceDownloader(string tag, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *tag* | 资源标签 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |

### CreateResourceDownloader(string[], int, int)
创建资源下载器，用于下载指定的资源标签列表关联的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L317)
```csharp title="Declaration"
public static ResourceDownloaderOperation CreateResourceDownloader(string[] tags, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *tags* | 资源标签列表 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |

### CreateBundleDownloader(string, int, int)
创建资源下载器，用于下载指定的资源依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L329)
```csharp title="Declaration"
public static ResourceDownloaderOperation CreateBundleDownloader(string location, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源定位地址 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |

### CreateBundleDownloader(string[], int, int)
创建资源下载器，用于下载指定的资源列表依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L341)
```csharp title="Declaration"
public static ResourceDownloaderOperation CreateBundleDownloader(string[] locations, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *locations* | 资源定位地址列表 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |

### CreateBundleDownloader(AssetInfo, int, int)
创建资源下载器，用于下载指定的资源依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L353)
```csharp title="Declaration"
public static ResourceDownloaderOperation CreateBundleDownloader(AssetInfo assetInfo, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |

### CreateBundleDownloader(AssetInfo[], int, int)
创建资源下载器，用于下载指定的资源列表依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L365)
```csharp title="Declaration"
public static ResourceDownloaderOperation CreateBundleDownloader(AssetInfo[] assetInfos, int downloadingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `YooAsset.AssetInfo[]` | *assetInfos* | 资源信息列表 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |

### CreateResourceUnpacker(string, int, int)
创建内置资源解压器
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L379)
```csharp title="Declaration"
public static ResourceUnpackerOperation CreateResourceUnpacker(string tag, int unpackingMaxNumber, int failedTryAgain)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L391)
```csharp title="Declaration"
public static ResourceUnpackerOperation CreateResourceUnpacker(string[] tags, int unpackingMaxNumber, int failedTryAgain)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssetsExtension.cs#L402)
```csharp title="Declaration"
public static ResourceUnpackerOperation CreateResourceUnpacker(int unpackingMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceUnpackerOperation](../YooAsset/ResourceUnpackerOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *unpackingMaxNumber* | 同时解压的最大文件数 |
| `System.Int32` | *failedTryAgain* | 解压失败的重试次数 |

### Initialize(ILogger)
初始化资源系统
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L19)
```csharp title="Declaration"
public static void Initialize(ILogger logger = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.ILogger](../YooAsset/ILogger.md) | *logger* | 自定义日志处理 |

### Destroy()
销毁资源系统
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L48)
```csharp title="Declaration"
public static void Destroy()
```
### CreatePackage(string)
创建资源包
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L91)
```csharp title="Declaration"
public static ResourcePackage CreatePackage(string packageName)
```

##### Returns

[YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 资源包名称 |

### GetPackage(string)
获取资源包
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L111)
```csharp title="Declaration"
public static ResourcePackage GetPackage(string packageName)
```

##### Returns

[YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 资源包名称 |

### TryGetPackage(string)
尝试获取资源包
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L123)
```csharp title="Declaration"
public static ResourcePackage TryGetPackage(string packageName)
```

##### Returns

[YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 资源包名称 |

### HasPackage(string)
检测资源包是否存在
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L143)
```csharp title="Declaration"
public static bool HasPackage(string packageName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 资源包名称 |

### StartOperation(GameAsyncOperation)
开启一个异步操作
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L160)
```csharp title="Declaration"
public static void StartOperation(GameAsyncOperation operation)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.GameAsyncOperation](../YooAsset/GameAsyncOperation.md) | *operation* | 异步操作对象 |

### SetDownloadSystemBreakpointResumeFileSize(int)
设置下载系统参数，启用断点续传功能文件的最小字节数
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L169)
```csharp title="Declaration"
public static void SetDownloadSystemBreakpointResumeFileSize(int fileBytes)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *fileBytes* |

### SetDownloadSystemClearFileResponseCode(List&lt;long&gt;)
设置下载系统参数，下载失败后清理文件的HTTP错误码
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L177)
```csharp title="Declaration"
public static void SetDownloadSystemClearFileResponseCode(List<long> codes)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.Int64>` | *codes* |

### SetDownloadSystemCertificateHandler(CertificateHandler)
设置下载系统参数，自定义的证书认证实例
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L185)
```csharp title="Declaration"
public static void SetDownloadSystemCertificateHandler(CertificateHandler instance)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Networking.CertificateHandler` | *instance* |

### SetDownloadSystemUnityWebRequest(DownloadRequestDelegate)
设置下载系统参数，自定义下载请求
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L193)
```csharp title="Declaration"
public static void SetDownloadSystemUnityWebRequest(DownloadRequestDelegate requestDelegate)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DownloadRequestDelegate](../YooAsset/DownloadRequestDelegate.md) | *requestDelegate* |

### SetOperationSystemMaxTimeSlice(long)
设置异步系统参数，每帧执行消耗的最大时间切片（单位：毫秒）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L201)
```csharp title="Declaration"
public static void SetOperationSystemMaxTimeSlice(long milliseconds)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int64` | *milliseconds* |

### SetCacheSystemCachedFileVerifyLevel(EVerifyLevel)
设置缓存系统参数，已经缓存文件的校验等级
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L214)
```csharp title="Declaration"
public static void SetCacheSystemCachedFileVerifyLevel(EVerifyLevel verifyLevel)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.EVerifyLevel](../YooAsset/EVerifyLevel.md) | *verifyLevel* |

### GetStreamingAssetBuildinFolderName()
获取内置文件夹名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L224)
```csharp title="Declaration"
public static string GetStreamingAssetBuildinFolderName()
```

##### Returns

`System.String`
### GetSandboxRoot()
获取沙盒的根路径
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L232)
```csharp title="Declaration"
public static string GetSandboxRoot()
```

##### Returns

`System.String`
### ClearSandbox()
清空沙盒目录
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/YooAssets.cs#L240)
```csharp title="Declaration"
public static void ClearSandbox()
```
