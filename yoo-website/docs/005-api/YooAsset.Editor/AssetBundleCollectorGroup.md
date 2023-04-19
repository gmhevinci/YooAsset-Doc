---
title: Class AssetBundleCollectorGroup
sidebar_label: AssetBundleCollectorGroup
---
# Class AssetBundleCollectorGroup


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class AssetBundleCollectorGroup
```
## Fields
### GroupName


```csharp title="Declaration"
public string GroupName
```
### GroupDesc


```csharp title="Declaration"
public string GroupDesc
```
### AssetTags


```csharp title="Declaration"
public string AssetTags
```
### ActiveRuleName


```csharp title="Declaration"
public string ActiveRuleName
```
### Collectors


```csharp title="Declaration"
public List<AssetBundleCollector> Collectors
```
## Methods
### CheckConfigError()


```csharp title="Declaration"
public void CheckConfigError()
```
### FixConfigError()


```csharp title="Declaration"
public bool FixConfigError()
```

##### Returns

`System.Boolean`
### GetAllCollectAssets(CollectCommand)


```csharp title="Declaration"
public List<CollectAssetInfo> GetAllCollectAssets(CollectCommand command)
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.CollectAssetInfo>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.CollectCommand](../YooAsset.Editor/CollectCommand.md) | *command* |

