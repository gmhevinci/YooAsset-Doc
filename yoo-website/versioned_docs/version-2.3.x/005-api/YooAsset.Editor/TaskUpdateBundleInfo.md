---
title: Class TaskUpdateBundleInfo
sidebar_label: TaskUpdateBundleInfo
---
# Class TaskUpdateBundleInfo


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/BaseTasks/TaskUpdateBundleInfo.cs#L10)
```csharp title="Declaration"
public abstract class TaskUpdateBundleInfo
```
## Methods
### UpdateBundleInfo(BuildContext)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/BaseTasks/TaskUpdateBundleInfo.cs#L12)
```csharp title="Declaration"
public void UpdateBundleInfo(BuildContext context)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |

### GetUnityHash(BuildBundleInfo, BuildContext)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/BaseTasks/TaskUpdateBundleInfo.cs#L63)
```csharp title="Declaration"
protected abstract string GetUnityHash(BuildBundleInfo bundleInfo, BuildContext context)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |

### GetUnityCRC(BuildBundleInfo, BuildContext)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/BaseTasks/TaskUpdateBundleInfo.cs#L64)
```csharp title="Declaration"
protected abstract uint GetUnityCRC(BuildBundleInfo bundleInfo, BuildContext context)
```

##### Returns

`System.UInt32`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |

### GetBundleFileHash(BuildBundleInfo, BuildParametersContext)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/BaseTasks/TaskUpdateBundleInfo.cs#L65)
```csharp title="Declaration"
protected abstract string GetBundleFileHash(BuildBundleInfo bundleInfo, BuildParametersContext buildParametersContext)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildParametersContext](../YooAsset.Editor/BuildParametersContext.md) | *buildParametersContext* |

### GetBundleFileCRC(BuildBundleInfo, BuildParametersContext)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/BaseTasks/TaskUpdateBundleInfo.cs#L66)
```csharp title="Declaration"
protected abstract string GetBundleFileCRC(BuildBundleInfo bundleInfo, BuildParametersContext buildParametersContext)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildParametersContext](../YooAsset.Editor/BuildParametersContext.md) | *buildParametersContext* |

### GetBundleFileSize(BuildBundleInfo, BuildParametersContext)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/BaseTasks/TaskUpdateBundleInfo.cs#L67)
```csharp title="Declaration"
protected abstract long GetBundleFileSize(BuildBundleInfo bundleInfo, BuildParametersContext buildParametersContext)
```

##### Returns

`System.Int64`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md) | *bundleInfo* |
| [YooAsset.Editor.BuildParametersContext](../YooAsset.Editor/BuildParametersContext.md) | *buildParametersContext* |

