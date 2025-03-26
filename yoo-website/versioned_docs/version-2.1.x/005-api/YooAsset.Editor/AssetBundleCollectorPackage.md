---
title: Class AssetBundleCollectorPackage
sidebar_label: AssetBundleCollectorPackage
---
# Class AssetBundleCollectorPackage


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class AssetBundleCollectorPackage
```
## Fields
### PackageName
包裹名称

```csharp title="Declaration"
public string PackageName
```
### PackageDesc
包裹描述

```csharp title="Declaration"
public string PackageDesc
```
### EnableAddressable
启用可寻址资源定位

```csharp title="Declaration"
public bool EnableAddressable
```
### LocationToLower
资源定位地址大小写不敏感

```csharp title="Declaration"
public bool LocationToLower
```
### IncludeAssetGUID
包含资源GUID数据

```csharp title="Declaration"
public bool IncludeAssetGUID
```
### AutoCollectShaders
自动收集所有着色器（所有着色器存储在一个资源包内）

```csharp title="Declaration"
public bool AutoCollectShaders
```
### IgnoreRuleName
资源忽略规则名

```csharp title="Declaration"
public string IgnoreRuleName
```
### Groups
分组列表

```csharp title="Declaration"
public List<AssetBundleCollectorGroup> Groups
```
## Methods
### CheckConfigError()
检测配置错误

```csharp title="Declaration"
public void CheckConfigError()
```
### FixConfigError()
修复配置错误

```csharp title="Declaration"
public bool FixConfigError()
```

##### Returns

`System.Boolean`
### GetAllCollectAssets(CollectCommand)
获取打包收集的资源文件

```csharp title="Declaration"
public List<CollectAssetInfo> GetAllCollectAssets(CollectCommand command)
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.CollectAssetInfo>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.CollectCommand](../YooAsset.Editor/CollectCommand.md) | *command* |

### GetAllTags()
获取所有的资源标签

```csharp title="Declaration"
public List<string> GetAllTags()
```

##### Returns

`System.Collections.Generic.List<System.String>`
