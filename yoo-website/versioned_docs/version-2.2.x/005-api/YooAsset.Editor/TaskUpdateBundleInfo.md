---
title: Class TaskUpdateBundleInfo
sidebar_label: TaskUpdateBundleInfo
---
# Class TaskUpdateBundleInfo


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public abstract class TaskUpdateBundleInfo
```
## Methods
### UpdateBundleInfo(BuildContext)


```csharp title="Declaration"
public void UpdateBundleInfo(BuildContext context)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |

### GetUnityHash(BuildBundleInfo, BuildContext)


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

