---
title: Class CollectCommand
sidebar_label: CollectCommand
---
# Class CollectCommand


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L4)
```csharp title="Declaration"
public class CollectCommand
```
## Properties
### PackageName
包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L9)
```csharp title="Declaration"
public string PackageName { get; }
```
### IgnoreRule
忽略规则实例
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L14)
```csharp title="Declaration"
public IIgnoreRule IgnoreRule { get; }
```
### SimulateBuild
模拟构建模式
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L20)
```csharp title="Declaration"
public bool SimulateBuild { get; set; }
```
### UniqueBundleName
资源包名唯一化
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L25)
```csharp title="Declaration"
public bool UniqueBundleName { get; set; }
```
### UseAssetDependencyDB
使用资源依赖数据库
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L30)
```csharp title="Declaration"
public bool UseAssetDependencyDB { get; set; }
```
### EnableAddressable
启用可寻址资源定位
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L35)
```csharp title="Declaration"
public bool EnableAddressable { get; set; }
```
### LocationToLower
资源定位地址大小写不敏感
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L40)
```csharp title="Declaration"
public bool LocationToLower { get; set; }
```
### IncludeAssetGUID
包含资源GUID数据
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L45)
```csharp title="Declaration"
public bool IncludeAssetGUID { get; set; }
```
### AutoCollectShaders
自动收集所有着色器
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L50)
```csharp title="Declaration"
public bool AutoCollectShaders { get; set; }
```
### AssetDependency

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectCommand.cs#L53)
```csharp title="Declaration"
public AssetDependencyCache AssetDependency { get; }
```
