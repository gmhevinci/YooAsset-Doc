---
title: Class ShaderVariantCollectionManifest
sidebar_label: ShaderVariantCollectionManifest
---
# Class ShaderVariantCollectionManifest


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/ShaderVariantCollector/ShaderVariantCollectionManifest.cs#L12)
```csharp title="Declaration"
[Serializable]
public class ShaderVariantCollectionManifest
```
## Fields
### ShaderTotalCount
Number of shaders in this collection
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/ShaderVariantCollector/ShaderVariantCollectionManifest.cs#L52)
```csharp title="Declaration"
public int ShaderTotalCount
```
### VariantTotalCount
Number of total varians in this collection
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/ShaderVariantCollector/ShaderVariantCollectionManifest.cs#L57)
```csharp title="Declaration"
public int VariantTotalCount
```
### ShaderVariantInfos
Shader variants info list.
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/ShaderVariantCollector/ShaderVariantCollectionManifest.cs#L62)
```csharp title="Declaration"
public List<ShaderVariantCollectionManifest.ShaderVariantInfo> ShaderVariantInfos
```
## Methods
### AddShaderVariant(string, string, PassType, string[])
添加着色器变种信息
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/ShaderVariantCollector/ShaderVariantCollectionManifest.cs#L67)
```csharp title="Declaration"
public void AddShaderVariant(string assetPath, string shaderName, PassType passType, string[] keywords)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetPath* |
| `System.String` | *shaderName* |
| `UnityEngine.Rendering.PassType` | *passType* |
| `System.String[]` | *keywords* |

### Extract(ShaderVariantCollection)
解析SVC文件并将数据写入到清单
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/ShaderVariantCollector/ShaderVariantCollectionManifest.cs#L97)
```csharp title="Declaration"
public static ShaderVariantCollectionManifest Extract(ShaderVariantCollection svc)
```

##### Returns

[YooAsset.Editor.ShaderVariantCollectionManifest](../YooAsset.Editor/ShaderVariantCollectionManifest.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.ShaderVariantCollection` | *svc* |

