---
title: Class BuildParametersContext
sidebar_label: BuildParametersContext
---
# Class BuildParametersContext


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L8)
```csharp title="Declaration"
public class BuildParametersContext : IContextObject
```
## Properties
### Parameters
构建参数
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L16)
```csharp title="Declaration"
public BuildParameters Parameters { get; }
```
## Methods
### GetPipelineOutputDirectory()
获取构建管线的输出目录
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L28)
```csharp title="Declaration"
public string GetPipelineOutputDirectory()
```

##### Returns

`System.String`
### GetPackageOutputDirectory()
获取本次构建的补丁目录
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L40)
```csharp title="Declaration"
public string GetPackageOutputDirectory()
```

##### Returns

`System.String`
### GetPipelineBuildOptions()
获取内置构建管线的构建选项
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L52)
```csharp title="Declaration"
public BuildAssetBundleOptions GetPipelineBuildOptions()
```

##### Returns

`UnityEditor.BuildAssetBundleOptions`
### GetSBPBuildParameters()
获取可编程构建管线的构建参数
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L90)
```csharp title="Declaration"
public BundleBuildParameters GetSBPBuildParameters()
```

##### Returns

`UnityEditor.Build.Pipeline.BundleBuildParameters`

## Implements

* [YooAsset.Editor.IContextObject](../YooAsset.Editor/IContextObject.md)
