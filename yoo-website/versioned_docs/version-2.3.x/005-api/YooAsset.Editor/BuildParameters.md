---
title: Class BuildParameters
sidebar_label: BuildParameters
description: "构建参数"
---
# Class BuildParameters
构建参数

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L12)
```csharp title="Declaration"
public abstract class BuildParameters
```
## Fields
### BuildOutputRoot
构建输出的根目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L17)
```csharp title="Declaration"
public string BuildOutputRoot
```
### BuildinFileRoot
内置文件的根目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L22)
```csharp title="Declaration"
public string BuildinFileRoot
```
### BuildPipeline
构建管线名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L27)
```csharp title="Declaration"
public string BuildPipeline
```
### BuildBundleType
构建资源包类型
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L32)
```csharp title="Declaration"
public int BuildBundleType
```
### BuildTarget
构建的平台
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L37)
```csharp title="Declaration"
public BuildTarget BuildTarget
```
### PackageName
构建的包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L42)
```csharp title="Declaration"
public string PackageName
```
### PackageVersion
构建的包裹版本
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L47)
```csharp title="Declaration"
public string PackageVersion
```
### PackageNote
构建的包裹备注
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L52)
```csharp title="Declaration"
public string PackageNote
```
### ClearBuildCacheFiles
清空构建缓存文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L57)
```csharp title="Declaration"
public bool ClearBuildCacheFiles
```
### UseAssetDependencyDB
使用资源依赖缓存数据库
说明：开启此项可以极大提高资源收集速度！
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L63)
```csharp title="Declaration"
public bool UseAssetDependencyDB
```
### EnableSharePackRule
启用共享资源打包
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L68)
```csharp title="Declaration"
public bool EnableSharePackRule
```
### SingleReferencedPackAlone
对单独引用的共享资源进行独立打包
说明：关闭该选项单独引用的共享资源将会构建到引用它的资源包内！
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L74)
```csharp title="Declaration"
public bool SingleReferencedPackAlone
```
### VerifyBuildingResult
验证构建结果
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L79)
```csharp title="Declaration"
public bool VerifyBuildingResult
```
### FileNameStyle
资源包名称样式
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L84)
```csharp title="Declaration"
public EFileNameStyle FileNameStyle
```
### BuildinFileCopyOption
内置文件的拷贝选项
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L89)
```csharp title="Declaration"
public EBuildinFileCopyOption BuildinFileCopyOption
```
### BuildinFileCopyParams
内置文件的拷贝参数
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L94)
```csharp title="Declaration"
public string BuildinFileCopyParams
```
### EncryptionServices
资源包加密服务类
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L99)
```csharp title="Declaration"
public IEncryptionServices EncryptionServices
```
## Methods
### CheckBuildParameters()
检测构建参数是否合法
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L110)
```csharp title="Declaration"
public virtual void CheckBuildParameters()
```
### GetPipelineOutputDirectory()
获取构建管线的输出目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L168)
```csharp title="Declaration"
public virtual string GetPipelineOutputDirectory()
```

##### Returns

`System.String`
### GetPackageOutputDirectory()
获取本次构建的补丁输出目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L180)
```csharp title="Declaration"
public virtual string GetPackageOutputDirectory()
```

##### Returns

`System.String`
### GetPackageRootDirectory()
获取本次构建的补丁根目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L192)
```csharp title="Declaration"
public virtual string GetPackageRootDirectory()
```

##### Returns

`System.String`
### GetBuildinRootDirectory()
获取内置资源的根目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildParameters.cs#L204)
```csharp title="Declaration"
public virtual string GetBuildinRootDirectory()
```

##### Returns

`System.String`
