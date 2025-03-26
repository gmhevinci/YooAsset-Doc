---
title: Class CollectSprite
sidebar_label: CollectSprite
---
# Class CollectSprite


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultFilterRule.cs#L37)
```csharp title="Declaration"
[DisplayName("收集精灵类型的纹理")]
public class CollectSprite : IFilterRule
```
## Methods
### IsCollectAsset(FilterRuleData)
是否为收集资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultFilterRule.cs#L40)
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
