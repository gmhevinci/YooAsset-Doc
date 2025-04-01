---
title: Class GameAsyncOperation
sidebar_label: GameAsyncOperation
---
# Class GameAsyncOperation


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class GameAsyncOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Methods
### OnStart()
异步操作开始

```csharp title="Declaration"
protected abstract void OnStart()
```
### OnUpdate()
异步操作更新

```csharp title="Declaration"
protected abstract void OnUpdate()
```
### OnAbort()
异步操作终止

```csharp title="Declaration"
protected abstract void OnAbort()
```
### OnWaitForAsyncComplete()
异步等待完成

```csharp title="Declaration"
protected virtual void OnWaitForAsyncComplete()
```
### IsBusy()
异步操作系统是否繁忙

```csharp title="Declaration"
protected bool IsBusy()
```

##### Returns

`System.Boolean`
### Abort()
终止异步操作

```csharp title="Declaration"
protected void Abort()
```

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
