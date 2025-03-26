---
title: Class SubAssetsHandle
sidebar_label: SubAssetsHandle
---
# Class SubAssetsHandle


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/SubAssetsHandle.cs#L5)
```csharp title="Declaration"
public sealed class SubAssetsHandle : HandleBase, IEnumerator, IDisposable
```
## Properties
### SubAssetObjects
子资源对象集合
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/SubAssetsHandle.cs#L53)
```csharp title="Declaration"
public IReadOnlyList<Object> SubAssetObjects { get; }
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/SubAssetsHandle.cs#L42)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### GetSubAssetObject&lt;TObject&gt;(string)
获取子资源对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/SubAssetsHandle.cs#L68)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/SubAssetsHandle.cs#L87)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/SubAssetsHandle.cs#L20)
```csharp title="Declaration"
public event Action<SubAssetsHandle> Completed
```
##### Event Type
`System.Action<YooAsset.SubAssetsHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
