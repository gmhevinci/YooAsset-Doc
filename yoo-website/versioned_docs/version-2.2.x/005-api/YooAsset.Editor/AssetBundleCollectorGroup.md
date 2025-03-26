---
title: Class AssetBundleCollectorGroup
sidebar_label: AssetBundleCollectorGroup
---
# Class AssetBundleCollectorGroup


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class AssetBundleCollectorGroup
```
## Fields
### GroupName
分组名称

```csharp title="Declaration"
public string GroupName
```
### GroupDesc
分组描述

```csharp title="Declaration"
public string GroupDesc
```
### AssetTags
资源分类标签

```csharp title="Declaration"
public string AssetTags
```
### ActiveRuleName
分组激活规则

```csharp title="Declaration"
public string ActiveRuleName
```
### Collectors
分组的收集器列表

```csharp title="Declaration"
public List<AssetBundleCollector> Collectors
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

