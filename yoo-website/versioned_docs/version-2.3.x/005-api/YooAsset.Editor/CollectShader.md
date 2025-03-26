---
title: Class CollectShader
sidebar_label: CollectShader
---
# Class CollectShader


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultFilterRule.cs#L58)
```csharp title="Declaration"
[DisplayName("收集着色器")]
public class CollectShader : IFilterRule
```
## Methods
### IsCollectAsset(FilterRuleData)
是否为收集资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultFilterRule.cs#L61)
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
