---
title: Delegate DownloadRequestDelegate
sidebar_label: DownloadRequestDelegate
---
# Delegate DownloadRequestDelegate


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public delegate UnityWebRequest DownloadRequestDelegate(string url)
```
## Methods
### Invoke(string)


```csharp title="Declaration"
public virtual UnityWebRequest Invoke(string url)
```

##### Returns

`UnityEngine.Networking.UnityWebRequest`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *url* |

### BeginInvoke(string, AsyncCallback, object)


```csharp title="Declaration"
public virtual IAsyncResult BeginInvoke(string url, AsyncCallback callback, object @object)
```

##### Returns

`System.IAsyncResult`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *url* |
| `System.AsyncCallback` | *callback* |
| `System.Object` | *object* |

### EndInvoke(IAsyncResult)


```csharp title="Declaration"
public virtual UnityWebRequest EndInvoke(IAsyncResult result)
```

##### Returns

`UnityEngine.Networking.UnityWebRequest`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.IAsyncResult` | *result* |

