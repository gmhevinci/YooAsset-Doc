---
title: Class ResourcePackage
sidebar_label: ResourcePackage
---
# Class ResourcePackage


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L9)
```csharp title="Declaration"
public class ResourcePackage
```
## Properties
### InitializeStatus
初始化状态
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L29)
```csharp title="Declaration"
public EOperationStatus InitializeStatus { get; }
```
### PackageValid
包裹是否有效
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L37)
```csharp title="Declaration"
public bool PackageValid { get; }
```
## Fields
### PackageName
包裹名
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L24)
```csharp title="Declaration"
public readonly string PackageName
```
## Methods
### InitializeAsync(InitializeParameters)
异步初始化
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L83)
```csharp title="Declaration"
public InitializationOperation InitializeAsync(InitializeParameters parameters)
```

##### Returns

[YooAsset.InitializationOperation](../YooAsset/InitializationOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.InitializeParameters](../YooAsset/InitializeParameters.md) | *parameters* |

### DestroyAsync()
异步销毁
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L206)
```csharp title="Declaration"
public DestroyOperation DestroyAsync()
```

##### Returns

[YooAsset.DestroyOperation](../YooAsset/DestroyOperation.md)
### RequestPackageVersionAsync(bool, int)
请求最新的资源版本
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L218)
```csharp title="Declaration"
public RequestPackageVersionOperation RequestPackageVersionAsync(bool appendTimeTicks = true, int timeout = 60)
```

##### Returns

[YooAsset.RequestPackageVersionOperation](../YooAsset/RequestPackageVersionOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *appendTimeTicks* | 在URL末尾添加时间戳 |
| `System.Int32` | *timeout* | 超时时间（默认值：60秒） |

### UpdatePackageManifestAsync(string, int)
更新并加载指定版本的资源清单
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L231)
```csharp title="Declaration"
public UpdatePackageManifestOperation UpdatePackageManifestAsync(string packageVersion, int timeout = 60)
```

##### Returns

[YooAsset.UpdatePackageManifestOperation](../YooAsset/UpdatePackageManifestOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageVersion* | 包裹版本 |
| `System.Int32` | *timeout* | 超时时间（默认值：60秒） |

### PreDownloadContentAsync(string, int)
预下载指定版本的包裹资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L251)
```csharp title="Declaration"
public PreDownloadContentOperation PreDownloadContentAsync(string packageVersion, int timeout = 60)
```

##### Returns

[YooAsset.PreDownloadContentOperation](../YooAsset/PreDownloadContentOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageVersion* | 包裹版本 |
| `System.Int32` | *timeout* | 超时时间（默认值：60秒） |

### ClearCacheFilesAsync(EFileClearMode, object)
清理缓存文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L264)
```csharp title="Declaration"
public ClearCacheFilesOperation ClearCacheFilesAsync(EFileClearMode clearMode, object clearParam = null)
```

##### Returns

[YooAsset.ClearCacheFilesOperation](../YooAsset/ClearCacheFilesOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.EFileClearMode](../YooAsset/EFileClearMode.md) | *clearMode* | 清理方式 |
| `System.Object` | *clearParam* | 执行参数 |

### ClearCacheFilesAsync(string, object)
清理缓存文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L277)
```csharp title="Declaration"
public ClearCacheFilesOperation ClearCacheFilesAsync(string clearMode, object clearParam = null)
```

##### Returns

[YooAsset.ClearCacheFilesOperation](../YooAsset/ClearCacheFilesOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *clearMode* | 清理方式 |
| `System.Object` | *clearParam* | 执行参数 |

### GetPackageVersion()
获取当前加载包裹的版本信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L290)
```csharp title="Declaration"
public string GetPackageVersion()
```

##### Returns

`System.String`
### GetPackageNote()
获取当前加载包裹的备注信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L299)
```csharp title="Declaration"
public string GetPackageNote()
```

##### Returns

`System.String`
### GetPackageDetails()
获取当前加载包裹的详细信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L308)
```csharp title="Declaration"
public PackageDetails GetPackageDetails()
```

##### Returns

