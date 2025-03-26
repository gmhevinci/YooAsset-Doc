---
title: Class HandleBase
sidebar_label: HandleBase
---
# Class HandleBase


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L6)
```csharp title="Declaration"
public abstract class HandleBase : IEnumerator, IDisposable
```
## Properties
### Status
当前状态
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L58)
```csharp title="Declaration"
public EOperationStatus Status { get; }
```
### LastError
最近的错误信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L71)
```csharp title="Declaration"
public string LastError { get; }
```
### Progress
加载进度
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L84)
```csharp title="Declaration"
public float Progress { get; }
```
### IsDone
是否加载完毕
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L97)
```csharp title="Declaration"
public bool IsDone { get; }
```
### IsValid
句柄是否有效
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L110)
```csharp title="Declaration"
public bool IsValid { get; }
```
### Task
异步操作任务
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L147)
```csharp title="Declaration"
public Task Task { get; }
```
## Methods
### Release()
释放资源句柄
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L21)
```csharp title="Declaration"
public void Release()
```
### Dispose()
释放资源句柄
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L32)
```csharp title="Declaration"
public void Dispose()
```
### GetAssetInfo()
获取资源信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L40)
```csharp title="Declaration"
public AssetInfo GetAssetInfo()
```

##### Returns

[YooAsset.AssetInfo](../YooAsset/AssetInfo.md)
### GetDownloadStatus()
获取下载报告
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/HandleBase.cs#L48)
```csharp title="Declaration"
public DownloadStatus GetDownloadStatus()
```

##### Returns

[YooAsset.DownloadStatus](../YooAsset/DownloadStatus.md)

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
