---
title: Class TaskGetBuildMap
sidebar_label: TaskGetBuildMap
---
# Class TaskGetBuildMap


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildTasks/TaskGetBuildMap.cs#L10)
```csharp title="Declaration"
[Task("获取资源构建内容")]
public class TaskGetBuildMap : IBuildTask
```
## Methods
### CreateBuildMap(EBuildMode, IShareAssetPackRule, string)
Resource build context
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildTasks/TaskGetBuildMap.cs#L28)
```csharp title="Declaration"
public BuildMapContext CreateBuildMap(EBuildMode buildMode, IShareAssetPackRule packRule, string packageName)
```

##### Returns

[YooAsset.Editor.BuildMapContext](../YooAsset.Editor/BuildMapContext.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.EBuildMode](../YooAsset.Editor/EBuildMode.md) | *buildMode* |
| [YooAsset.Editor.IShareAssetPackRule](../YooAsset.Editor/IShareAssetPackRule.md) | *packRule* |
| `System.String` | *packageName* |


## Implements

* [YooAsset.Editor.IBuildTask](../YooAsset.Editor/IBuildTask.md)
