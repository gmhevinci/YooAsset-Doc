---
title: Class TaskGetBuildMap
sidebar_label: TaskGetBuildMap
---
# Class TaskGetBuildMap


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Task("获取资源构建内容")]
public class TaskGetBuildMap : IBuildTask
```
## Methods
### CreateBuildMap(EBuildMode, string)


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
