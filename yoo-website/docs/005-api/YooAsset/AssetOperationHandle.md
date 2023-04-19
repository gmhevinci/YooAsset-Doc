---
title: Class AssetOperationHandle
sidebar_label: AssetOperationHandle
---
# Class AssetOperationHandle


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public sealed class AssetOperationHandle : OperationHandleBase, IEnumerator, IDisposable
```
## Properties
### AssetObject


```csharp title="Declaration"
public Object AssetObject { get; }
```
## Methods
### WaitForAsyncComplete()


```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### Release()


```csharp title="Declaration"
public void Release()
```
### Dispose()


```csharp title="Declaration"
public void Dispose()
```
### GetAssetObject&lt;TAsset&gt;()


```csharp title="Declaration"
public TAsset GetAssetObject<TAsset>() where TAsset : Object
```

##### Returns

`<TAsset>`
##### Type Parameters
* `TAsset`
### InstantiateSync()


```csharp title="Declaration"
public GameObject InstantiateSync()
```

##### Returns

`UnityEngine.GameObject`
### InstantiateSync(Transform)


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


```csharp title="Declaration"
public InstantiateOperation InstantiateAsync()
```

##### Returns

[YooAsset.InstantiateOperation](../YooAsset/InstantiateOperation.md)
### InstantiateAsync(Transform)


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


```csharp title="Declaration"
public event Action<AssetOperationHandle> Completed
```
##### Event Type
`System.Action<YooAsset.AssetOperationHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
