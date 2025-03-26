---
title: Class PackShader
sidebar_label: PackShader
description: "打包着色器"
---
# Class PackShader
打包着色器

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultPackRule.cs#L169)
```csharp title="Declaration"
[DisplayName("打包着色器文件")]
public class PackShader : IPackRule
```
## Methods
### GetPackRuleResult(PackRuleData)
获取打包规则结果
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultPackRule.cs#L172)
```csharp title="Declaration"
public PackRuleResult GetPackRuleResult(PackRuleData data)
```

##### Returns

[YooAsset.Editor.PackRuleResult](../YooAsset.Editor/PackRuleResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.PackRuleData](../YooAsset.Editor/PackRuleData.md) | *data* |


## Implements

* [YooAsset.Editor.IPackRule](../YooAsset.Editor/IPackRule.md)
