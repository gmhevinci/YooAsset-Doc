---
title: Class SubAssetsOperationHandle
sidebar_label: SubAssetsOperationHandle
---
# Class SubAssetsOperationHandle


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public sealed class SubAssetsOperationHandle : OperationHandleBase, IEnumerator, IDisposable
```
## Properties
### AllAssetObjects


```csharp title="Declaration"
public Object[] AllAssetObjects { get; }
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
### GetSubAssetObject&lt;TObject&gt;(string)


```csharp title="Declaration"
public TObject GetSubAssetObject<TObject>(string assetName) where TObject : Object
```

##### Returns

`<TObject>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetName* |

##### Type Parameters
* `TObject`
### GetSubAssetObjects&lt;TObject&gt;()


```csharp title="Declaration"
public TObject[] GetSubAssetObjects<TObject>() where TObject : Object
```

##### Returns

`<TObject>[]`
##### Type Parameters
* `TObject`
## Events
### Completed


```csharp title="Declaration"
public event Action<SubAssetsOperationHandle> Completed
```
##### Event Type
`System.Action<YooAsset.SubAssetsOperationHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
