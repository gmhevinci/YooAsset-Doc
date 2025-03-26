---
title: Enum EBuildinFileCopyOption
sidebar_label: EBuildinFileCopyOption
description: "首包资源文件的拷贝方式"
---
# Enum EBuildinFileCopyOption
首包资源文件的拷贝方式

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/EBuildinFileCopyOption.cs#L7)
```csharp title="Declaration"
public enum EBuildinFileCopyOption
```
## Fields
### None
不拷贝任何文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/EBuildinFileCopyOption.cs#L12)
```csharp title="Declaration"
None = 0
```
### ClearAndCopyAll
先清空已有文件，然后拷贝所有文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/EBuildinFileCopyOption.cs#L17)
```csharp title="Declaration"
ClearAndCopyAll = 1
```
### ClearAndCopyByTags
先清空已有文件，然后按照资源标签拷贝文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/EBuildinFileCopyOption.cs#L22)
```csharp title="Declaration"
ClearAndCopyByTags = 2
```
### OnlyCopyAll
不清空已有文件，直接拷贝所有文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/EBuildinFileCopyOption.cs#L27)
```csharp title="Declaration"
OnlyCopyAll = 3
```
### OnlyCopyByTags
不清空已有文件，直接按照资源标签拷贝文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/EBuildinFileCopyOption.cs#L32)
```csharp title="Declaration"
OnlyCopyByTags = 4
```
