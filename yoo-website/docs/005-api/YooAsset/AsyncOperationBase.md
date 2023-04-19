---
title: Class AsyncOperationBase
sidebar_label: AsyncOperationBase
---
# Class AsyncOperationBase


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class AsyncOperationBase : IEnumerator
```
## Properties
### Status


```csharp title="Declaration"
public EOperationStatus Status { get; protected set; }
```
### Error


```csharp title="Declaration"
public string Error { get; protected set; }
```
### Progress


```csharp title="Declaration"
public float Progress { get; protected set; }
```
### IsDone


```csharp title="Declaration"
public bool IsDone { get; }
```
### Task


```csharp title="Declaration"
public Task Task { get; }
```
## Methods
### ClearCompletedCallback()


```csharp title="Declaration"
protected void ClearCompletedCallback()
```
## Events
### Completed


```csharp title="Declaration"
public event Action<AsyncOperationBase> Completed
```
##### Event Type
`System.Action<YooAsset.AsyncOperationBase>`

## Implements

* `System.Collections.IEnumerator`
