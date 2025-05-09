---
title: Class AsyncOperationBase
sidebar_label: AsyncOperationBase
---
# Class AsyncOperationBase


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class AsyncOperationBase : IEnumerator, IComparable<AsyncOperationBase>
```
## Properties
### Priority
任务优先级

```csharp title="Declaration"
public uint Priority { get; set; }
```
### Status
任务状态

```csharp title="Declaration"
public EOperationStatus Status { get; protected set; }
```
### Error
错误信息

```csharp title="Declaration"
public string Error { get; protected set; }
```
### Progress
处理进度

```csharp title="Declaration"
public float Progress { get; protected set; }
```
### PackageName
所属包裹名称

```csharp title="Declaration"
public string PackageName { get; }
```
### IsDone
是否已经完成

```csharp title="Declaration"
public bool IsDone { get; }
```
### Task
异步操作任务

```csharp title="Declaration"
public Task Task { get; }
```
### ProcessTime
处理耗时（单位：毫秒）

```csharp title="Declaration"
public long ProcessTime { get; protected set; }
```
## Fields
### BeginTime
开始的时间

```csharp title="Declaration"
public string BeginTime
```
## Methods
### ExecuteWhileDone()
执行While循环

```csharp title="Declaration"
protected bool ExecuteWhileDone()
```

##### Returns

`System.Boolean`
### ClearCompletedCallback()
清空完成回调

```csharp title="Declaration"
protected void ClearCompletedCallback()
```
### WaitForAsyncComplete()
等待异步执行完毕

```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### CompareTo(AsyncOperationBase)


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

```csharp title="Declaration"
public event Action<AsyncOperationBase> Completed
```
##### Event Type
`System.Action<YooAsset.AsyncOperationBase>`

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
