---
title: Class AllAssetsHandle
sidebar_label: AllAssetsHandle
---
# Class AllAssetsHandle


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public sealed class AllAssetsHandle : HandleBase, IEnumerator, IDisposable
```
## Properties
### AllAssetObjects
子资源对象集合

```csharp title="Declaration"
public Object[] AllAssetObjects { get; }
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕

```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### Release()
释放资源句柄

```csharp title="Declaration"
public void Release()
```
### Dispose()
释放资源句柄

```csharp title="Declaration"
public void Dispose()
```
## Events
### Completed
完成委托

```csharp title="Declaration"
public event Action<AllAssetsHandle> Completed
```
##### Event Type
`System.Action<YooAsset.AllAssetsHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
