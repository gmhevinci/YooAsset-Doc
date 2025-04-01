---
title: Class CollectCommand
sidebar_label: CollectCommand
---
# Class CollectCommand


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class CollectCommand
```
## Properties
### PackageName
包裹名称

```csharp title="Declaration"
public string PackageName { get; }
```
### IgnoreRule
忽略规则实例

```csharp title="Declaration"
public IIgnoreRule IgnoreRule { get; }
```
### SimulateBuild
模拟构建模式

```csharp title="Declaration"
public bool SimulateBuild { get; set; }
```
### UniqueBundleName
资源包名唯一化

```csharp title="Declaration"
public bool UniqueBundleName { get; set; }
```
### UseAssetDependencyDB
使用资源依赖数据库

```csharp title="Declaration"
public bool UseAssetDependencyDB { get; set; }
```
### EnableAddressable
启用可寻址资源定位

```csharp title="Declaration"
public bool EnableAddressable { get; set; }
```
### LocationToLower
资源定位地址大小写不敏感

```csharp title="Declaration"
public bool LocationToLower { get; set; }
```
### IncludeAssetGUID
包含资源GUID数据

```csharp title="Declaration"
public bool IncludeAssetGUID { get; set; }
```
### AutoCollectShaders
自动收集所有着色器

```csharp title="Declaration"
public bool AutoCollectShaders { get; set; }
```
### AssetDependency


```csharp title="Declaration"
public AssetDependencyCache AssetDependency { get; }
```
