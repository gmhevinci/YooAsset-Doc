---
title: Class BuildBundleInfo
sidebar_label: BuildBundleInfo
---
# Class BuildBundleInfo


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L9)
```csharp title="Declaration"
public class BuildBundleInfo
```
## Properties
### BundleName
资源包名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L48)
```csharp title="Declaration"
public string BundleName { get; }
```
### LoadMethod
Bundle文件的加载方法
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L64)
```csharp title="Declaration"
public EBundleLoadMethod LoadMethod { get; set; }
```
### EncryptedFilePath
加密生成文件的路径
注意：如果未加密该路径为空
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L70)
```csharp title="Declaration"
public string EncryptedFilePath { get; set; }
```
### IsRawFile
是否为原生文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L75)
```csharp title="Declaration"
public bool IsRawFile { get; }
```
### IsEncryptedFile
是否为加密文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L91)
```csharp title="Declaration"
public bool IsEncryptedFile { get; }
```
## Fields
### AllMainAssets
参与构建的资源列表
注意：不包含零依赖资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L54)
```csharp title="Declaration"
public readonly List<BuildAssetInfo> AllMainAssets
```
### BundleInfo
补丁文件信息
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L59)
```csharp title="Declaration"
public readonly BuildBundleInfo.InfoWrapper BundleInfo
```
## Methods
### PackAsset(BuildAssetInfo)
添加一个打包资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L111)
```csharp title="Declaration"
public void PackAsset(BuildAssetInfo assetInfo)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildAssetInfo](../YooAsset.Editor/BuildAssetInfo.md) | *assetInfo* |

### IsContainsAsset(string)
是否包含指定资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L122)
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
获取资源包的分类标签列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L137)
```csharp title="Declaration"
public string[] GetBundleTags()
```

##### Returns

`System.String[]`
### GetAllBuiltinAssetPaths()
获取该资源包内的所有资源（包括零依赖资源）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L154)
```csharp title="Declaration"
public List<string> GetAllBuiltinAssetPaths()
```

##### Returns

`System.Collections.Generic.List<System.String>`
### GetAllMainAssetPaths()
获取构建的资源路径列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L177)
```csharp title="Declaration"
public string[] GetAllMainAssetPaths()
```

##### Returns

`System.String[]`
### GetAllMainAssetInfos()
获取所有写入补丁清单的资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L185)
```csharp title="Declaration"
public BuildAssetInfo[] GetAllMainAssetInfos()
```

##### Returns

`YooAsset.Editor.BuildAssetInfo[]`
### CreatePipelineBuild()
创建AssetBundleBuild类
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L193)
```csharp title="Declaration"
public AssetBundleBuild CreatePipelineBuild()
```

##### Returns

`UnityEditor.AssetBundleBuild`
