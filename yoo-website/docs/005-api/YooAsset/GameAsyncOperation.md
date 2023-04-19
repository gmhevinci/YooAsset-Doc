---
title: Class GameAsyncOperation
sidebar_label: GameAsyncOperation
---
# Class GameAsyncOperation


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/GameAsyncOperation.cs#L4)
```csharp title="Declaration"
public abstract class GameAsyncOperation : AsyncOperationBase, IEnumerator
```
## Methods
### OnStart()
异步操作开始
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/GameAsyncOperation.cs#L18)
```csharp title="Declaration"
protected abstract void OnStart()
```
### OnUpdate()
异步操作更新
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/GameAsyncOperation.cs#L23)
```csharp title="Declaration"
protected abstract void OnUpdate()
```
### IsBusy()
异步操作系统是否繁忙
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/GameAsyncOperation.cs#L28)
```csharp title="Declaration"
protected bool IsBusy()
```

##### Returns

`System.Boolean`

## Implements

* `System.Collections.IEnumerator`
