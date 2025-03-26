---
title: Class BuildRunner
sidebar_label: BuildRunner
---
# Class BuildRunner


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildSystem/BuildRunner.cs#L10)
```csharp title="Declaration"
public class BuildRunner
```
## Fields
### TotalSeconds
总耗时
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildSystem/BuildRunner.cs#L17)
```csharp title="Declaration"
public static int TotalSeconds
```
## Methods
### Run(List&lt;IBuildTask&gt;, BuildContext)
执行构建流程
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildSystem/BuildRunner.cs#L23)
```csharp title="Declaration"
public static BuildResult Run(List<IBuildTask> pipeline, BuildContext context)
```

##### Returns

[YooAsset.Editor.BuildResult](../YooAsset.Editor/BuildResult.md): 如果成功返回TRUE，否则返回FALSE
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<YooAsset.Editor.IBuildTask>` | *pipeline* |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |

