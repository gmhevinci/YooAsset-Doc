---
title: Class DownloaderOperation
sidebar_label: DownloaderOperation
---
# Class DownloaderOperation


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class DownloaderOperation : AsyncOperationBase, IEnumerator
```
## Properties
### TotalDownloadCount


```csharp title="Declaration"
public int TotalDownloadCount { get; }
```
### TotalDownloadBytes


```csharp title="Declaration"
public long TotalDownloadBytes { get; }
```
### CurrentDownloadCount


```csharp title="Declaration"
public int CurrentDownloadCount { get; }
```
### CurrentDownloadBytes


```csharp title="Declaration"
public long CurrentDownloadBytes { get; }
```
### OnDownloadOverCallback


```csharp title="Declaration"
public DownloaderOperation.OnDownloadOver OnDownloadOverCallback { get; set; }
```
### OnDownloadProgressCallback


```csharp title="Declaration"
public DownloaderOperation.OnDownloadProgress OnDownloadProgressCallback { get; set; }
```
### OnDownloadErrorCallback


```csharp title="Declaration"
public DownloaderOperation.OnDownloadError OnDownloadErrorCallback { get; set; }
```
### OnStartDownloadFileCallback


```csharp title="Declaration"
public DownloaderOperation.OnStartDownloadFile OnStartDownloadFileCallback { get; set; }
```
## Methods
### BeginDownload()


```csharp title="Declaration"
public void BeginDownload()
```
### PauseDownload()


```csharp title="Declaration"
public void PauseDownload()
```
### ResumeDownload()


```csharp title="Declaration"
public void ResumeDownload()
```
### CancelDownload()


```csharp title="Declaration"
public void CancelDownload()
```

## Implements

* `System.Collections.IEnumerator`
