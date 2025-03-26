---
title: Class HandleBase
sidebar_label: HandleBase
---
# Class HandleBase


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class HandleBase : IEnumerator
```
## Properties
### Status
当前状态

```csharp title="Declaration"
public EOperationStatus Status { get; }
```
### LastError
最近的错误信息

```csharp title="Declaration"
public string LastError { get; }
```
### Progress
加载进度

```csharp title="Declaration"
public float Progress { get; }
```
### IsDone
是否加载完毕

```csharp title="Declaration"
public bool IsDone { get; }
```
### IsValid
句柄是否有效

```csharp title="Declaration"
public bool IsValid { get; }
```
### Task
异步操作任务

```csharp title="Declaration"
public Task Task { get; }
```
## Methods
### GetAssetInfo()
获取资源信息

```csharp title="Declaration"
public AssetInfo GetAssetInfo()
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)
### GetDownloadStatus()
获取下载报告

```csharp title="Declaration"
public DownloadStatus GetDownloadStatus()
```

##### Returns

[YooAsset.DownloadStatus](../YooAsset/DownloadStatus.md)

## Implements

* `System.Collections.IEnumerator`
