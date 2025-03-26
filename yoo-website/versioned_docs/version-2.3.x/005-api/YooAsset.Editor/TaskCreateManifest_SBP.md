---
title: Class TaskCreateManifest_SBP
sidebar_label: TaskCreateManifest_SBP
---
# Class TaskCreateManifest_SBP


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/BuildTasks/TaskCreateManifest_SBP.cs#L10)
```csharp title="Declaration"
public class TaskCreateManifest_SBP : TaskCreateManifest, IBuildTask
```
## Methods
### GetBundleDepends(BuildContext, string)
获取资源包的依赖集合
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/BuildTasks/TaskCreateManifest_SBP.cs#L19)
```csharp title="Declaration"
protected override string[] GetBundleDepends(BuildContext context, string bundleName)
```

##### Returns

`System.String[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |
| `System.String` | *bundleName* |


## Implements

* [YooAsset.Editor.IBuildTask](../YooAsset.Editor/IBuildTask.md)
