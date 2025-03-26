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
下载是否完成

```csharp title="Declaration"
public bool IsDone
```
### Progress
下载进度（0f~1f）

```csharp title="Declaration"
public float Progress
```
### TotalBytes
需要下载的总字节数

```csharp title="Declaration"
public ulong TotalBytes
```
### DownloadedBytes
已经下载的字节数

```csharp title="Declaration"
public ulong DownloadedBytes
```
## Methods
### CreateDefaultStatus()


```csharp title="Declaration"
public static DownloadStatus CreateDefaultStatus()
```

##### Returns

[YooAsset.DownloadStatus](../YooAsset/DownloadStatus.md)
