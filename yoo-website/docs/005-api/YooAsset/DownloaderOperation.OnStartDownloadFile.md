---
title: Delegate DownloaderOperation.OnStartDownloadFile
sidebar_label: DownloaderOperation.OnStartDownloadFile
---
# Delegate DownloaderOperation.OnStartDownloadFile


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public delegate void DownloaderOperation.OnStartDownloadFile(string fileName, long sizeBytes)
```
## Methods
### Invoke(string, long)


```csharp title="Declaration"
public virtual void Invoke(string fileName, long sizeBytes)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *fileName* |
| `System.Int64` | *sizeBytes* |

### BeginInvoke(string, long, AsyncCallback, object)


```csharp title="Declaration"
public virtual IAsyncResult BeginInvoke(string fileName, long sizeBytes, AsyncCallback callback, object @object)
```

##### Returns

`System.IAsyncResult`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *fileName* |
| `System.Int64` | *sizeBytes* |
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

