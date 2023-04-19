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
### CreateBuildMap(EBuildMode, string)
资源构建上下文
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildTasks/TaskGetBuildMap.cs#L27)
```csharp title="Declaration"
public BuildMapContext CreateBuildMap(EBuildMode buildMode, string packageName)
```

##### Returns

[YooAsset.Editor.BuildMapContext](../YooAsset.Editor/BuildMapContext.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.EBuildMode](../YooAsset.Editor/EBuildMode.md) | *buildMode* |
| `System.String` | *packageName* |


## Implements

* [YooAsset.Editor.IBuildTask](../YooAsset.Editor/IBuildTask.md)
