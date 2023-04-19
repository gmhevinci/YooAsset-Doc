---
title: Class OperationHandleBase
sidebar_label: OperationHandleBase
---
# Class OperationHandleBase


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class OperationHandleBase : IEnumerator
```
## Properties
### Status


```csharp title="Declaration"
public EOperationStatus Status { get; }
```
### LastError


```csharp title="Declaration"
public string LastError { get; }
```
### Progress


```csharp title="Declaration"
public float Progress { get; }
```
### IsDone


```csharp title="Declaration"
public bool IsDone { get; }
```
### IsValid


```csharp title="Declaration"
public bool IsValid { get; }
```
### Task


```csharp title="Declaration"
public Task Task { get; }
```
## Methods
### GetAssetInfo()


```csharp title="Declaration"
public AssetInfo GetAssetInfo()
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)
### GetDownloadReport()


```csharp title="Declaration"
public DownloadReport GetDownloadReport()
```

##### Returns

[YooAsset.DownloadReport](../YooAsset/DownloadReport.md)

## Implements

* `System.Collections.IEnumerator`
