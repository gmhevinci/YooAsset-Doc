---
title: Interface IPackRule
sidebar_label: IPackRule
description: "资源打包规则接口"
---
# Interface IPackRule
资源打包规则接口

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectRules/IPackRule.cs#L71)
```csharp title="Declaration"
public interface IPackRule
```
## Methods
### GetPackRuleResult(PackRuleData)
获取打包规则结果
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectRules/IPackRule.cs#L76)
```csharp title="Declaration"
PackRuleResult GetPackRuleResult(PackRuleData data)
```

##### Returns

[YooAsset.Editor.PackRuleResult](../YooAsset.Editor/PackRuleResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.PackRuleData](../YooAsset.Editor/PackRuleData.md) | *data* |

