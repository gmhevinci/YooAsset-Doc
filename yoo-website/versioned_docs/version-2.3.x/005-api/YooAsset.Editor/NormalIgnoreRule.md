---
title: Class NormalIgnoreRule
sidebar_label: NormalIgnoreRule
description: "适配常规的资源构建管线"
---
# Class NormalIgnoreRule
适配常规的资源构建管线

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultIgnoreRule.cs#L19)
```csharp title="Declaration"
public class NormalIgnoreRule : IIgnoreRule
```
## Methods
### IsIgnore(AssetInfo)
查询是否为忽略文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultIgnoreRule.cs#L24)
```csharp title="Declaration"
public bool IsIgnore(AssetInfo assetInfo)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetInfo](../YooAsset.Editor/AssetInfo.md) | *assetInfo* |


## Implements

* [YooAsset.Editor.IIgnoreRule](../YooAsset.Editor/IIgnoreRule.md)
