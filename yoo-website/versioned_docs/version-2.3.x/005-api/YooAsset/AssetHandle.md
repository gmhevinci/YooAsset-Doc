---
title: Class AssetHandle
sidebar_label: AssetHandle
---
# Class AssetHandle


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L5)
```csharp title="Declaration"
public sealed class AssetHandle : HandleBase, IEnumerator, IDisposable
```
## Properties
### AssetObject
资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L53)
```csharp title="Declaration"
public Object AssetObject { get; }
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L42)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### GetAssetObject&lt;TAsset&gt;()
获取资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L67)
```csharp title="Declaration"
public TAsset GetAssetObject<TAsset>() where TAsset : Object
```

##### Returns

`<TAsset>`
##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TAsset` | 资源类型 |
### InstantiateSync()
同步初始化游戏对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L77)
```csharp title="Declaration"
public GameObject InstantiateSync()
```

##### Returns

`UnityEngine.GameObject`
### InstantiateSync(Transform)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L81)
```csharp title="Declaration"
public GameObject InstantiateSync(Transform parent)
```

##### Returns

`UnityEngine.GameObject`

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Transform` | *parent* |

### InstantiateSync(Transform, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L85)
```csharp title="Declaration"
public GameObject InstantiateSync(Transform parent, bool worldPositionStays)
```

##### Returns

`UnityEngine.GameObject`

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Transform` | *parent* |
| `System.Boolean` | *worldPositionStays* |

### InstantiateSync(Vector3, Quaternion)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L89)
```csharp title="Declaration"
public GameObject InstantiateSync(Vector3 position, Quaternion rotation)
```

##### Returns

`UnityEngine.GameObject`

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Vector3` | *position* |
| `UnityEngine.Quaternion` | *rotation* |

### InstantiateSync(Vector3, Quaternion, Transform)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L93)
```csharp title="Declaration"
public GameObject InstantiateSync(Vector3 position, Quaternion rotation, Transform parent)
```

##### Returns

`UnityEngine.GameObject`

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Vector3` | *position* |
| `UnityEngine.Quaternion` | *rotation* |
| `UnityEngine.Transform` | *parent* |

### InstantiateAsync(bool)
异步初始化游戏对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L101)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(bool actived = true)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *actived* |

### InstantiateAsync(Transform, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L105)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(Transform parent, bool actived = true)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Transform` | *parent* |
| `System.Boolean` | *actived* |

### InstantiateAsync(Transform, bool, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L109)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(Transform parent, bool worldPositionStays, bool actived = true)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Transform` | *parent* |
| `System.Boolean` | *worldPositionStays* |
| `System.Boolean` | *actived* |

### InstantiateAsync(Vector3, Quaternion, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L113)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(Vector3 position, Quaternion rotation, bool actived = true)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Vector3` | *position* |
| `UnityEngine.Quaternion` | *rotation* |
| `System.Boolean` | *actived* |

### InstantiateAsync(Vector3, Quaternion, Transform, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L117)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(Vector3 position, Quaternion rotation, Transform parent, bool actived = true)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Vector3` | *position* |
| `UnityEngine.Quaternion` | *rotation* |
| `UnityEngine.Transform` | *parent* |
| `System.Boolean` | *actived* |

## Events
### Completed
完成委托
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AssetHandle.cs#L20)
```csharp title="Declaration"
public event Action<AssetHandle> Completed
```
##### Event Type
`System.Action<YooAsset.AssetHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
