---
title: Struct DownloadStatus
sidebar_label: DownloadStatus
---
# Struct DownloadStatus


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/DownloadStatus.cs#L4)
```csharp title="Declaration"
public struct DownloadStatus
```
## Fields
### IsDone
下载是否已经完成
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/DownloadStatus.cs#L9)
```csharp title="Declaration"
public bool IsDone
```
### Progress
下载进度（0-1f)
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/DownloadStatus.cs#L14)
```csharp title="Declaration"
public float Progress
```
### TotalBytes
下载文件的总大小
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/DownloadStatus.cs#L19)
```csharp title="Declaration"
public long TotalBytes
```
### DownloadedBytes
已经下载的文件大小
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/DownloadStatus.cs#L24)
```csharp title="Declaration"
public long DownloadedBytes
```
## Methods
### CreateDefaultStatus()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/DownloadStatus.cs#L26)
```csharp title="Declaration"
public static DownloadStatus CreateDefaultStatus()
```

##### Returns

[YooAsset.DownloadStatus](../YooAsset/DownloadStatus.md)
