---
title: Class BuildParameters
sidebar_label: BuildParameters
description: "构建参数"
---
# Class BuildParameters
构建参数

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L10)
```csharp title="Declaration"
public class BuildParameters
```
## Fields
### SBPParameters
可编程构建管线的参数
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L36)
```csharp title="Declaration"
public BuildParameters.SBPBuildParameters SBPParameters
```
### OutputRoot
输出的根目录
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L42)
```csharp title="Declaration"
public string OutputRoot
```
### BuildTarget
构建的平台
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L47)
```csharp title="Declaration"
public BuildTarget BuildTarget
```
### BuildPipeline
构建管线
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L52)
```csharp title="Declaration"
public EBuildPipeline BuildPipeline
```
### BuildMode
构建模式
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L57)
```csharp title="Declaration"
public EBuildMode BuildMode
```
### PackageName
构建的包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L62)
```csharp title="Declaration"
public string PackageName
```
### PackageVersion
构建的包裹版本
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L67)
```csharp title="Declaration"
public string PackageVersion
```
### EnableLog
是否显示普通日志
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L73)
```csharp title="Declaration"
public bool EnableLog
```
### VerifyBuildingResult
验证构建结果
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L78)
```csharp title="Declaration"
public bool VerifyBuildingResult
```
### ShareAssetPackRule
共享资源的打包规则
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L83)
```csharp title="Declaration"
public IShareAssetPackRule ShareAssetPackRule
```
### EncryptionServices
资源的加密接口
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L88)
```csharp title="Declaration"
public IEncryptionServices EncryptionServices
```
### OutputNameStyle
补丁文件名称的样式
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L93)
```csharp title="Declaration"
public EOutputNameStyle OutputNameStyle
```
### CopyBuildinFileOption
拷贝内置资源选项
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L98)
```csharp title="Declaration"
public ECopyBuildinFileOption CopyBuildinFileOption
```
### CopyBuildinFileTags
拷贝内置资源的标签
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L103)
```csharp title="Declaration"
public string CopyBuildinFileTags
```
### CompressOption
压缩选项
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L108)
```csharp title="Declaration"
public ECompressOption CompressOption
```
### DisableWriteTypeTree
禁止写入类型树结构（可以降低包体和内存并提高加载效率）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L113)
```csharp title="Declaration"
public bool DisableWriteTypeTree
```
### IgnoreTypeTreeChanges
忽略类型树变化
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L118)
```csharp title="Declaration"
public bool IgnoreTypeTreeChanges
```
