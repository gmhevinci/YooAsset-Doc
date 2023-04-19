---
title: Interface IPackRule
sidebar_label: IPackRule
description: "资源打包规则接口"
---
# Interface IPackRule
资源打包规则接口

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/IPackRule.cs#L70)
```csharp title="Declaration"
public interface IPackRule
```
## Methods
### GetPackRuleResult(PackRuleData)
获取打包规则结果
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/IPackRule.cs#L75)
```csharp title="Declaration"
PackRuleResult GetPackRuleResult(PackRuleData data)
```

##### Returns

[YooAsset.Editor.PackRuleResult](../YooAsset.Editor/PackRuleResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.PackRuleData](../YooAsset.Editor/PackRuleData.md) | *data* |

### IsRawFilePackRule()
是否为原生文件打包规则
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/IPackRule.cs#L80)
```csharp title="Declaration"
bool IsRawFilePackRule()
```

##### Returns

`System.Boolean`
