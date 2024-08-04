---
title: Class AsyncOperationBase
sidebar_label: AsyncOperationBase
---
# Class AsyncOperationBase


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L8)
```csharp title="Declaration"
public abstract class AsyncOperationBase : IEnumerator
```
## Properties
### Status
状态
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L16)
```csharp title="Declaration"
public EOperationStatus Status { get; protected set; }
```
### Error
错误信息
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L21)
```csharp title="Declaration"
public string Error { get; protected set; }
```
### Progress
处理进度
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L26)
```csharp title="Declaration"
public float Progress { get; protected set; }
```
### IsDone
是否已经完成
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L31)
```csharp title="Declaration"
public bool IsDone { get; }
```
### Task
异步操作任务
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L60)
```csharp title="Declaration"
public Task Task { get; }
```
## Methods
### ClearCompletedCallback()
清空完成回调
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L87)
```csharp title="Declaration"
protected void ClearCompletedCallback()
```
## Events
### Completed
完成事件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L42)
```csharp title="Declaration"
public event Action<AsyncOperationBase> Completed
```
##### Event Type
`System.Action<YooAsset.AsyncOperationBase>`

## Implements

* `System.Collections.IEnumerator`
