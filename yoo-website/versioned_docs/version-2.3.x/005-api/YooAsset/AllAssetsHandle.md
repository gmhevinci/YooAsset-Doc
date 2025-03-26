---
title: Class AllAssetsHandle
sidebar_label: AllAssetsHandle
---
# Class AllAssetsHandle


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AllAssetsHandle.cs#L5)
```csharp title="Declaration"
public sealed class AllAssetsHandle : HandleBase, IEnumerator, IDisposable
```
## Properties
### AllAssetObjects
子资源对象集合
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AllAssetsHandle.cs#L52)
```csharp title="Declaration"
public IReadOnlyList<Object> AllAssetObjects { get; }
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AllAssetsHandle.cs#L42)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```
## Events
### Completed
完成委托
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/AllAssetsHandle.cs#L20)
```csharp title="Declaration"
public event Action<AllAssetsHandle> Completed
```
##### Event Type
`System.Action<YooAsset.AllAssetsHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
