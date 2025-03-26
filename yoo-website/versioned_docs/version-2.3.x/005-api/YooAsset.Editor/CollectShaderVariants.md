---
title: Class CollectShaderVariants
sidebar_label: CollectShaderVariants
---
# Class CollectShaderVariants


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultFilterRule.cs#L67)
```csharp title="Declaration"
[DisplayName("收集着色器变种集合")]
public class CollectShaderVariants : IFilterRule
```
## Methods
### IsCollectAsset(FilterRuleData)
是否为收集资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultFilterRule.cs#L70)
```csharp title="Declaration"
public bool IsCollectAsset(FilterRuleData data)
```

##### Returns

`System.Boolean`: 如果收集该资源返回TRUE
##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.FilterRuleData](../YooAsset.Editor/FilterRuleData.md) | *data* |


## Implements

* [YooAsset.Editor.IFilterRule](../YooAsset.Editor/IFilterRule.md)
