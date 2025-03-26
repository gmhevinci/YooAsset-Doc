---
title: Class TaskCreateManifest_RFBP
sidebar_label: TaskCreateManifest_RFBP
---
# Class TaskCreateManifest_RFBP


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/RawFileBuildPipeline/BuildTasks/TaskCreateManifest_RFBP.cs#L8)
```csharp title="Declaration"
public class TaskCreateManifest_RFBP : TaskCreateManifest, IBuildTask
```
## Methods
### GetBundleDepends(BuildContext, string)
获取资源包的依赖集合
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/RawFileBuildPipeline/BuildTasks/TaskCreateManifest_RFBP.cs#L15)
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
