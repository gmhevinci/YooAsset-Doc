---
title: Class AssetHandle
sidebar_label: AssetHandle
---
# Class AssetHandle


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public sealed class AssetHandle : HandleBase, IEnumerator, IDisposable
```
## Properties
### AssetObject
资源对象

```csharp title="Declaration"
public Object AssetObject { get; }
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕

```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### GetAssetObject&lt;TAsset&gt;()
获取资源对象

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

### InstantiateAsync(bool)
异步初始化游戏对象

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

```csharp title="Declaration"
public event Action<AssetHandle> Completed
```
##### Event Type
`System.Action<YooAsset.AssetHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
