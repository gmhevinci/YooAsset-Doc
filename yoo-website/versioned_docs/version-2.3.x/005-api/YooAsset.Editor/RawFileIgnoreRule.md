---
title: Class RawFileIgnoreRule
sidebar_label: RawFileIgnoreRule
description: "适配原生文件构建管线"
---
# Class RawFileIgnoreRule
适配原生文件构建管线

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultIgnoreRule.cs#L64)
```csharp title="Declaration"
public class RawFileIgnoreRule : IIgnoreRule
```
## Methods
### IsIgnore(AssetInfo)
查询是否为忽略文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultIgnoreRule.cs#L69)
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
