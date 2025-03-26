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
### PackageName
所属包裹

```csharp title="Declaration"
public string PackageName { get; }
```
### Priority
优先级

```csharp title="Declaration"
public uint Priority { get; set; }
```
### Status
状态

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
## Methods
### ClearCompletedCallback()
清空完成回调

```csharp title="Declaration"
protected void ClearCompletedCallback()
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
