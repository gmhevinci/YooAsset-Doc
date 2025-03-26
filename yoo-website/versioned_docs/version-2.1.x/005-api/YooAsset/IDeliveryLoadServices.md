---
title: Interface IDeliveryLoadServices
sidebar_label: IDeliveryLoadServices
---
# Interface IDeliveryLoadServices


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public interface IDeliveryLoadServices
```
## Methods
### LoadAssetBundle(DeliveryFileInfo)
同步方式获取分发的资源包对象

```csharp title="Declaration"
AssetBundle LoadAssetBundle(DeliveryFileInfo fileInfo)
```

##### Returns

`UnityEngine.AssetBundle`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DeliveryFileInfo](../YooAsset/DeliveryFileInfo.md) | *fileInfo* |

### LoadAssetBundleAsync(DeliveryFileInfo)
异步方式获取分发的资源包对象

```csharp title="Declaration"
AssetBundleCreateRequest LoadAssetBundleAsync(DeliveryFileInfo fileInfo)
```

##### Returns

`UnityEngine.AssetBundleCreateRequest`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DeliveryFileInfo](../YooAsset/DeliveryFileInfo.md) | *fileInfo* |

