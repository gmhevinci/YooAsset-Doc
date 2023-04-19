---
title: Delegate DownloaderOperation.OnDownloadProgress
sidebar_label: DownloaderOperation.OnDownloadProgress
---
# Delegate DownloaderOperation.OnDownloadProgress


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public delegate void DownloaderOperation.OnDownloadProgress(int totalDownloadCount, int currentDownloadCount, long totalDownloadBytes, long currentDownloadBytes)
```
## Methods
### Invoke(int, int, long, long)


```csharp title="Declaration"
public virtual void Invoke(int totalDownloadCount, int currentDownloadCount, long totalDownloadBytes, long currentDownloadBytes)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *totalDownloadCount* |
| `System.Int32` | *currentDownloadCount* |
| `System.Int64` | *totalDownloadBytes* |
| `System.Int64` | *currentDownloadBytes* |

### BeginInvoke(int, int, long, long, AsyncCallback, object)


```csharp title="Declaration"
public virtual IAsyncResult BeginInvoke(int totalDownloadCount, int currentDownloadCount, long totalDownloadBytes, long currentDownloadBytes, AsyncCallback callback, object @object)
```

##### Returns

`System.IAsyncResult`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *totalDownloadCount* |
| `System.Int32` | *currentDownloadCount* |
| `System.Int64` | *totalDownloadBytes* |
| `System.Int64` | *currentDownloadBytes* |
| `System.AsyncCallback` | *callback* |
| `System.Object` | *object* |

### EndInvoke(IAsyncResult)


```csharp title="Declaration"
public virtual void EndInvoke(IAsyncResult result)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.IAsyncResult` | *result* |

