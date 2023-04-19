---
title: Struct DownloadReport
sidebar_label: DownloadReport
---
# Struct DownloadReport


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadReport.cs#L4)
```csharp title="Declaration"
public struct DownloadReport
```
## Fields
### Progress
下载进度（0f~1f）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadReport.cs#L9)
```csharp title="Declaration"
public float Progress
```
### TotalSize
需要下载的总字节数
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadReport.cs#L14)
```csharp title="Declaration"
public ulong TotalSize
```
### DownloadedBytes
已经下载的字节数
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadReport.cs#L19)
```csharp title="Declaration"
public ulong DownloadedBytes
```
## Methods
### CreateDefaultReport()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadReport.cs#L21)
```csharp title="Declaration"
public static DownloadReport CreateDefaultReport()
```

##### Returns

[YooAsset.DownloadReport](../YooAsset/DownloadReport.md)
