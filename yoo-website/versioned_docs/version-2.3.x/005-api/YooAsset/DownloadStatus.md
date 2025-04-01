---
title: Struct DownloadStatus
sidebar_label: DownloadStatus
---
# Struct DownloadStatus


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public struct DownloadStatus
```
## Fields
### IsDone
下载是否已经完成

```csharp title="Declaration"
public bool IsDone
```
### Progress
下载进度（0-1f)

```csharp title="Declaration"
public float Progress
```
### TotalBytes
下载文件的总大小

```csharp title="Declaration"
public long TotalBytes
```
### DownloadedBytes
已经下载的文件大小

```csharp title="Declaration"
public long DownloadedBytes
```
## Methods
### CreateDefaultStatus()


```csharp title="Declaration"
public static DownloadStatus CreateDefaultStatus()
```

##### Returns

[YooAsset.DownloadStatus](../YooAsset/DownloadStatus.md)
