---
title: Interface IFilterRule
sidebar_label: IFilterRule
description: "资源过滤规则接口"
---
# Interface IFilterRule
资源过滤规则接口

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectRules/IFilterRule.cs#L23)
```csharp title="Declaration"
public interface IFilterRule
```
## Methods
### IsCollectAsset(FilterRuleData)
是否为收集资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectRules/IFilterRule.cs#L29)
```csharp title="Declaration"
bool IsCollectAsset(FilterRuleData data)
```

##### Returns

`System.Boolean`: 如果收集该资源返回TRUE
##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.FilterRuleData](../YooAsset.Editor/FilterRuleData.md) | *data* |

