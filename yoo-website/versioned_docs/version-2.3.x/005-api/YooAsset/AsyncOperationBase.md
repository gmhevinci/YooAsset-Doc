---
title: Class AsyncOperationBase
sidebar_label: AsyncOperationBase
---
# Class AsyncOperationBase


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L9)
```csharp title="Declaration"
public abstract class AsyncOperationBase : IEnumerator, IComparable<AsyncOperationBase>
```
## Properties
### Priority
任务优先级
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L33)
```csharp title="Declaration"
public uint Priority { get; set; }
```
### Status
任务状态
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L38)
```csharp title="Declaration"
public EOperationStatus Status { get; protected set; }
```
### Error
错误信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L43)
```csharp title="Declaration"
public string Error { get; protected set; }
```
### Progress
处理进度
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L48)
```csharp title="Declaration"
public float Progress { get; protected set; }
```
### PackageName
所属包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L53)
```csharp title="Declaration"
public string PackageName { get; }
```
### IsDone
是否已经完成
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L64)
```csharp title="Declaration"
public bool IsDone { get; }
```
### Task
异步操作任务
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L93)
```csharp title="Declaration"
public Task Task { get; }
```
### ProcessTime
处理耗时（单位：毫秒）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L276)
```csharp title="Declaration"
public long ProcessTime { get; protected set; }
```
## Fields
### BeginTime
开始的时间
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L271)
```csharp title="Declaration"
public string BeginTime
```
## Methods
### ExecuteWhileDone()
执行While循环
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L221)
```csharp title="Declaration"
protected bool ExecuteWhileDone()
```

##### Returns

`System.Boolean`
### ClearCompletedCallback()
清空完成回调
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L243)
```csharp title="Declaration"
protected void ClearCompletedCallback()
```
### WaitForAsyncComplete()
等待异步执行完毕
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L251)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### CompareTo(AsyncOperationBase)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L320)
```csharp title="Declaration"
public int CompareTo(AsyncOperationBase other)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.AsyncOperationBase](../YooAsset/AsyncOperationBase.md) | *other* |

## Events
### Completed
完成事件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/OperationSystem/AsyncOperationBase.cs#L75)
```csharp title="Declaration"
public event Action<AsyncOperationBase> Completed
```
##### Event Type
`System.Action<YooAsset.AsyncOperationBase>`

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
