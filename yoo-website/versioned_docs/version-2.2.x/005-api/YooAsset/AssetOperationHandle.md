---
title: Class AssetOperationHandle
sidebar_label: AssetOperationHandle
---
# Class AssetOperationHandle


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L7)
```csharp title="Declaration"
public sealed class AssetOperationHandle : OperationHandleBase, IEnumerator, IDisposable
```
## Properties
### AssetObject
资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L71)
```csharp title="Declaration"
public Object AssetObject { get; }
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L44)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### Release()
释放资源句柄
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L54)
```csharp title="Declaration"
public void Release()
```
### Dispose()
释放资源句柄
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L62)
```csharp title="Declaration"
public void Dispose()
```
### GetAssetObject&lt;TAsset&gt;()
获取资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L85)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L95)
```csharp title="Declaration"
public GameObject InstantiateSync()
```

##### Returns

`UnityEngine.GameObject`
### InstantiateSync(Transform)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L99)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L103)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L107)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L111)
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

### InstantiateAsync()
异步初始化游戏对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L119)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync()
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)
### InstantiateAsync(Transform)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L123)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(Transform parent)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Transform` | *parent* |

### InstantiateAsync(Transform, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L127)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(Transform parent, bool worldPositionStays)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Transform` | *parent* |
| `System.Boolean` | *worldPositionStays* |

### InstantiateAsync(Vector3, Quaternion)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L131)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(Vector3 position, Quaternion rotation)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Vector3` | *position* |
| `UnityEngine.Quaternion` | *rotation* |

### InstantiateAsync(Vector3, Quaternion, Transform)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L135)
```csharp title="Declaration"
public InstantiateOperation InstantiateAsync(Vector3 position, Quaternion rotation, Transform parent)
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.Vector3` | *position* |
| `UnityEngine.Quaternion` | *rotation* |
| `UnityEngine.Transform` | *parent* |

## Events
### Completed
完成委托
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/AssetOperationHandle.cs#L22)
```csharp title="Declaration"
public event Action<AssetOperationHandle> Completed
```
##### Event Type
`System.Action<YooAsset.AssetOperationHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
