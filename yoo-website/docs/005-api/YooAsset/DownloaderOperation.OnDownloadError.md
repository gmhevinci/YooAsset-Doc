---
title: Delegate DownloaderOperation.OnDownloadError
sidebar_label: DownloaderOperation.OnDownloadError
---
# Delegate DownloaderOperation.OnDownloadError


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public delegate void DownloaderOperation.OnDownloadError(string fileName, string error)
```
## Methods
### Invoke(string, string)


```csharp title="Declaration"
public virtual void Invoke(string fileName, string error)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *fileName* |
| `System.String` | *error* |

### BeginInvoke(string, string, AsyncCallback, object)


```csharp title="Declaration"
public virtual IAsyncResult BeginInvoke(string fileName, string error, AsyncCallback callback, object @object)
```

##### Returns

`System.IAsyncResult`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *fileName* |
| `System.String` | *error* |
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

