---
title: Class BuildAssetInfo
sidebar_label: BuildAssetInfo
---
# Class BuildAssetInfo


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class BuildAssetInfo
```
## Properties
### CollectorType


```csharp title="Declaration"
public ECollectorType CollectorType { get; }
```
### BundleName


```csharp title="Declaration"
public string BundleName { get; }
```
### Address


```csharp title="Declaration"
public string Address { get; }
```
### AssetPath


```csharp title="Declaration"
public string AssetPath { get; }
```
### IsRawAsset


```csharp title="Declaration"
public bool IsRawAsset { get; }
```
### IsShaderAsset


```csharp title="Declaration"
public bool IsShaderAsset { get; }
```
### AllDependAssetInfos


```csharp title="Declaration"
public List<BuildAssetInfo> AllDependAssetInfos { get; }
```
## Fields
### AssetTags


```csharp title="Declaration"
public readonly List<string> AssetTags
```
### BundleTags


```csharp title="Declaration"
public readonly List<string> BundleTags
```
## Methods
### SetAllDependAssetInfos(List&lt;BuildAssetInfo&gt;)


```csharp title="Declaration"
public void SetAllDependAssetInfos(List<BuildAssetInfo> dependAssetInfos)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<YooAsset.Editor.BuildAssetInfo>` | *dependAssetInfos* |

### AddAssetTags(List&lt;string&gt;)


```csharp title="Declaration"
public void AddAssetTags(List<string> tags)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.String>` | *tags* |

### AddBundleTags(List&lt;string&gt;)


```csharp title="Declaration"
public void AddBundleTags(List<string> tags)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.String>` | *tags* |

### HasBundleName()


```csharp title="Declaration"
public bool HasBundleName()
```

##### Returns

`System.Boolean`
### AddReferenceBundleName(string)


```csharp title="Declaration"
public void AddReferenceBundleName(string bundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |

### CalculateShareBundleName(bool, string, string)


```csharp title="Declaration"
public void CalculateShareBundleName(bool uniqueBundleName, string packageName, string shadersBundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *uniqueBundleName* |
| `System.String` | *packageName* |
| `System.String` | *shadersBundleName* |

