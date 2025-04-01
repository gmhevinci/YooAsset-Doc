---
title: Class DownloaderOperation
sidebar_label: DownloaderOperation
---
# Class DownloaderOperation


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class DownloaderOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Properties
### TotalDownloadCount
统计的下载文件总数量

```csharp title="Declaration"
public int TotalDownloadCount { get; }
```
### TotalDownloadBytes
统计的下载文件的总大小

```csharp title="Declaration"
public long TotalDownloadBytes { get; }
```
### CurrentDownloadCount
当前已经完成的下载总数量

```csharp title="Declaration"
public int CurrentDownloadCount { get; }
```
### CurrentDownloadBytes
当前已经完成的下载总大小

```csharp title="Declaration"
public long CurrentDownloadBytes { get; }
```
### DownloadFinishCallback
当下载器结束（无论成功或失败）

```csharp title="Declaration"
public DownloaderOperation.DownloaderFinish DownloadFinishCallback { get; set; }
```
### DownloadUpdateCallback
当下载进度发生变化

```csharp title="Declaration"
public DownloaderOperation.DownloadUpdate DownloadUpdateCallback { get; set; }
```
### DownloadErrorCallback
当下载器发生错误

```csharp title="Declaration"
public DownloaderOperation.DownloadError DownloadErrorCallback { get; set; }
```
### DownloadFileBeginCallback
当开始下载某个文件

```csharp title="Declaration"
public DownloaderOperation.DownloadFileBegin DownloadFileBeginCallback { get; set; }
```
## Methods
### Combine(DownloaderOperation)
合并其它下载器

```csharp title="Declaration"
public void Combine(DownloaderOperation downloader)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.DownloaderOperation](../YooAsset/DownloaderOperation.md) | *downloader* | 合并的下载器 |

### BeginDownload()
开始下载

```csharp title="Declaration"
public void BeginDownload()
```
### PauseDownload()
暂停下载

```csharp title="Declaration"
public void PauseDownload()
```
### ResumeDownload()
恢复下载

```csharp title="Declaration"
public void ResumeDownload()
```
### CancelDownload()
取消下载

```csharp title="Declaration"
public void CancelDownload()
```

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
