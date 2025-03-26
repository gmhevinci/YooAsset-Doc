---
title: Class InstantiateOperation
sidebar_label: InstantiateOperation
---
# Class InstantiateOperation


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public sealed class InstantiateOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Fields
### Result
实例化的游戏对象

```csharp title="Declaration"
public GameObject Result
```
## Methods
### Cancel()
取消实例化对象操作

```csharp title="Declaration"
public void Cancel()
```
### WaitForAsyncComplete()
等待异步实例化结束

```csharp title="Declaration"
public void WaitForAsyncComplete()
```

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
