---
title: Interface IBuildPipeline
sidebar_label: IBuildPipeline
---
# Interface IBuildPipeline


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/IBuildPipeline.cs#L4)
```csharp title="Declaration"
public interface IBuildPipeline
```
## Methods
### Run(BuildParameters, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/IBuildPipeline.cs#L6)
```csharp title="Declaration"
BuildResult Run(BuildParameters buildParameters, bool enableLog)
```

##### Returns

[YooAsset.Editor.BuildResult](../YooAsset.Editor/BuildResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildParameters](../YooAsset.Editor/BuildParameters.md) | *buildParameters* |
| `System.Boolean` | *enableLog* |