[YooAsset.PackageDetails](../YooAsset/PackageDetails.md)
### UnloadAllAssetsAsync()
强制回收所有资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L319)
```csharp title="Declaration"
public UnloadAllAssetsOperation UnloadAllAssetsAsync()
```

##### Returns

[YooAsset.UnloadAllAssetsOperation](../YooAsset/UnloadAllAssetsOperation.md)
### UnloadAllAssetsAsync(UnloadAllAssetsOptions)
强制回收所有资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L329)
```csharp title="Declaration"
public UnloadAllAssetsOperation UnloadAllAssetsAsync(UnloadAllAssetsOptions options)
```

##### Returns

[YooAsset.UnloadAllAssetsOperation](../YooAsset/UnloadAllAssetsOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.UnloadAllAssetsOptions](../YooAsset/UnloadAllAssetsOptions.md) | *options* | 卸载选项 |

### UnloadUnusedAssetsAsync(int)
回收不再使用的资源
说明：卸载引用计数为零的资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L342)
```csharp title="Declaration"
public UnloadUnusedAssetsOperation UnloadUnusedAssetsAsync(int loopCount = 10)
```

##### Returns

[YooAsset.UnloadUnusedAssetsOperation](../YooAsset/UnloadUnusedAssetsOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *loopCount* | 循环迭代次数 |

### TryUnloadUnusedAsset(string)
资源回收
说明：尝试卸载指定的资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L354)
```csharp title="Declaration"
public void TryUnloadUnusedAsset(string location)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |

### TryUnloadUnusedAsset(AssetInfo)
资源回收
说明：尝试卸载指定的资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L365)
```csharp title="Declaration"
public void TryUnloadUnusedAsset(AssetInfo assetInfo)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### IsNeedDownloadFromRemote(string)
是否需要从远端更新下载
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L377)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L388)
```csharp title="Declaration"
public bool IsNeedDownloadFromRemote(AssetInfo assetInfo)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* |

### GetAllAssetInfos()
获取所有的资源信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L397)
```csharp title="Declaration"
public AssetInfo[] GetAllAssetInfos()
```

##### Returns

`YooAsset.AssetInfo[]`
### GetAssetInfos(string)
获取资源信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L407)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L418)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L428)
```csharp title="Declaration"
public AssetInfo GetAssetInfo(string location)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### GetAssetInfo(string, Type)
获取资源信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L439)
```csharp title="Declaration"
public AssetInfo GetAssetInfo(string location, Type type)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L449)
```csharp title="Declaration"
public AssetInfo GetAssetInfoByGUID(string assetGUID)
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *assetGUID* | 资源GUID |

### GetAssetInfoByGUID(string, Type)
获取资源信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L460)
```csharp title="Declaration"
public AssetInfo GetAssetInfoByGUID(string assetGUID, Type type)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L470)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L505)
```csharp title="Declaration"
public RawFileHandle LoadRawFileSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.RawFileHandle](../YooAsset/RawFileHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadRawFileSync(string)
同步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L515)
```csharp title="Declaration"
public RawFileHandle LoadRawFileSync(string location)
```

##### Returns

[YooAsset.RawFileHandle](../YooAsset/RawFileHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadRawFileAsync(AssetInfo, uint)
异步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L527)
```csharp title="Declaration"
public RawFileHandle LoadRawFileAsync(AssetInfo assetInfo, uint priority = 0)
```

##### Returns

[YooAsset.RawFileHandle](../YooAsset/RawFileHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadRawFileAsync(string, uint)
异步加载原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L538)
```csharp title="Declaration"
public RawFileHandle LoadRawFileAsync(string location, uint priority = 0)
```

##### Returns

