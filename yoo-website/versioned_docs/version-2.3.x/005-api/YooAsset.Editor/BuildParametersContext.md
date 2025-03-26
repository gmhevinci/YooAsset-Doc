---
title: Class BuildParametersContext
sidebar_label: BuildParametersContext
---
# Class BuildParametersContext


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L9)
```csharp title="Declaration"
public class BuildParametersContext : IContextObject
```
## Properties
### Parameters
构建参数
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L14)
```csharp title="Declaration"
public BuildParameters Parameters { get; }
```
## Methods
### CheckBuildParameters()
检测构建参数是否合法
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L25)
```csharp title="Declaration"
public void CheckBuildParameters()
```
### GetPipelineOutputDirectory()
获取构建管线的输出目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L34)
```csharp title="Declaration"
public string GetPipelineOutputDirectory()
```

##### Returns

`System.String`
### GetPackageOutputDirectory()
获取本次构建的补丁输出目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L42)
```csharp title="Declaration"
public string GetPackageOutputDirectory()
```

##### Returns

`System.String`
### GetPackageRootDirectory()
获取本次构建的补丁根目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L50)
```csharp title="Declaration"
public string GetPackageRootDirectory()
```

##### Returns

`System.String`
### GetBuildinRootDirectory()
获取内置资源的根目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParametersContext.cs#L58)
```csharp title="Declaration"
public string GetBuildinRootDirectory()
```

##### Returns

`System.String`

## Implements

* [YooAsset.Editor.IContextObject](../YooAsset.Editor/IContextObject.md)
