---
title: Class PreDownloadContentOperation
sidebar_label: PreDownloadContentOperation
---
# Class PreDownloadContentOperation


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class PreDownloadContentOperation : AsyncOperationBase, IEnumerator
```
## Methods
### CreateResourceDownloader(int, int, int)


```csharp title="Declaration"
public virtual ResourceDownloaderOperation CreateResourceDownloader(int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateResourceDownloader(string, int, int, int)


```csharp title="Declaration"
public virtual ResourceDownloaderOperation CreateResourceDownloader(string tag, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *tag* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateResourceDownloader(string[], int, int, int)


```csharp title="Declaration"
public virtual ResourceDownloaderOperation CreateResourceDownloader(string[] tags, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *tags* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateBundleDownloader(string, int, int, int)


```csharp title="Declaration"
public virtual ResourceDownloaderOperation CreateBundleDownloader(string location, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *location* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |

### CreateBundleDownloader(string[], int, int, int)


```csharp title="Declaration"
public virtual ResourceDownloaderOperation CreateBundleDownloader(string[] locations, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *locations* |
| `System.Int32` | *downloadingMaxNumber* |
| `System.Int32` | *failedTryAgain* |
| `System.Int32` | *timeout* |


## Implements

* `System.Collections.IEnumerator`