[YooAsset.RawFileHandle](../YooAsset/RawFileHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadSceneSync(string, LoadSceneMode, LocalPhysicsMode)
同步加载场景
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L562)
```csharp title="Declaration"
public SceneHandle LoadSceneSync(string location, LoadSceneMode sceneMode = LoadSceneMode.Single, LocalPhysicsMode physicsMode = LocalPhysicsMode.None)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L575)
```csharp title="Declaration"
public SceneHandle LoadSceneSync(AssetInfo assetInfo, LoadSceneMode sceneMode = LoadSceneMode.Single, LocalPhysicsMode physicsMode = LocalPhysicsMode.None)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L589)
```csharp title="Declaration"
public SceneHandle LoadSceneAsync(string location, LoadSceneMode sceneMode = LoadSceneMode.Single, LocalPhysicsMode physicsMode = LocalPhysicsMode.None, bool suspendLoad = false, uint priority = 0)
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
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadSceneAsync(AssetInfo, LoadSceneMode, LocalPhysicsMode, bool, uint)
异步加载场景
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L604)
```csharp title="Declaration"
public SceneHandle LoadSceneAsync(AssetInfo assetInfo, LoadSceneMode sceneMode = LoadSceneMode.Single, LocalPhysicsMode physicsMode = LocalPhysicsMode.None, bool suspendLoad = false, uint priority = 0)
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
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadAssetSync(AssetInfo)
同步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L627)
```csharp title="Declaration"
public AssetHandle LoadAssetSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadAssetSync&lt;TObject&gt;(string)
同步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L638)
```csharp title="Declaration"
public AssetHandle LoadAssetSync<TObject>(string location) where TObject : Object
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L650)
```csharp title="Declaration"
public AssetHandle LoadAssetSync(string location, Type type)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L661)
```csharp title="Declaration"
public AssetHandle LoadAssetSync(string location)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadAssetAsync(AssetInfo, uint)
异步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L675)
```csharp title="Declaration"
public AssetHandle LoadAssetAsync(AssetInfo assetInfo, uint priority = 0)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadAssetAsync&lt;TObject&gt;(string, uint)
异步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L687)
```csharp title="Declaration"
public AssetHandle LoadAssetAsync<TObject>(string location, uint priority = 0) where TObject : Object
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* | 加载的优先级 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadAssetAsync(string, Type, uint)
异步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L700)
```csharp title="Declaration"
public AssetHandle LoadAssetAsync(string location, Type type, uint priority = 0)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 资源类型 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadAssetAsync(string, uint)
异步加载资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L712)
```csharp title="Declaration"
public AssetHandle LoadAssetAsync(string location, uint priority = 0)
```

##### Returns

[YooAsset.AssetHandle](../YooAsset/AssetHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadSubAssetsSync(AssetInfo)
同步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L737)
```csharp title="Declaration"
public SubAssetsHandle LoadSubAssetsSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadSubAssetsSync&lt;TObject&gt;(string)
同步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L748)
```csharp title="Declaration"
public SubAssetsHandle LoadSubAssetsSync<TObject>(string location) where TObject : Object
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L760)
```csharp title="Declaration"
public SubAssetsHandle LoadSubAssetsSync(string location, Type type)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L771)
```csharp title="Declaration"
public SubAssetsHandle LoadSubAssetsSync(string location)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadSubAssetsAsync(AssetInfo, uint)
异步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L785)
```csharp title="Declaration"
public SubAssetsHandle LoadSubAssetsAsync(AssetInfo assetInfo, uint priority = 0)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadSubAssetsAsync&lt;TObject&gt;(string, uint)
异步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L797)
```csharp title="Declaration"
public SubAssetsHandle LoadSubAssetsAsync<TObject>(string location, uint priority = 0) where TObject : Object
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* | 加载的优先级 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadSubAssetsAsync(string, Type, uint)
异步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L810)
```csharp title="Declaration"
public SubAssetsHandle LoadSubAssetsAsync(string location, Type type, uint priority = 0)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadSubAssetsAsync(string, uint)
异步加载子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L822)
```csharp title="Declaration"
public SubAssetsHandle LoadSubAssetsAsync(string location, uint priority = 0)
```

##### Returns

[YooAsset.SubAssetsHandle](../YooAsset/SubAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadAllAssetsSync(AssetInfo)
同步加载资源包内所有资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L847)
```csharp title="Declaration"
public AllAssetsHandle LoadAllAssetsSync(AssetInfo assetInfo)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |

### LoadAllAssetsSync&lt;TObject&gt;(string)
同步加载资源包内所有资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L858)
```csharp title="Declaration"
public AllAssetsHandle LoadAllAssetsSync<TObject>(string location) where TObject : Object
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L870)
```csharp title="Declaration"
public AllAssetsHandle LoadAllAssetsSync(string location, Type type)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L881)
```csharp title="Declaration"
public AllAssetsHandle LoadAllAssetsSync(string location)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |

