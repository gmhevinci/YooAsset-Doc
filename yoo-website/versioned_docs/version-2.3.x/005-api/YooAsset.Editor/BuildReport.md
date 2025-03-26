---
title: Class BuildReport
sidebar_label: BuildReport
description: "构建报告"
---
# Class BuildReport
构建报告

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L12)
```csharp title="Declaration"
[Serializable]
public class BuildReport
```
## Fields
### Summary
汇总信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L18)
```csharp title="Declaration"
public ReportSummary Summary
```
### AssetInfos
资源对象列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L23)
```csharp title="Declaration"
public List<ReportAssetInfo> AssetInfos
```
### BundleInfos
资源包列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L28)
```csharp title="Declaration"
public List<ReportBundleInfo> BundleInfos
```
### IndependAssets
未被依赖的资源列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L33)
```csharp title="Declaration"
public List<ReportIndependAsset> IndependAssets
```
## Methods
### GetBundleInfo(string)
获取资源包信息类
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L38)
```csharp title="Declaration"
public ReportBundleInfo GetBundleInfo(string bundleName)
```

##### Returns

[YooAsset.Editor.ReportBundleInfo](../YooAsset.Editor/ReportBundleInfo.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |

### GetAssetInfo(string)
获取资源信息类
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L51)
```csharp title="Declaration"
public ReportAssetInfo GetAssetInfo(string assetPath)
```

##### Returns

[YooAsset.Editor.ReportAssetInfo](../YooAsset.Editor/ReportAssetInfo.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetPath* |

### Serialize(string, BuildReport)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L62)
```csharp title="Declaration"
public static void Serialize(string savePath, BuildReport buildReport)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *savePath* |
| [YooAsset.Editor.BuildReport](../YooAsset.Editor/BuildReport.md) | *buildReport* |

### Deserialize(string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/BuildReport.cs#L70)
```csharp title="Declaration"
public static BuildReport Deserialize(string jsonData)
```

##### Returns

[YooAsset.Editor.BuildReport](../YooAsset.Editor/BuildReport.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *jsonData* |

