---
title: Class TaskCreateManifest_ESBP
sidebar_label: TaskCreateManifest_ESBP
---
# Class TaskCreateManifest_ESBP


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/EditorSimulateBuildPipeline/BuildTasks/TaskCreateManifest_ESBP.cs#L6)
```csharp title="Declaration"
public class TaskCreateManifest_ESBP : TaskCreateManifest, IBuildTask
```
## Methods
### GetBundleDepends(BuildContext, string)
获取资源包的依赖集合
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/EditorSimulateBuildPipeline/BuildTasks/TaskCreateManifest_ESBP.cs#L13)
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
