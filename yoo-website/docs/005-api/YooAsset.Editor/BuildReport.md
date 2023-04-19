---
title: Class BuildReport
sidebar_label: BuildReport
---
# Class BuildReport


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class BuildReport
```
## Fields
### Summary


```csharp title="Declaration"
public ReportSummary Summary
```
### AssetInfos


```csharp title="Declaration"
public List<ReportAssetInfo> AssetInfos
```
### BundleInfos


```csharp title="Declaration"
public List<ReportBundleInfo> BundleInfos
```
## Methods
### GetBundleInfo(string)


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


```csharp title="Declaration"
public static void Serialize(string savePath, BuildReport buildReport)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *savePath* |
| [YooAsset.Editor.BuildReport](../YooAsset.Editor/BuildReport.md) | *buildReport* |

### Deserialize(string)


```csharp title="Declaration"
public static BuildReport Deserialize(string jsonData)
```

##### Returns

[YooAsset.Editor.BuildReport](../YooAsset.Editor/BuildReport.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *jsonData* |

