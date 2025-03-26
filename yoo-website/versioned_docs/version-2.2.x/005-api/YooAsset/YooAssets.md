---
title: Class YooAssets
sidebar_label: YooAssets
---
# Class YooAssets


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public static class YooAssets
```
## Properties
### Initialized
是否已经初始化

```csharp title="Declaration"
public static bool Initialized { get; }
```
## Methods
### Initialize(ILogger)
初始化资源系统

```csharp title="Declaration"
public static void Initialize(ILogger logger = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.ILogger](../YooAsset/ILogger.md) | *logger* | 自定义日志处理 |

### CreatePackage(string)
创建资源包

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

```csharp title="Declaration"
public static ResourcePackage TryGetPackage(string packageName)
```

##### Returns

[YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 资源包名称 |

### RemovePackage(string)
移除资源包

```csharp title="Declaration"
public static bool RemovePackage(string packageName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 资源包名称 |

### RemovePackage(ResourcePackage)
移除资源包

```csharp title="Declaration"
public static bool RemovePackage(ResourcePackage package)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md) | *package* | 资源包实例对象 |

### ContainsPackage(string)
检测资源包是否存在

```csharp title="Declaration"
public static bool ContainsPackage(string packageName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 资源包名称 |

### StartOperation(GameAsyncOperation)
开启一个异步操作

```csharp title="Declaration"
public static void StartOperation(GameAsyncOperation operation)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.GameAsyncOperation](../YooAsset/GameAsyncOperation.md) | *operation* | 异步操作对象 |

### SetDownloadSystemUnityWebRequest(UnityWebRequestDelegate)
设置下载系统参数，自定义下载请求

```csharp title="Declaration"
public static void SetDownloadSystemUnityWebRequest(UnityWebRequestDelegate createDelegate)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.UnityWebRequestDelegate](../YooAsset/UnityWebRequestDelegate.md) | *createDelegate* |

### SetOperationSystemMaxTimeSlice(long)
设置异步系统参数，每帧执行消耗的最大时间切片（单位：毫秒）

```csharp title="Declaration"
public static void SetOperationSystemMaxTimeSlice(long milliseconds)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int64` | *milliseconds* |

### SetDefaultPackage(ResourcePackage)
设置默认的资源包

```csharp title="Declaration"
public static void SetDefaultPackage(ResourcePackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.ResourcePackage](../YooAsset/ResourcePackage.md) | *package* |

### IsNeedDownloadFromRemote(string)
是否需要从远端更新下载

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

```csharp title="Declaration"
public static AssetInfo GetAssetInfo(string location)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### GetAssetInfo(string, Type)
获取资源信息

```csharp title="Declaration"
public static AssetInfo GetAssetInfo(string location, Type type)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 资源类型 |

### GetAssetInfoByGUID(string)
获取资源信息

```csharp title="Declaration"
public static AssetInfo GetAssetInfoByGUID(string assetGUID)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *assetGUID* | 资源GUID |

### GetAssetInfoByGUID(string, Type)
获取资源信息

```csharp title="Declaration"
public static AssetInfo GetAssetInfoByGUID(string assetGUID, Type type)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *assetGUID* | 资源GUID |
| `System.Type` | *type* | 资源类型 |

### CheckLocationValid(string)
检查资源定位地址是否有效

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

```csharp title="Declaration"
public static RawFileHandle LoadRawFileSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileHandle](../YooAsset/RawFileHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadRawFileSync(string)
同步加载原生文件

```csharp title="Declaration"
public static RawFileHandle LoadRawFileSync(string location)
```

##### Returns

[YooAsset.RawFileHandle](../YooAsset/RawFileHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadRawFileAsync(AssetInfo, uint)
异步加载原生文件

```csharp title="Declaration"
public static RawFileHandle LoadRawFileAsync(AssetInfo assetInfo, uint priority = 0)
```

##### Returns

[YooAsset.RawFileHandle](../YooAsset/RawFileHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.UInt32` | *priority* |  |

### LoadRawFileAsync(string, uint)
异步加载原生文件

```csharp title="Declaration"
public static RawFileHandle LoadRawFileAsync(string location, uint priority = 0)
```

##### Returns

