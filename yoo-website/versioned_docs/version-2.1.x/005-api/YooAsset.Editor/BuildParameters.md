---
title: Class BuildParameters
sidebar_label: BuildParameters
description: "构建参数"
---
# Class BuildParameters
构建参数

###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public abstract class BuildParameters
```
## Fields
### BuildOutputRoot
构建输出的根目录

```csharp title="Declaration"
public string BuildOutputRoot
```
### BuildinFileRoot
内置文件的根目录

```csharp title="Declaration"
public string BuildinFileRoot
```
### BuildPipeline
构建管线

```csharp title="Declaration"
public string BuildPipeline
```
### BuildTarget
构建的平台

```csharp title="Declaration"
public BuildTarget BuildTarget
```
### BuildMode
构建模式

```csharp title="Declaration"
public EBuildMode BuildMode
```
### PackageName
构建的包裹名称

```csharp title="Declaration"
public string PackageName
```
### PackageVersion
构建的包裹版本

```csharp title="Declaration"
public string PackageVersion
```
### EnableSharePackRule
是否启用共享资源打包

```csharp title="Declaration"
public bool EnableSharePackRule
```
### VerifyBuildingResult
验证构建结果

```csharp title="Declaration"
public bool VerifyBuildingResult
```
### FileNameStyle
资源包名称样式

```csharp title="Declaration"
public EFileNameStyle FileNameStyle
```
### BuildinFileCopyOption
内置文件的拷贝选项

```csharp title="Declaration"
public EBuildinFileCopyOption BuildinFileCopyOption
```
### BuildinFileCopyParams
内置文件的拷贝参数

```csharp title="Declaration"
public string BuildinFileCopyParams
```
### EncryptionServices
资源包加密服务类

```csharp title="Declaration"
public IEncryptionServices EncryptionServices
```
## Methods
### CheckBuildParameters()
检测构建参数是否合法

```csharp title="Declaration"
public virtual void CheckBuildParameters()
```
### GetPipelineOutputDirectory()
获取构建管线的输出目录

```csharp title="Declaration"
public virtual string GetPipelineOutputDirectory()
```

##### Returns

`System.String`
### GetPackageOutputDirectory()
获取本次构建的补丁输出目录

```csharp title="Declaration"
public virtual string GetPackageOutputDirectory()
```

##### Returns

`System.String`
### GetPackageRootDirectory()
获取本次构建的补丁根目录

```csharp title="Declaration"
public virtual string GetPackageRootDirectory()
```

##### Returns

`System.String`
### GetBuildinRootDirectory()
获取内置资源的根目录

```csharp title="Declaration"
public virtual string GetBuildinRootDirectory()
```

##### Returns

`System.String`
