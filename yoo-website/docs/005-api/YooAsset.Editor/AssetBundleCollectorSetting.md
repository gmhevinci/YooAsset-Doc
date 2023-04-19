---
title: Class AssetBundleCollectorSetting
sidebar_label: AssetBundleCollectorSetting
---
# Class AssetBundleCollectorSetting


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class AssetBundleCollectorSetting : ScriptableObject
```
## Fields
### ShowPackageView


```csharp title="Declaration"
public bool ShowPackageView
```
### EnableAddressable


```csharp title="Declaration"
public bool EnableAddressable
```
### UniqueBundleName


```csharp title="Declaration"
public bool UniqueBundleName
```
### ShowEditorAlias


```csharp title="Declaration"
public bool ShowEditorAlias
```
### Packages


```csharp title="Declaration"
public List<AssetBundleCollectorPackage> Packages
```
## Methods
### ClearAll()


```csharp title="Declaration"
public void ClearAll()
```
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
### GetPackageAllTags(string)


```csharp title="Declaration"
public List<string> GetPackageAllTags(string packageName)
```

##### Returns

`System.Collections.Generic.List<System.String>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### GetPackageAssets(EBuildMode, string)


```csharp title="Declaration"
public CollectResult GetPackageAssets(EBuildMode buildMode, string packageName)
```

##### Returns

[YooAsset.Editor.CollectResult](../YooAsset.Editor/CollectResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.EBuildMode](../YooAsset.Editor/EBuildMode.md) | *buildMode* |
| `System.String` | *packageName* |

