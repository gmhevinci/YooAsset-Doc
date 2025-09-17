---
title: Interface IFilterRule
sidebar_label: IFilterRule
description: "资源过滤规则接口"
---
# Interface IFilterRule
资源过滤规则接口

###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public interface IFilterRule
```
## Properties
### FindAssetType
搜寻的资源类型
说明：使用引擎方法搜索获取所有资源列表

```csharp title="Declaration"
string FindAssetType { get; }
```
## Methods
### IsCollectAsset(FilterRuleData)
验证搜寻的资源是否为收集资源

```csharp title="Declaration"
bool IsCollectAsset(FilterRuleData data)
```

##### Returns

`System.Boolean`: 如果收集该资源返回TRUE
##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.FilterRuleData](../YooAsset.Editor/FilterRuleData.md) | *data* |

