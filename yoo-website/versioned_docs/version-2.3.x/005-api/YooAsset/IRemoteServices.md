---
title: Interface IRemoteServices
sidebar_label: IRemoteServices
---
# Interface IRemoteServices


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Services/IRemoteServices.cs#L4)
```csharp title="Declaration"
public interface IRemoteServices
```
## Methods
### GetRemoteMainURL(string)
获取主资源站的资源地址
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Services/IRemoteServices.cs#L10)
```csharp title="Declaration"
string GetRemoteMainURL(string fileName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *fileName* | 请求的文件名称 |

### GetRemoteFallbackURL(string)
获取备用资源站的资源地址
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Services/IRemoteServices.cs#L16)
```csharp title="Declaration"
string GetRemoteFallbackURL(string fileName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *fileName* | 请求的文件名称 |

