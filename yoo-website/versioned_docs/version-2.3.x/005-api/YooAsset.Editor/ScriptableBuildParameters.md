---
title: Class ScriptableBuildParameters
sidebar_label: ScriptableBuildParameters
---
# Class ScriptableBuildParameters


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L10)
```csharp title="Declaration"
public class ScriptableBuildParameters : BuildParameters
```
## Fields
### CompressOption
压缩选项
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L15)
```csharp title="Declaration"
public ECompressOption CompressOption
```
### DisableWriteTypeTree
禁止写入类型树结构（可以降低包体和内存并提高加载效率）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L20)
```csharp title="Declaration"
public bool DisableWriteTypeTree
```
### IgnoreTypeTreeChanges
忽略类型树变化
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L25)
```csharp title="Declaration"
public bool IgnoreTypeTreeChanges
```
### WriteLinkXML
生成代码防裁剪配置
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L31)
```csharp title="Declaration"
public bool WriteLinkXML
```
### CacheServerHost
缓存服务器地址
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L36)
```csharp title="Declaration"
public string CacheServerHost
```
### CacheServerPort
缓存服务器端口
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L41)
```csharp title="Declaration"
public int CacheServerPort
```
### BuiltinShadersBundleName
内置着色器资源包名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L47)
```csharp title="Declaration"
public string BuiltinShadersBundleName
```
### MonoScriptsBundleName
Mono脚本资源包名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L52)
```csharp title="Declaration"
public string MonoScriptsBundleName
```
## Methods
### GetBundleBuildParameters()
获取可编程构建管线的构建参数
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildPipeline/ScriptableBuildPipeline/ScriptableBuildParameters.cs#L58)
```csharp title="Declaration"
public BundleBuildParameters GetBundleBuildParameters()
```

##### Returns

`UnityEditor.Build.Pipeline.BundleBuildParameters`
