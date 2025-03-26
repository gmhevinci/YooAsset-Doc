---
title: Class BuildBundleInfo
sidebar_label: BuildBundleInfo
---
# Class BuildBundleInfo


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L9)
```csharp title="Declaration"
public class BuildBundleInfo
```
## Properties
### PackageUnityHash
Unity引擎生成的哈希值（构建内容的哈希值）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L15)
```csharp title="Declaration"
public string PackageUnityHash { get; set; }
```
### PackageUnityCRC
Unity引擎生成的CRC
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L20)
```csharp title="Declaration"
public uint PackageUnityCRC { get; set; }
```
### PackageFileHash
文件哈希值
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L25)
```csharp title="Declaration"
public string PackageFileHash { get; set; }
```
### PackageFileCRC
文件哈希值
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L30)
```csharp title="Declaration"
public string PackageFileCRC { get; set; }
```
### PackageFileSize
文件哈希值
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L35)
```csharp title="Declaration"
public long PackageFileSize { get; set; }
```
### BuildOutputFilePath
构建输出的文件路径
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L40)
```csharp title="Declaration"
public string BuildOutputFilePath { get; set; }
```
### PackageSourceFilePath
补丁包的源文件路径
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L45)
```csharp title="Declaration"
public string PackageSourceFilePath { get; set; }
```
### PackageDestFilePath
补丁包的目标文件路径
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L50)
```csharp title="Declaration"
public string PackageDestFilePath { get; set; }
```
### EncryptedFilePath
加密生成文件的路径
注意：如果未加密该路径为空
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L56)
```csharp title="Declaration"
public string EncryptedFilePath { get; set; }
```
### BundleName
资源包名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L70)
```csharp title="Declaration"
public string BundleName { get; }
```
### Encrypted
加密文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L75)
```csharp title="Declaration"
public bool Encrypted { get; set; }
```
## Fields
### AllPackAssets
参与构建的资源列表
注意：不包含零依赖资源和冗余资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L65)
```csharp title="Declaration"
public readonly List<BuildAssetInfo> AllPackAssets
```
## Methods
### PackAsset(BuildAssetInfo)
添加一个打包资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L86)
```csharp title="Declaration"
public void PackAsset(BuildAssetInfo buildAsset)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildAssetInfo](../YooAsset.Editor/BuildAssetInfo.md) | *buildAsset* |

### IsContainsPackAsset(string)
是否包含指定资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L99)
```csharp title="Declaration"
public bool IsContainsPackAsset(string assetPath)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetPath* |

### GetAllPackAssetPaths()
获取构建的资源路径列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L107)
```csharp title="Declaration"
public string[] GetAllPackAssetPaths()
```

##### Returns

`System.String[]`
### GetPackAssetInfo(string)
获取构建的主资源信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L115)
```csharp title="Declaration"
public BuildAssetInfo GetPackAssetInfo(string assetPath)
```

##### Returns

[YooAsset.Editor.BuildAssetInfo](../YooAsset.Editor/BuildAssetInfo.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetPath* |

### GetBundleContents()
获取资源包内部所有资产
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L130)
```csharp title="Declaration"
public List<AssetInfo> GetBundleContents()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.AssetInfo>`
### CreatePipelineBuild()
创建AssetBundleBuild类
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L156)
```csharp title="Declaration"
public AssetBundleBuild CreatePipelineBuild()
```

##### Returns

`UnityEditor.AssetBundleBuild`
### GetAllManifestAssetInfos()
获取所有写入补丁清单的资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildBundleInfo.cs#L169)
```csharp title="Declaration"
public BuildAssetInfo[] GetAllManifestAssetInfos()
```

##### Returns

`YooAsset.Editor.BuildAssetInfo[]`
