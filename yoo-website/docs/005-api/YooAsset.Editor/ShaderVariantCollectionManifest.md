---
title: Class ShaderVariantCollectionManifest
sidebar_label: ShaderVariantCollectionManifest
---
# Class ShaderVariantCollectionManifest


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class ShaderVariantCollectionManifest
```
## Fields
### ShaderTotalCount


```csharp title="Declaration"
public int ShaderTotalCount
```
### VariantTotalCount


```csharp title="Declaration"
public int VariantTotalCount
```
### ShaderVariantInfos


```csharp title="Declaration"
public List<ShaderVariantCollectionManifest.ShaderVariantInfo> ShaderVariantInfos
```
## Methods
### AddShaderVariant(string, string, PassType, string[])


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


```csharp title="Declaration"
public static ShaderVariantCollectionManifest Extract(ShaderVariantCollection svc)
```

##### Returns

[YooAsset.Editor.ShaderVariantCollectionManifest](../YooAsset.Editor/ShaderVariantCollectionManifest.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `UnityEngine.ShaderVariantCollection` | *svc* |

