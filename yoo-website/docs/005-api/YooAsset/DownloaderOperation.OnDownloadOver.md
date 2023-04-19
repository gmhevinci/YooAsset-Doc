---
title: Delegate DownloaderOperation.OnDownloadOver
sidebar_label: DownloaderOperation.OnDownloadOver
---
# Delegate DownloaderOperation.OnDownloadOver


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public delegate void DownloaderOperation.OnDownloadOver(bool isSucceed)
```
## Methods
### Invoke(bool)


```csharp title="Declaration"
public virtual void Invoke(bool isSucceed)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *isSucceed* |

### BeginInvoke(bool, AsyncCallback, object)


```csharp title="Declaration"
public virtual IAsyncResult BeginInvoke(bool isSucceed, AsyncCallback callback, object @object)
```

##### Returns

`System.IAsyncResult`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *isSucceed* |
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

