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
### Command
资源收集命令

```csharp title="Declaration"
public CollectCommand Command { get; set; }
```
### Collection
资源包信息列表

```csharp title="Declaration"
public Dictionary<string, BuildBundleInfo>.ValueCollection Collection { get; }
```
## Fields
### IndependAssets
未被依赖的资源列表

```csharp title="Declaration"
public readonly List<ReportIndependAsset> IndependAssets
```
### AssetFileCount
参与构建的资源总数
说明：包括主动收集的资源以及其依赖的所有资源

```csharp title="Declaration"
public int AssetFileCount
```
## Methods
### PackAsset(BuildAssetInfo)
添加一个打包资源

```csharp title="Declaration"
public void PackAsset(BuildAssetInfo assetInfo)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildAssetInfo](../YooAsset.Editor/BuildAssetInfo.md) | *assetInfo* |

### IsContainsBundle(string)
是否包含资源包

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

```csharp title="Declaration"
public AssetBundleBuild[] GetPipelineBuilds()
```

##### Returns

`UnityEditor.AssetBundleBuild[]`
### CreateEmptyBundleInfo(string)
创建空的资源包

```csharp title="Declaration"
public void CreateEmptyBundleInfo(string bundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |


## Implements

* [YooAsset.Editor.IContextObject](../YooAsset.Editor/IContextObject.md)
