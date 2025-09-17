---
title: Interface IBuildPipeline
sidebar_label: IBuildPipeline
---
# Interface IBuildPipeline


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public interface IBuildPipeline
```
## Methods
### Run(BuildParameters, bool)
运行构建任务

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

