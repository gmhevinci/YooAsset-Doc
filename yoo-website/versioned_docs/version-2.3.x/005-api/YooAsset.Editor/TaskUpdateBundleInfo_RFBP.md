---
title: Class TaskUpdateBundleInfo_RFBP
sidebar_label: TaskUpdateBundleInfo_RFBP
---
# Class TaskUpdateBundleInfo_RFBP


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/RawFileBuildPipeline/BuildTasks/TaskUpdateBundleInfo_RFBP.cs#L9)
```csharp title="Declaration"
public class TaskUpdateBundleInfo_RFBP : TaskUpdateBundleInfo, IBuildTask
```
## Methods
### GetUnityHash(BuildBundleInfo, BuildContext)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/RawFileBuildPipeline/BuildTasks/TaskUpdateBundleInfo_RFBP.cs#L16)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/RawFileBuildPipeline/BuildTasks/TaskUpdateBundleInfo_RFBP.cs#L21)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/RawFileBuildPipeline/BuildTasks/TaskUpdateBundleInfo_RFBP.cs#L25)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/RawFileBuildPipeline/BuildTasks/TaskUpdateBundleInfo_RFBP.cs#L30)
```csharp title="Declaration"
protected override string GetBundleFileCRC(BuildBundleInfo bundleInfo, BuildParametersContext buildParametersContext)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildParametersContext](../YooAsset.Editor/BuildParametersContext.md) | *buildParametersContext* |

### GetBundleFileSize(BuildBundleInfo, BuildParametersContext)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/RawFileBuildPipeline/BuildTasks/TaskUpdateBundleInfo_RFBP.cs#L35)
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
