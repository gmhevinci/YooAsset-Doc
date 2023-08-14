---
title: Class DownloaderOperation
sidebar_label: DownloaderOperation
---
# Class DownloaderOperation


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L6)
```csharp title="Declaration"
public abstract class DownloaderOperation : AsyncOperationBase, IEnumerator
```
## Properties
### TotalDownloadCount
统计的下载文件总数量
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L43)
```csharp title="Declaration"
public int TotalDownloadCount { get; }
```
### TotalDownloadBytes
统计的下载文件的总大小
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L48)
```csharp title="Declaration"
public long TotalDownloadBytes { get; }
```
### CurrentDownloadCount
当前已经完成的下载总数量
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L53)
```csharp title="Declaration"
public int CurrentDownloadCount { get; }
```
### CurrentDownloadBytes
当前已经完成的下载总大小
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L61)
```csharp title="Declaration"
public long CurrentDownloadBytes { get; }
```
### OnDownloadOverCallback
当下载器结束（无论成功或失败）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L69)
```csharp title="Declaration"
public DownloaderOperation.OnDownloadOver OnDownloadOverCallback { get; set; }
```
### OnDownloadProgressCallback
当下载进度发生变化
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L74)
```csharp title="Declaration"
public DownloaderOperation.OnDownloadProgress OnDownloadProgressCallback { get; set; }
```
### OnDownloadErrorCallback
当某个文件下载失败
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L79)
```csharp title="Declaration"
public DownloaderOperation.OnDownloadError OnDownloadErrorCallback { get; set; }
```
### OnStartDownloadFileCallback
当开始下载某个文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L84)
```csharp title="Declaration"
public DownloaderOperation.OnStartDownloadFile OnStartDownloadFileCallback { get; set; }
```
## Methods
### BeginDownload()
开始下载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L214)
```csharp title="Declaration"
public void BeginDownload()
```
### PauseDownload()
暂停下载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L225)
```csharp title="Declaration"
public void PauseDownload()
```
### ResumeDownload()
恢复下载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L233)
```csharp title="Declaration"
public void ResumeDownload()
```
### CancelDownload()
取消下载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/DownloaderOperation.cs#L241)
```csharp title="Declaration"
public void CancelDownload()
```

## Implements

* `System.Collections.IEnumerator`
