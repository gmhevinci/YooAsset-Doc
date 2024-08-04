---
title: Class BuildAssetInfo
sidebar_label: BuildAssetInfo
---
# Class BuildAssetInfo


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L8)
```csharp title="Declaration"
public class BuildAssetInfo
```
## Properties
### CollectorType
收集器类型
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L16)
```csharp title="Declaration"
public ECollectorType CollectorType { get; }
```
### BundleName
资源包完整名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L21)
```csharp title="Declaration"
public string BundleName { get; }
```
### Address
可寻址地址
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L26)
```csharp title="Declaration"
public string Address { get; }
```
### AssetPath
资源路径
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L31)
```csharp title="Declaration"
public string AssetPath { get; }
```
### IsRawAsset
是否为原生资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L36)
```csharp title="Declaration"
public bool IsRawAsset { get; }
```
### IsShaderAsset
是否为着色器资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L41)
```csharp title="Declaration"
public bool IsShaderAsset { get; }
```
### AllDependAssetInfos
依赖的所有资源
注意：包括零依赖资源和冗余资源（资源包名无效）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L57)
```csharp title="Declaration"
public List<BuildAssetInfo> AllDependAssetInfos { get; }
```
## Fields
### AssetTags
资源的分类标签
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L46)
```csharp title="Declaration"
public readonly List<string> AssetTags
```
### BundleTags
资源包的分类标签
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L51)
```csharp title="Declaration"
public readonly List<string> BundleTags
```
## Methods
### SetAllDependAssetInfos(List&lt;BuildAssetInfo&gt;)
设置所有依赖的资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L92)
```csharp title="Declaration"
public void SetAllDependAssetInfos(List<BuildAssetInfo> dependAssetInfos)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<YooAsset.Editor.BuildAssetInfo>` | *dependAssetInfos* |

### AddAssetTags(List&lt;string&gt;)
添加资源的分类标签
说明：原始定义的资源分类标签
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L104)
```csharp title="Declaration"
public void AddAssetTags(List<string> tags)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.String>` | *tags* |

### AddBundleTags(List&lt;string&gt;)
添加资源包的分类标签
说明：传染算法统计到的分类标签
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L123)
```csharp title="Declaration"
public void AddBundleTags(List<string> tags)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.String>` | *tags* |

### HasBundleName()
资源包名是否存在
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L137)
```csharp title="Declaration"
public bool HasBundleName()
```

##### Returns

`System.Boolean`
### AddReferenceBundleName(string)
添加关联的资源包名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L148)
```csharp title="Declaration"
public void AddReferenceBundleName(string bundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |

### CalculateShareBundleName(IShareAssetPackRule, bool, string, string)
计算共享资源包的完整包名
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildAssetInfo.cs#L160)
```csharp title="Declaration"
public void CalculateShareBundleName(IShareAssetPackRule packRule, bool uniqueBundleName, string packageName, string shadersBundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.IShareAssetPackRule](../YooAsset.Editor/IShareAssetPackRule.md) | *packRule* |
| `System.Boolean` | *uniqueBundleName* |
| `System.String` | *packageName* |
| `System.String` | *shadersBundleName* |

