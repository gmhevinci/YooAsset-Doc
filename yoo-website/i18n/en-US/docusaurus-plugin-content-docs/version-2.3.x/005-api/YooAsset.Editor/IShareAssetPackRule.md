---
title: Interface IShareAssetPackRule
sidebar_label: IShareAssetPackRule
description: "共享资源的打包规则"
---
# Interface IShareAssetPackRule
共享资源的打包规则

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/IShareAssetPackRule.cs#L7)
```csharp title="Declaration"
public interface IShareAssetPackRule
```
## Methods
### GetPackRuleResult(string)
获取打包规则结果
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/IShareAssetPackRule.cs#L12)
```csharp title="Declaration"
PackRuleResult GetPackRuleResult(string assetPath)
```

##### Returns

[YooAsset.Editor.PackRuleResult](../YooAsset.Editor/PackRuleResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetPath* |

