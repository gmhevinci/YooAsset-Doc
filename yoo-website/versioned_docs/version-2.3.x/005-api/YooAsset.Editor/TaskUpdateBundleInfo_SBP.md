---
title: Class TaskUpdateBundleInfo_SBP
sidebar_label: TaskUpdateBundleInfo_SBP
---
# Class TaskUpdateBundleInfo_SBP


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class TaskUpdateBundleInfo_SBP : TaskUpdateBundleInfo, IBuildTask
```
## Methods
### GetUnityHash(BuildBundleInfo, BuildContext)


```csharp title="Declaration"
protected override string GetUnityHash(BuildBundleInfo bundleInfo, BuildContext context)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |

### GetUnityCRC(BuildBundleInfo, BuildContext)


```csharp title="Declaration"
protected override uint GetUnityCRC(BuildBundleInfo bundleInfo, BuildContext context)
```

##### Returns

`System.UInt32`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |

### GetBundleFileHash(BuildBundleInfo, BuildParametersContext)


```csharp title="Declaration"
protected override string GetBundleFileHash(BuildBundleInfo bundleInfo, BuildParametersContext buildParametersContext)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildParametersContext](../YooAsset.Editor/BuildParametersContext.md) | *buildParametersContext* |

### GetBundleFileCRC(BuildBundleInfo, BuildParametersContext)


```csharp title="Declaration"
protected override uint GetBundleFileCRC(BuildBundleInfo bundleInfo, BuildParametersContext buildParametersContext)
```

##### Returns

`System.UInt32`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildParametersContext](../YooAsset.Editor/BuildParametersContext.md) | *buildParametersContext* |

### GetBundleFileSize(BuildBundleInfo, BuildParametersContext)


```csharp title="Declaration"
protected override long GetBundleFileSize(BuildBundleInfo bundleInfo, BuildParametersContext buildParametersContext)
```

##### Returns

`System.Int64`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildParametersContext](../YooAsset.Editor/BuildParametersContext.md) | *buildParametersContext* |


## Implements

* [YooAsset.Editor.IBuildTask](../YooAsset.Editor/IBuildTask.md)
