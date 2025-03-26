---
title: Interface IDecryptionServices
sidebar_label: IDecryptionServices
description: "解密类服务接口"
---
# Interface IDecryptionServices
解密类服务接口

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public interface IDecryptionServices
```
## Methods
### LoadAssetBundle(DecryptFileInfo, out Stream)
同步方式获取解密的资源包对象
注意：加载流对象在资源包对象释放的时候会自动释放

```csharp title="Declaration"
AssetBundle LoadAssetBundle(DecryptFileInfo fileInfo, out Stream managedStream)
```

##### Returns

`UnityEngine.AssetBundle`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DecryptFileInfo](../YooAsset/DecryptFileInfo.md) | *fileInfo* |
| `System.IO.Stream` | *managedStream* |

### LoadAssetBundleAsync(DecryptFileInfo, out Stream)
异步方式获取解密的资源包对象
注意：加载流对象在资源包对象释放的时候会自动释放

```csharp title="Declaration"
AssetBundleCreateRequest LoadAssetBundleAsync(DecryptFileInfo fileInfo, out Stream managedStream)
```

##### Returns

`UnityEngine.AssetBundleCreateRequest`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DecryptFileInfo](../YooAsset/DecryptFileInfo.md) | *fileInfo* |
| `System.IO.Stream` | *managedStream* |

