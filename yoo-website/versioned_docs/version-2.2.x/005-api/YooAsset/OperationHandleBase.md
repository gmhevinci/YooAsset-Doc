---
title: Class OperationHandleBase
sidebar_label: OperationHandleBase
---
# Class OperationHandleBase


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L6)
```csharp title="Declaration"
public abstract class OperationHandleBase : IEnumerator
```
## Properties
### Status
当前状态
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L41)
```csharp title="Declaration"
public EOperationStatus Status { get; }
```
### LastError
最近的错误信息
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L59)
```csharp title="Declaration"
public string LastError { get; }
```
### Progress
加载进度
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L72)
```csharp title="Declaration"
public float Progress { get; }
```
### IsDone
是否加载完毕
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L85)
```csharp title="Declaration"
public bool IsDone { get; }
```
### IsValid
句柄是否有效
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L98)
```csharp title="Declaration"
public bool IsValid { get; }
```
### Task
异步操作任务
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L146)
```csharp title="Declaration"
public Task Task { get; }
```
## Methods
### GetAssetInfo()
获取资源信息
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L21)
```csharp title="Declaration"
public AssetInfo GetAssetInfo()
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)
### GetDownloadReport()
获取下载报告
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/OperationHandleBase.cs#L29)
```csharp title="Declaration"
public DownloadReport GetDownloadReport()
```

##### Returns

[YooAsset.DownloadReport](../YooAsset/DownloadReport.md)

## Implements

* `System.Collections.IEnumerator`
