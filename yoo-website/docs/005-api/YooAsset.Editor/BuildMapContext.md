---
title: Class BuildMapContext
sidebar_label: BuildMapContext
---
# Class BuildMapContext


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class BuildMapContext : IContextObject
```
## Properties
### Collection


```csharp title="Declaration"
public Dictionary<string, BuildBundleInfo>.ValueCollection Collection { get; }
```
## Fields
### AssetFileCount


```csharp title="Declaration"
public int AssetFileCount
```
### EnableAddressable


```csharp title="Declaration"
public bool EnableAddressable
```
### UniqueBundleName


```csharp title="Declaration"
public bool UniqueBundleName
```
### ShadersBundleName


```csharp title="Declaration"
public string ShadersBundleName
```
## Methods
### PackAsset(BuildAssetInfo)


```csharp title="Declaration"
public void PackAsset(BuildAssetInfo assetInfo)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildAssetInfo](../YooAsset.Editor/BuildAssetInfo.md) | *assetInfo* |

### IsContainsBundle(string)


```csharp title="Declaration"
public bool IsContainsBundle(string bundleName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |

### GetBundleInfo(string)


```csharp title="Declaration"
public BuildBundleInfo GetBundleInfo(string bundleName)
```

##### Returns

[YooAsset.Editor.BuildBundleInfo](../YooAsset.Editor/BuildBundleInfo.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |

### GetPipelineBuilds()


```csharp title="Declaration"
public AssetBundleBuild[] GetPipelineBuilds()
```

##### Returns

`UnityEditor.AssetBundleBuild[]`
### CreateShadersBundleInfo(string)


```csharp title="Declaration"
public void CreateShadersBundleInfo(string shadersBundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *shadersBundleName* |


## Implements

* [YooAsset.Editor.IContextObject](../YooAsset.Editor/IContextObject.md)
