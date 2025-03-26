---
title: Class TaskGetBuildMap
sidebar_label: TaskGetBuildMap
---
# Class TaskGetBuildMap


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class TaskGetBuildMap
```
## Methods
### CreateBuildMap(BuildParameters)
生成资源构建上下文

```csharp title="Declaration"
public BuildMapContext CreateBuildMap(BuildParameters buildParameters)
```

##### Returns

[YooAsset.Editor.BuildMapContext](../YooAsset.Editor/BuildMapContext.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildParameters](../YooAsset.Editor/BuildParameters.md) | *buildParameters* |

### PreProcessPackShareBundle(BuildParameters, CollectCommand, Dictionary&lt;string, BuildAssetInfo&gt;)
共享资源打包前置处理

```csharp title="Declaration"
protected virtual void PreProcessPackShareBundle(BuildParameters buildParameters, CollectCommand command, Dictionary<string, BuildAssetInfo> allBuildAssetInfos)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildParameters](../YooAsset.Editor/BuildParameters.md) | *buildParameters* |
| [YooAsset.Editor.CollectCommand](../YooAsset.Editor/CollectCommand.md) | *command* |
| `System.Collections.Generic.Dictionary<System.String,YooAsset.Editor.BuildAssetInfo>` | *allBuildAssetInfos* |

### PostProcessPackShareBundle()
共享资源打包后置处理

```csharp title="Declaration"
protected virtual void PostProcessPackShareBundle()
```
### GetShareBundleName(BuildAssetInfo)
获取共享资源包名称

```csharp title="Declaration"
protected virtual PackRuleResult GetShareBundleName(BuildAssetInfo buildAssetInfo)
```

##### Returns

[YooAsset.Editor.PackRuleResult](../YooAsset.Editor/PackRuleResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildAssetInfo](../YooAsset.Editor/BuildAssetInfo.md) | *buildAssetInfo* |