### LoadAllAssetsAsync(AssetInfo, uint)
异步加载资源包内所有资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L895)
```csharp title="Declaration"
public AllAssetsHandle LoadAllAssetsAsync(AssetInfo assetInfo, uint priority = 0)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadAllAssetsAsync&lt;TObject&gt;(string, uint)
异步加载资源包内所有资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L907)
```csharp title="Declaration"
public AllAssetsHandle LoadAllAssetsAsync<TObject>(string location, uint priority = 0) where TObject : Object
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* | 加载的优先级 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 资源类型 |
### LoadAllAssetsAsync(string, Type, uint)
异步加载资源包内所有资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L920)
```csharp title="Declaration"
public AllAssetsHandle LoadAllAssetsAsync(string location, Type type, uint priority = 0)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Type` | *type* | 子对象类型 |
| `System.UInt32` | *priority* | 加载的优先级 |

### LoadAllAssetsAsync(string, uint)
异步加载资源包内所有资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L932)
```csharp title="Declaration"
public AllAssetsHandle LoadAllAssetsAsync(string location, uint priority = 0)
```

##### Returns

[YooAsset.AllAssetsHandle](../YooAsset/AllAssetsHandle.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.UInt32` | *priority* | 加载的优先级 |

### CreateResourceDownloader(int, int, int)
创建资源下载器，用于下载当前资源版本所有的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L959)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L972)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L985)
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

### CreateBundleDownloader(string, bool, int, int, int)
创建资源下载器，用于下载指定的资源依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L999)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(string location, bool recursiveDownload, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源的定位地址 |
| `System.Boolean` | *recursiveDownload* | 下载资源对象所属资源包内所有资源对象依赖的资源包 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(string, int, int, int)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1006)
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

### CreateBundleDownloader(string[], bool, int, int, int)
创建资源下载器，用于下载指定的资源列表依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1019)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(string[] locations, bool recursiveDownload, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *locations* | 资源的定位地址列表 |
| `System.Boolean` | *recursiveDownload* | 下载资源对象所属资源包内所有资源对象依赖的资源包 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(string[], int, int, int)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1030)
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

### CreateBundleDownloader(AssetInfo, bool, int, int, int)
创建资源下载器，用于下载指定的资源依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1043)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(AssetInfo assetInfo, bool recursiveDownload, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.AssetInfo](../YooAsset/AssetInfo.md) | *assetInfo* | 资源信息 |
| `System.Boolean` | *recursiveDownload* | 下载资源对象所属资源包内所有资源对象依赖的资源包 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(AssetInfo, int, int, int)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1049)
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

### CreateBundleDownloader(AssetInfo[], bool, int, int, int)
创建资源下载器，用于下载指定的资源列表依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1062)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(AssetInfo[] assetInfos, bool recursiveDownload, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `YooAsset.AssetInfo[]` | *assetInfos* | 资源信息列表 |
| `System.Boolean` | *recursiveDownload* | 下载资源对象所属资源包内所有资源对象依赖的资源包 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(AssetInfo[], int, int, int)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1067)
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

### CreateResourceUnpacker(int, int)
创建内置资源解压器，用于解压当前资源版本所有的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1079)
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

### CreateResourceUnpacker(string, int, int)
创建内置资源解压器，用于解压指定的资源标签关联的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1091)
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
创建内置资源解压器，用于解压指定的资源标签列表关联的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1103)
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

### CreateResourceImporter(string[], int, int)
创建资源导入器
注意：资源文件名称必须和资源服务器部署的文件名称一致！
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/ResourcePackage.cs#L1118)
```csharp title="Declaration"
public ResourceImporterOperation CreateResourceImporter(string[] filePaths, int importerMaxNumber, int failedTryAgain)
```

##### Returns

[YooAsset.ResourceImporterOperation](../YooAsset/ResourceImporterOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *filePaths* | 资源路径列表 |
| `System.Int32` | *importerMaxNumber* | 同时导入的最大文件数 |
| `System.Int32` | *failedTryAgain* | 导入失败的重试次数 |

