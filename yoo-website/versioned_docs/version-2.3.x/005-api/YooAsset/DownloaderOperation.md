---
title: Class DownloaderOperation
sidebar_label: DownloaderOperation
---
# Class DownloaderOperation


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L6)
```csharp title="Declaration"
public abstract class DownloaderOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Properties
### TotalDownloadCount
统计的下载文件总数量
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L61)
```csharp title="Declaration"
public int TotalDownloadCount { get; }
```
### TotalDownloadBytes
统计的下载文件的总大小
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L66)
```csharp title="Declaration"
public long TotalDownloadBytes { get; }
```
### CurrentDownloadCount
当前已经完成的下载总数量
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L71)
```csharp title="Declaration"
public int CurrentDownloadCount { get; }
```
### CurrentDownloadBytes
当前已经完成的下载总大小
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L79)
```csharp title="Declaration"
public long CurrentDownloadBytes { get; }
```
### DownloadFinishCallback
当下载器结束（无论成功或失败）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L87)
```csharp title="Declaration"
public DownloaderOperation.DownloaderFinish DownloadFinishCallback { get; set; }
```
### DownloadUpdateCallback
当下载进度发生变化
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L92)
```csharp title="Declaration"
public DownloaderOperation.DownloadUpdate DownloadUpdateCallback { get; set; }
```
### DownloadErrorCallback
当下载器发生错误
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L97)
```csharp title="Declaration"
public DownloaderOperation.DownloadError DownloadErrorCallback { get; set; }
```
### DownloadFileBeginCallback
当开始下载某个文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L102)
```csharp title="Declaration"
public DownloaderOperation.DownloadFileBegin DownloadFileBeginCallback { get; set; }
```
## Methods
### Combine(DownloaderOperation)
合并其它下载器
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L291)
```csharp title="Declaration"
public void Combine(DownloaderOperation downloader)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.DownloaderOperation](../YooAsset/DownloaderOperation.md) | *downloader* | 合并的下载器 |

### BeginDownload()
开始下载
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L332)
```csharp title="Declaration"
public void BeginDownload()
```
### PauseDownload()
暂停下载
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L343)
```csharp title="Declaration"
public void PauseDownload()
```
### ResumeDownload()
恢复下载
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L351)
```csharp title="Declaration"
public void ResumeDownload()
```
### CancelDownload()
取消下载
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/DownloaderOperation.cs#L359)
```csharp title="Declaration"
public void CancelDownload()
```

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
