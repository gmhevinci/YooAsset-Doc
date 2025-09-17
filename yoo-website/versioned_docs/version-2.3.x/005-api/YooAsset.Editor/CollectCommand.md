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
public bool SimulateBuild { set; }
```
### CollectFlags
窗口收集模式

```csharp title="Declaration"
public int CollectFlags { get; set; }
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
### SupportExtensionless
支持无后缀名的资源定位地址

```csharp title="Declaration"
public bool SupportExtensionless { get; set; }
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
## Methods
### SetFlag(ECollectFlags, bool)
设置标记位

```csharp title="Declaration"
public void SetFlag(ECollectFlags flag, bool isOn)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.ECollectFlags](../YooAsset.Editor/ECollectFlags.md) | *flag* |
| `System.Boolean` | *isOn* |

### IsFlagSet(ECollectFlags)
查询标记位

```csharp title="Declaration"
public bool IsFlagSet(ECollectFlags flag)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.ECollectFlags](../YooAsset.Editor/ECollectFlags.md) | *flag* |

