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
### BuildMode
构建模式

```csharp title="Declaration"
public EBuildMode BuildMode { get; }
```
### PackageName
包裹名称

```csharp title="Declaration"
public string PackageName { get; }
```
### EnableAddressable
启用可寻址资源定位

```csharp title="Declaration"
public bool EnableAddressable { get; }
```
### LocationToLower
资源定位地址大小写不敏感

```csharp title="Declaration"
public bool LocationToLower { get; }
```
### IncludeAssetGUID
包含资源GUID数据

```csharp title="Declaration"
public bool IncludeAssetGUID { get; }
```
### AutoCollectShaders
自动收集所有着色器

```csharp title="Declaration"
public bool AutoCollectShaders { get; }
```
### UniqueBundleName
资源包名唯一化

```csharp title="Declaration"
public bool UniqueBundleName { get; }
```
### ShadersBundleName
着色器统一全名称

```csharp title="Declaration"
public string ShadersBundleName { get; }
```
### IgnoreRule
忽略规则实例

```csharp title="Declaration"
public IIgnoreRule IgnoreRule { get; }
```
