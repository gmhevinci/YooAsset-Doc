---
title: Class ReportAssetInfo
sidebar_label: ReportAssetInfo
---
# Class ReportAssetInfo


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L7)
```csharp title="Declaration"
[Serializable]
public class ReportAssetInfo
```
## Fields
### Address
可寻址地址
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L13)
```csharp title="Declaration"
public string Address
```
### AssetPath
资源路径
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L18)
```csharp title="Declaration"
public string AssetPath
```
### AssetGUID
资源GUID
说明：Meta文件记录的GUID
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L24)
```csharp title="Declaration"
public string AssetGUID
```
### AssetTags
资源的分类标签
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L29)
```csharp title="Declaration"
public string[] AssetTags
```
### MainBundleName
所属资源包名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L34)
```csharp title="Declaration"
public string MainBundleName
```
### MainBundleSize
所属资源包的大小
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L39)
```csharp title="Declaration"
public long MainBundleSize
```
### DependAssets
依赖的资源集合
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L44)
```csharp title="Declaration"
public List<AssetInfo> DependAssets
```
### DependBundles
依赖的资源包集合
说明：框架层收集查询结果
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/ReportAssetInfo.cs#L50)
```csharp title="Declaration"
public List<string> DependBundles
```
