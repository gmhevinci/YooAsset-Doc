---
title: Class BuildRunner
sidebar_label: BuildRunner
---
# Class BuildRunner


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class BuildRunner
```
## Fields
### TotalSeconds
总耗时

```csharp title="Declaration"
public static int TotalSeconds
```
## Methods
### Run(List&lt;IBuildTask&gt;, BuildContext)
执行构建流程

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

