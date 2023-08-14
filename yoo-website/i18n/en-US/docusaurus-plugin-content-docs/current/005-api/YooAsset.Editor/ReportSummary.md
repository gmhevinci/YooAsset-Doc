---
title: Class ReportSummary
sidebar_label: ReportSummary
---
# Class ReportSummary


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L8)
```csharp title="Declaration"
[Serializable]
public class ReportSummary
```
## Fields
### YooVersion
YooAsset版本
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L14)
```csharp title="Declaration"
public string YooVersion
```
### UnityVersion
引擎版本
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L19)
```csharp title="Declaration"
public string UnityVersion
```
### BuildDate
构建时间
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L24)
```csharp title="Declaration"
public string BuildDate
```
### BuildSeconds
构建耗时（单位：秒）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L29)
```csharp title="Declaration"
public int BuildSeconds
```
### BuildTarget
构建平台
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L34)
```csharp title="Declaration"
public BuildTarget BuildTarget
```
### BuildPipeline
构建管线
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L39)
```csharp title="Declaration"
public EBuildPipeline BuildPipeline
```
### BuildMode
构建模式
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L44)
```csharp title="Declaration"
public EBuildMode BuildMode
```
### BuildPackageName
构建包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L49)
```csharp title="Declaration"
public string BuildPackageName
```
### BuildPackageVersion
构建包裹版本
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L54)
```csharp title="Declaration"
public string BuildPackageVersion
```
### EnableAddressable
启用可寻址资源定位
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L59)
```csharp title="Declaration"
public bool EnableAddressable
```
### UniqueBundleName
资源包名唯一化
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L64)
```csharp title="Declaration"
public bool UniqueBundleName
```
### EncryptionServicesClassName
加密服务类名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L69)
```csharp title="Declaration"
public string EncryptionServicesClassName
```
### OutputNameStyle

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L72)
```csharp title="Declaration"
public EOutputNameStyle OutputNameStyle
```
### CompressOption

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L73)
```csharp title="Declaration"
public ECompressOption CompressOption
```
### DisableWriteTypeTree

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L74)
```csharp title="Declaration"
public bool DisableWriteTypeTree
```
### IgnoreTypeTreeChanges

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L75)
```csharp title="Declaration"
public bool IgnoreTypeTreeChanges
```
### AssetFileTotalCount

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L78)
```csharp title="Declaration"
public int AssetFileTotalCount
```
### MainAssetTotalCount

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L79)
```csharp title="Declaration"
public int MainAssetTotalCount
```
### AllBundleTotalCount

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L80)
```csharp title="Declaration"
public int AllBundleTotalCount
```
### AllBundleTotalSize

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L81)
```csharp title="Declaration"
public long AllBundleTotalSize
```
### EncryptedBundleTotalCount

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L82)
```csharp title="Declaration"
public int EncryptedBundleTotalCount
```
### EncryptedBundleTotalSize

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L83)
```csharp title="Declaration"
public long EncryptedBundleTotalSize
```
### RawBundleTotalCount

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L84)
```csharp title="Declaration"
public int RawBundleTotalCount
```
### RawBundleTotalSize

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportSummary.cs#L85)
```csharp title="Declaration"
public long RawBundleTotalSize
```
