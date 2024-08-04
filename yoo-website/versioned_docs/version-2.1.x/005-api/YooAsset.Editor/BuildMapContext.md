---
title: Class BuildMapContext
sidebar_label: BuildMapContext
---
# Class BuildMapContext


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L9)
```csharp title="Declaration"
public class BuildMapContext : IContextObject
```
## Properties
### Collection
资源包信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L37)
```csharp title="Declaration"
public Dictionary<string, BuildBundleInfo>.ValueCollection Collection { get; }
```
## Fields
### AssetFileCount
参与构建的资源总数
说明：包括主动收集的资源以及其依赖的所有资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L17)
```csharp title="Declaration"
public int AssetFileCount
```
### EnableAddressable
是否启用可寻址资源定位
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L22)
```csharp title="Declaration"
public bool EnableAddressable
```
### UniqueBundleName
资源包名唯一化
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L27)
```csharp title="Declaration"
public bool UniqueBundleName
```
### ShadersBundleName
着色器统一的全名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L32)
```csharp title="Declaration"
public string ShadersBundleName
```
## Methods
### PackAsset(BuildAssetInfo)
添加一个打包资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L49)
```csharp title="Declaration"
public void PackAsset(BuildAssetInfo assetInfo)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildAssetInfo](../YooAsset.Editor/BuildAssetInfo.md) | *assetInfo* |

### IsContainsBundle(string)
是否包含资源包
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L70)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L78)
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
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L90)
```csharp title="Declaration"
public AssetBundleBuild[] GetPipelineBuilds()
```

##### Returns

`UnityEditor.AssetBundleBuild[]`
### CreateShadersBundleInfo(string)
创建着色器信息类
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildMapContext.cs#L104)
```csharp title="Declaration"
public void CreateShadersBundleInfo(string shadersBundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *shadersBundleName* |


## Implements

* [YooAsset.Editor.IContextObject](../YooAsset.Editor/IContextObject.md)
