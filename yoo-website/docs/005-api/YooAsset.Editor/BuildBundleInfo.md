---
title: Class BuildBundleInfo
sidebar_label: BuildBundleInfo
---
# Class BuildBundleInfo


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class BuildBundleInfo
```
## Properties
### BundleName


```csharp title="Declaration"
public string BundleName { get; }
```
### LoadMethod


```csharp title="Declaration"
public EBundleLoadMethod LoadMethod { get; set; }
```
### EncryptedFilePath


```csharp title="Declaration"
public string EncryptedFilePath { get; set; }
```
### IsRawFile


```csharp title="Declaration"
public bool IsRawFile { get; }
```
### IsEncryptedFile


```csharp title="Declaration"
public bool IsEncryptedFile { get; }
```
## Fields
### AllMainAssets


```csharp title="Declaration"
public readonly List<BuildAssetInfo> AllMainAssets
```
### BundleInfo


```csharp title="Declaration"
public readonly BuildBundleInfo.InfoWrapper BundleInfo
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

### IsContainsAsset(string)


```csharp title="Declaration"
public bool IsContainsAsset(string assetPath)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetPath* |

### GetBundleTags()


```csharp title="Declaration"
public string[] GetBundleTags()
```

##### Returns

`System.String[]`
### GetAllBuiltinAssetPaths()


```csharp title="Declaration"
public List<string> GetAllBuiltinAssetPaths()
```

##### Returns

`System.Collections.Generic.List<System.String>`
### GetAllMainAssetPaths()


```csharp title="Declaration"
public string[] GetAllMainAssetPaths()
```

##### Returns

`System.String[]`
### GetAllMainAssetInfos()


```csharp title="Declaration"
public BuildAssetInfo[] GetAllMainAssetInfos()
```

##### Returns

`YooAsset.Editor.BuildAssetInfo[]`
### CreatePipelineBuild()


```csharp title="Declaration"
public AssetBundleBuild CreatePipelineBuild()
```

##### Returns

`UnityEditor.AssetBundleBuild`
