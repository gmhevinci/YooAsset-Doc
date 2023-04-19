---
title: Class CollectResult
sidebar_label: CollectResult
---
# Class CollectResult


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectResult.cs#L6)
```csharp title="Declaration"
public class CollectResult
```
## Properties
### Command
收集命令
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectResult.cs#L11)
```csharp title="Declaration"
public CollectCommand Command { get; }
```
### CollectAssets
收集的资源信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectResult.cs#L16)
```csharp title="Declaration"
public List<CollectAssetInfo> CollectAssets { get; }
```
## Methods
### SetCollectAssets(List&lt;CollectAssetInfo&gt;)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectResult.cs#L22)
```csharp title="Declaration"
public void SetCollectAssets(List<CollectAssetInfo> collectAssets)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<YooAsset.Editor.CollectAssetInfo>` | *collectAssets* |

