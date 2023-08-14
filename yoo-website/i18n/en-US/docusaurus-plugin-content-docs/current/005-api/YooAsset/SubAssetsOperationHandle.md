---
title: Class SubAssetsOperationHandle
sidebar_label: SubAssetsOperationHandle
---
# Class SubAssetsOperationHandle


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SubAssetsOperationHandle.cs#L6)
```csharp title="Declaration"
public sealed class SubAssetsOperationHandle : OperationHandleBase, IEnumerator, IDisposable
```
## Properties
### AllAssetObjects
子资源对象集合
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SubAssetsOperationHandle.cs#L70)
```csharp title="Declaration"
public Object[] AllAssetObjects { get; }
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SubAssetsOperationHandle.cs#L43)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### Release()
释放资源句柄
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SubAssetsOperationHandle.cs#L53)
```csharp title="Declaration"
public void Release()
```
### Dispose()
释放资源句柄
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SubAssetsOperationHandle.cs#L61)
```csharp title="Declaration"
public void Dispose()
```
### GetSubAssetObject&lt;TObject&gt;(string)
获取子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SubAssetsOperationHandle.cs#L85)
```csharp title="Declaration"
public TObject GetSubAssetObject<TObject>(string assetName) where TObject : Object
```

##### Returns

`<TObject>`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *assetName* | 子资源对象名称 |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 子资源对象类型 |
### GetSubAssetObjects&lt;TObject&gt;()
获取所有的子资源对象集合
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SubAssetsOperationHandle.cs#L104)
```csharp title="Declaration"
public TObject[] GetSubAssetObjects<TObject>() where TObject : Object
```

##### Returns

`<TObject>[]`
##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TObject` | 子资源对象类型 |
## Events
### Completed
完成委托
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SubAssetsOperationHandle.cs#L21)
```csharp title="Declaration"
public event Action<SubAssetsOperationHandle> Completed
```
##### Event Type
`System.Action<YooAsset.SubAssetsOperationHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
