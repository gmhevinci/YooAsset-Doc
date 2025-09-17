---
title: Class CollectScene
sidebar_label: CollectScene
---
# Class CollectScene


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[DisplayName("收集场景")]
public class CollectScene : IFilterRule
```
## Properties
### FindAssetType
搜寻的资源类型
说明：使用引擎方法搜索获取所有资源列表

```csharp title="Declaration"
public string FindAssetType { get; }
```
## Methods
### IsCollectAsset(FilterRuleData)
验证搜寻的资源是否为收集资源

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
