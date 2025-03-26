---
title: Class BuildMapContext
sidebar_label: BuildMapContext
---
# Class BuildMapContext


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L9)
```csharp title="Declaration"
public class BuildMapContext : IContextObject
```
## Properties
### Command
资源收集命令
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L30)
```csharp title="Declaration"
public CollectCommand Command { get; set; }
```
### Collection
资源包信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L35)
```csharp title="Declaration"
public Dictionary<string, BuildBundleInfo>.ValueCollection Collection { get; }
```
## Fields
### IndependAssets
未被依赖的资源列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L19)
```csharp title="Declaration"
public readonly List<ReportIndependAsset> IndependAssets
```
### AssetFileCount
参与构建的资源总数
说明：包括主动收集的资源以及其依赖的所有资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L25)
```csharp title="Declaration"
public int AssetFileCount
```
## Methods
### PackAsset(BuildAssetInfo)
添加一个打包资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L47)
```csharp title="Declaration"
public void PackAsset(BuildAssetInfo assetInfo)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildAssetInfo](../YooAsset.Editor/BuildAssetInfo.md) | *assetInfo* |

### IsContainsBundle(string)
是否包含资源包
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L68)
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
获取资源包信息，如果没找到返回NULL
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L76)
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
获取构建管线里需要的数据
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L88)
```csharp title="Declaration"
public AssetBundleBuild[] GetPipelineBuilds()
```

##### Returns

`UnityEditor.AssetBundleBuild[]`
### CreateEmptyBundleInfo(string)
创建空的资源包
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L101)
```csharp title="Declaration"
public void CreateEmptyBundleInfo(string bundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |


## Implements

* [YooAsset.Editor.IContextObject](../YooAsset.Editor/IContextObject.md)
