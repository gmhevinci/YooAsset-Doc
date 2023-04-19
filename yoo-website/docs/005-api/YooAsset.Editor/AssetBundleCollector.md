---
title: Class AssetBundleCollector
sidebar_label: AssetBundleCollector
---
# Class AssetBundleCollector


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class AssetBundleCollector
```
## Fields
### CollectPath


```csharp title="Declaration"
public string CollectPath
```
### CollectorGUID


```csharp title="Declaration"
public string CollectorGUID
```
### CollectorType


```csharp title="Declaration"
public ECollectorType CollectorType
```
### AddressRuleName


```csharp title="Declaration"
public string AddressRuleName
```
### PackRuleName


```csharp title="Declaration"
public string PackRuleName
```
### FilterRuleName


```csharp title="Declaration"
public string FilterRuleName
```
### AssetTags


```csharp title="Declaration"
public string AssetTags
```
### UserData


```csharp title="Declaration"
public string UserData
```
## Methods
### IsValid()


```csharp title="Declaration"
public bool IsValid()
```

##### Returns

`System.Boolean`
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
### GetAllCollectAssets(CollectCommand, AssetBundleCollectorGroup)


```csharp title="Declaration"
public List<CollectAssetInfo> GetAllCollectAssets(CollectCommand command, AssetBundleCollectorGroup group)
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.CollectAssetInfo>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.CollectCommand](../YooAsset.Editor/CollectCommand.md) | *command* |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |

