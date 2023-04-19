---
title: Class ReportBundleInfo
sidebar_label: ReportBundleInfo
---
# Class ReportBundleInfo


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L8)
```csharp title="Declaration"
[Serializable]
public class ReportBundleInfo
```
## Fields
### BundleName
资源包名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L14)
```csharp title="Declaration"
public string BundleName
```
### FileName
文件名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L19)
```csharp title="Declaration"
public string FileName
```
### FileHash
文件哈希值
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L24)
```csharp title="Declaration"
public string FileHash
```
### FileCRC
文件校验码
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L29)
```csharp title="Declaration"
public string FileCRC
```
### FileSize
文件大小（字节数）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L34)
```csharp title="Declaration"
public long FileSize
```
### IsRawFile
是否为原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L39)
```csharp title="Declaration"
public bool IsRawFile
```
### LoadMethod
加载方法
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L44)
```csharp title="Declaration"
public EBundleLoadMethod LoadMethod
```
### Tags
Tags
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L49)
```csharp title="Declaration"
public string[] Tags
```
### ReferenceIDs
引用该资源包的ID列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L54)
```csharp title="Declaration"
public int[] ReferenceIDs
```
### AllBuiltinAssets
该资源包内包含的所有资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L59)
```csharp title="Declaration"
public List<string> AllBuiltinAssets
```
## Methods
### GetTagsString()
获取资源分类标签的字符串
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildReport/ReportBundleInfo.cs#L64)
```csharp title="Declaration"
public string GetTagsString()
```

##### Returns

`System.String`