[YooAsset.RawFileHandle](../YooAsset/RawFileHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* |  |

### LoadSceneSync(string, LoadSceneMode, LocalPhysicsMode)
同步加载场景

```csharp title="Declaration"
public static SceneHandle LoadSceneSync(string location, LoadSceneMode sceneMode = LoadSceneMode.Single, LocalPhysicsMode physicsMode = LocalPhysicsMode.None)
```

##### Returns

[YooAsset.SceneHandle](../YooAsset/SceneHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 场景的定位地址 |
| `UnityEngine.SceneManagement.LoadSceneMode` | *sceneMode* | 场景加载模式 |
| `UnityEngine.SceneManagement.LocalPhysicsMode` | *physicsMode* | 场景物理模式 |

### LoadSceneSync(AssetInfo, LoadSceneMode, LocalPhysicsMode)
同步加载场景

```csharp title="Declaration"
public static SceneHandle LoadSceneSync(AssetInfo assetInfo, LoadSceneMode sceneMode = LoadSceneMode.Single, LocalPhysicsMode physicsMode = LocalPhysicsMode.None)
```

##### Returns

[YooAsset.SceneHandle](../YooAsset/SceneHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 场景的资源信息 |
| `UnityEngine.SceneManagement.LoadSceneMode` | *sceneMode* | 场景加载模式 |
| `UnityEngine.SceneManagement.LocalPhysicsMode` | *physicsMode* | 场景物理模式 |

### LoadSceneAsync(string, LoadSceneMode, LocalPhysicsMode, bool, uint)
异步加载场景

```csharp title="Declaration"
public static SceneHandle LoadSceneAsync(string location, LoadSceneMode sceneMode = LoadSceneMode.Single, LocalPhysicsMode physicsMode = LocalPhysicsMode.None, bool suspendLoad = false, uint priority = 100)
```

##### Returns

[YooAsset.SceneHandle](../YooAsset/SceneHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 场景的定位地址 |
| `UnityEngine.SceneManagement.LoadSceneMode` | *sceneMode* | 场景加载模式 |
| `UnityEngine.SceneManagement.LocalPhysicsMode` | *physicsMode* | 场景物理模式 |
| `System.Boolean` | *suspendLoad* | 场景加载到90%自动挂起 |
| `System.UInt32` | *priority* | 优先级 |

### LoadSceneAsync(AssetInfo, LoadSceneMode, LocalPhysicsMode, bool, uint)
异步加载场景

```csharp title="Declaration"
public static SceneHandle LoadSceneAsync(AssetInfo assetInfo, LoadSceneMode sceneMode = LoadSceneMode.Single, LocalPhysicsMode physicsMode = LocalPhysicsMode.None, bool suspendLoad = false, uint priority = 100)
```

##### Returns

[YooAsset.SceneHandle](../YooAsset/SceneHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 场景的资源信息 |
| `UnityEngine.SceneManagement.LoadSceneMode` | *sceneMode* | 场景加载模式 |
| `UnityEngine.SceneManagement.LocalPhysicsMode` | *physicsMode* | 场景物理模式 |
| `System.Boolean` | *suspendLoad* | 场景加载到90%自动挂起 |
| `System.UInt32` | *priority* | 优先级 |

### LoadAssetSync(AssetInfo)
同步加载资源对象

```csharp title="Declaration"
public static AssetHandle LoadAssetSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadAssetSync&lt;TObject&gt;(string)
同步加载资源对象

```csharp title="Declaration"
public static AssetHandle LoadAssetSync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

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

```csharp title="Declaration"
public static AssetHandle LoadAssetSync(string location, Type type)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 资源类型 |

### LoadAssetSync(string)
同步加载资源对象

```csharp title="Declaration"
public static AssetHandle LoadAssetSync(string location)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadAssetAsync(AssetInfo, uint)
异步加载资源对象

```csharp title="Declaration"
public static AssetHandle LoadAssetAsync(AssetInfo assetInfo, uint priority = 0)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.UInt32` | *priority* |  |

### LoadAssetAsync&lt;TObject&gt;(string, uint)
异步加载资源对象

```csharp title="Declaration"
public static AssetHandle LoadAssetAsync<TObject>(string location, uint priority = 0) where TObject : Object
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* |  |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadAssetAsync(string, Type, uint)
异步加载资源对象

```csharp title="Declaration"
public static AssetHandle LoadAssetAsync(string location, Type type, uint priority = 0)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 资源类型 |
| `System.UInt32` | *priority* |  |

### LoadAssetAsync(string, uint)
异步加载资源对象

```csharp title="Declaration"
public static AssetHandle LoadAssetAsync(string location, uint priority = 0)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* |  |

### LoadSubAssetsSync(AssetInfo)
同步加载子资源对象

```csharp title="Declaration"
public static SubAssetsHandle LoadSubAssetsSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadSubAssetsSync&lt;TObject&gt;(string)
同步加载子资源对象

```csharp title="Declaration"
public static SubAssetsHandle LoadSubAssetsSync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

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

```csharp title="Declaration"
public static SubAssetsHandle LoadSubAssetsSync(string location, Type type)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |

### LoadSubAssetsSync(string)
同步加载子资源对象

```csharp title="Declaration"
public static SubAssetsHandle LoadSubAssetsSync(string location)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadSubAssetsAsync(AssetInfo, uint)
异步加载子资源对象

```csharp title="Declaration"
public static SubAssetsHandle LoadSubAssetsAsync(AssetInfo assetInfo, uint priority = 0)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.UInt32` | *priority* |  |

### LoadSubAssetsAsync&lt;TObject&gt;(string, uint)
异步加载子资源对象

```csharp title="Declaration"
public static SubAssetsHandle LoadSubAssetsAsync<TObject>(string location, uint priority = 0) where TObject : Object
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* |  |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadSubAssetsAsync(string, Type, uint)
异步加载子资源对象

```csharp title="Declaration"
public static SubAssetsHandle LoadSubAssetsAsync(string location, Type type, uint priority = 0)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |
| `System.UInt32` | *priority* |  |

### LoadSubAssetsAsync(string, uint)
异步加载子资源对象

```csharp title="Declaration"
public static SubAssetsHandle LoadSubAssetsAsync(string location, uint priority = 0)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* |  |

### LoadAllAssetsSync(AssetInfo)
同步加载资源包内所有资源对象

```csharp title="Declaration"
public static AllAssetsHandle LoadAllAssetsSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadAllAssetsSync&lt;TObject&gt;(string)
同步加载资源包内所有资源对象

```csharp title="Declaration"
public static AllAssetsHandle LoadAllAssetsSync<TObject>(string location) where TObject : Object
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadAllAssetsSync(string, Type)
同步加载资源包内所有资源对象

```csharp title="Declaration"
public static AllAssetsHandle LoadAllAssetsSync(string location, Type type)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |

### LoadAllAssetsSync(string)
同步加载资源包内所有资源对象

```csharp title="Declaration"
public static AllAssetsHandle LoadAllAssetsSync(string location)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadAllAssetsAsync(AssetInfo, uint)
异步加载资源包内所有资源对象

```csharp title="Declaration"
public static AllAssetsHandle LoadAllAssetsAsync(AssetInfo assetInfo, uint priority = 0)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.UInt32` | *priority* |  |

### LoadAllAssetsAsync&lt;TObject&gt;(string, uint)
异步加载资源包内所有资源对象

```csharp title="Declaration"
public static AllAssetsHandle LoadAllAssetsAsync<TObject>(string location, uint priority = 0) where TObject : Object
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* |  |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadAllAssetsAsync(string, Type, uint)
异步加载资源包内所有资源对象

```csharp title="Declaration"
public static AllAssetsHandle LoadAllAssetsAsync(string location, Type type, uint priority = 0)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |
| `System.UInt32` | *priority* |  |

### LoadAllAssetsAsync(string, uint)
异步加载资源包内所有资源对象

```csharp title="Declaration"
public static AllAssetsHandle LoadAllAssetsAsync(string location, uint priority = 0)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* |  |

### CreateResourceDownloader(int, int)
创建资源下载器，用于下载当前资源版本所有的资源包文件

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

### CreateResourceUnpacker(int, int)
创建内置资源解压器，用于解压当前资源版本所有的资源包文件

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

### CreateResourceUnpacker(string, int, int)
创建内置资源解压器，用于解压指定的资源标签关联的资源包文件

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
创建内置资源解压器，用于解压指定的资源标签列表关联的资源包文件

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

### CreateResourceImporter(string[], int, int)
创建资源导入器
注意：资源文件名称必须和资源服务器部署的文件名称一致！

```csharp title="Declaration"
public static ResourceImporterOperation CreateResourceImporter(string[] filePaths, int importerMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceImporterOperation](../YooAsset/ResourceImporterOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *filePaths* | 资源路径列表 |
| `System.Int32` | *importerMaxNumber* | 同时导入的最大文件数 |
| `System.Int32` | *failedTryAgain* | 导入失败的重试次数 |

