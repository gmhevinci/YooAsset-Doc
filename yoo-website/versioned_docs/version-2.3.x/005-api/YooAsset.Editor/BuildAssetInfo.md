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
收集器类型

```csharp title="Declaration"
public ECollectorType CollectorType { get; }
```
### BundleName
资源包完整名称

```csharp title="Declaration"
public string BundleName { get; }
```
### Address
可寻址地址

```csharp title="Declaration"
public string Address { get; }
```
### AssetInfo
资源信息

```csharp title="Declaration"
public AssetInfo AssetInfo { get; }
```
### AllDependAssetInfos
依赖的所有资源
注意：包括零依赖资源和冗余资源（资源包名无效）

```csharp title="Declaration"
public List<BuildAssetInfo> AllDependAssetInfos { get; }
```
## Fields
### AssetTags
资源的分类标签

```csharp title="Declaration"
public readonly List<string> AssetTags
```
## Methods
### SetDependAssetInfos(List&lt;BuildAssetInfo&gt;)
设置所有依赖的资源

```csharp title="Declaration"
public void SetDependAssetInfos(List<BuildAssetInfo> dependAssetInfos)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<YooAsset.Editor.BuildAssetInfo>` | *dependAssetInfos* |

### SetBundleName(string)
设置资源包名称

```csharp title="Declaration"
public void SetBundleName(string bundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |

### AddAssetTags(List&lt;string&gt;)
添加资源的分类标签
说明：原始定义的资源分类标签

```csharp title="Declaration"
public void AddAssetTags(List<string> tags)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.String>` | *tags* |

### AddReferenceBundleName(string)
添加关联的资源包名称

```csharp title="Declaration"
public void AddReferenceBundleName(string bundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *bundleName* |

### HasBundleName()
资源包名是否存在

```csharp title="Declaration"
public bool HasBundleName()
```

##### Returns

`System.Boolean`
### GetReferenceBundleCount()
获取关联资源包的数量

```csharp title="Declaration"
public int GetReferenceBundleCount()
```

##### Returns

`System.Int32`
