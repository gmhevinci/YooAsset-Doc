---
title: Class PreDownloadContentOperation
sidebar_label: PreDownloadContentOperation
---
# Class PreDownloadContentOperation


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/PreDownloadContentOperation.cs#L7)
```csharp title="Declaration"
public sealed class PreDownloadContentOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Methods
### CreateResourceDownloader(int, int, int)
创建资源下载器，用于下载当前资源版本所有的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/PreDownloadContentOperation.cs#L105)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateResourceDownloader(string, int, int, int)
创建资源下载器，用于下载指定的资源标签关联的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/PreDownloadContentOperation.cs#L125)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(string tag, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *tag* | 资源标签 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateResourceDownloader(string[], int, int, int)
创建资源下载器，用于下载指定的资源标签列表关联的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/PreDownloadContentOperation.cs#L145)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateResourceDownloader(string[] tags, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *tags* | 资源标签列表 |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(string, bool, int, int, int)
创建资源下载器，用于下载指定的资源依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/PreDownloadContentOperation.cs#L165)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(string location, bool recursiveDownload, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *location* | 资源定位地址 |
| `System.Boolean` | *recursiveDownload* |  |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |

### CreateBundleDownloader(string[], bool, int, int, int)
创建资源下载器，用于下载指定的资源列表依赖的资源包文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/PreDownloadContentOperation.cs#L189)
```csharp title="Declaration"
public ResourceDownloaderOperation CreateBundleDownloader(string[] locations, bool recursiveDownload, int downloadingMaxNumber, int failedTryAgain, int timeout = 60)
```

##### Returns

[YooAsset.ResourceDownloaderOperation](../YooAsset/ResourceDownloaderOperation.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *locations* | 资源定位地址列表 |
| `System.Boolean` | *recursiveDownload* |  |
| `System.Int32` | *downloadingMaxNumber* | 同时下载的最大文件数 |
| `System.Int32` | *failedTryAgain* | 下载失败的重试次数 |
| `System.Int32` | *timeout* | 超时时间 |


## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
