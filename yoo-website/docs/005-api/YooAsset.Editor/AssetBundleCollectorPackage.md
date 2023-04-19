---
title: Class AssetBundleCollectorPackage
sidebar_label: AssetBundleCollectorPackage
---
# Class AssetBundleCollectorPackage


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class AssetBundleCollectorPackage
```
## Fields
### PackageName


```csharp title="Declaration"
public string PackageName
```
### PackageDesc


```csharp title="Declaration"
public string PackageDesc
```
### Groups


```csharp title="Declaration"
public List<AssetBundleCollectorGroup> Groups
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

### GetAllTags()


```csharp title="Declaration"
public List<string> GetAllTags()
```

##### Returns

`System.Collections.Generic.List<System.String>`
