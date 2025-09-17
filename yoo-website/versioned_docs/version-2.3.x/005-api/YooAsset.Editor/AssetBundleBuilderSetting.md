---
title: Class AssetBundleBuilderSetting
sidebar_label: AssetBundleBuilderSetting
---
# Class AssetBundleBuilderSetting


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public static class AssetBundleBuilderSetting
```
## Methods
### GetPackageBuildPipeline(string)


```csharp title="Declaration"
public static string GetPackageBuildPipeline(string packageName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### SetPackageBuildPipeline(string, string)


```csharp title="Declaration"
public static void SetPackageBuildPipeline(string packageName, string buildPipeline)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### GetPackageCompressOption(string, string)


```csharp title="Declaration"
public static ECompressOption GetPackageCompressOption(string packageName, string buildPipeline)
```

##### Returns

[YooAsset.Editor.ECompressOption](../YooAsset.Editor/ECompressOption.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageCompressOption(string, string, ECompressOption)


```csharp title="Declaration"
public static void SetPackageCompressOption(string packageName, string buildPipeline, ECompressOption compressOption)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| [YooAsset.Editor.ECompressOption](../YooAsset.Editor/ECompressOption.md) | *compressOption* |

### GetPackageFileNameStyle(string, string)


```csharp title="Declaration"
public static EFileNameStyle GetPackageFileNameStyle(string packageName, string buildPipeline)
```

##### Returns

[YooAsset.EFileNameStyle](../YooAsset/EFileNameStyle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageFileNameStyle(string, string, EFileNameStyle)


```csharp title="Declaration"
public static void SetPackageFileNameStyle(string packageName, string buildPipeline, EFileNameStyle fileNameStyle)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| [YooAsset.EFileNameStyle](../YooAsset/EFileNameStyle.md) | *fileNameStyle* |

### GetPackageBuildinFileCopyOption(string, string)


```csharp title="Declaration"
public static EBuildinFileCopyOption GetPackageBuildinFileCopyOption(string packageName, string buildPipeline)
```

##### Returns

[YooAsset.Editor.EBuildinFileCopyOption](../YooAsset.Editor/EBuildinFileCopyOption.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageBuildinFileCopyOption(string, string, EBuildinFileCopyOption)


```csharp title="Declaration"
public static void SetPackageBuildinFileCopyOption(string packageName, string buildPipeline, EBuildinFileCopyOption buildinFileCopyOption)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| [YooAsset.Editor.EBuildinFileCopyOption](../YooAsset.Editor/EBuildinFileCopyOption.md) | *buildinFileCopyOption* |

### GetPackageBuildinFileCopyParams(string, string)


```csharp title="Declaration"
public static string GetPackageBuildinFileCopyParams(string packageName, string buildPipeline)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageBuildinFileCopyParams(string, string, string)


```csharp title="Declaration"
public static void SetPackageBuildinFileCopyParams(string packageName, string buildPipeline, string buildinFileCopyParams)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| `System.String` | *buildinFileCopyParams* |

### GetPackageEncyptionServicesClassName(string, string)


```csharp title="Declaration"
public static string GetPackageEncyptionServicesClassName(string packageName, string buildPipeline)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageEncyptionServicesClassName(string, string, string)


```csharp title="Declaration"
public static void SetPackageEncyptionServicesClassName(string packageName, string buildPipeline, string encyptionClassName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| `System.String` | *encyptionClassName* |

### GetPackageManifestProcessServicesClassName(string, string)


```csharp title="Declaration"
public static string GetPackageManifestProcessServicesClassName(string packageName, string buildPipeline)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageManifestProcessServicesClassName(string, string, string)


```csharp title="Declaration"
public static void SetPackageManifestProcessServicesClassName(string packageName, string buildPipeline, string encyptionClassName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| `System.String` | *encyptionClassName* |

### GetPackageManifestRestoreServicesClassName(string, string)


```csharp title="Declaration"
public static string GetPackageManifestRestoreServicesClassName(string packageName, string buildPipeline)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageManifestRestoreServicesClassName(string, string, string)


```csharp title="Declaration"
public static void SetPackageManifestRestoreServicesClassName(string packageName, string buildPipeline, string encyptionClassName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| `System.String` | *encyptionClassName* |

### GetPackageClearBuildCache(string, string)


```csharp title="Declaration"
public static bool GetPackageClearBuildCache(string packageName, string buildPipeline)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageClearBuildCache(string, string, bool)


```csharp title="Declaration"
public static void SetPackageClearBuildCache(string packageName, string buildPipeline, bool clearBuildCache)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| `System.Boolean` | *clearBuildCache* |

### GetPackageUseAssetDependencyDB(string, string)


```csharp title="Declaration"
public static bool GetPackageUseAssetDependencyDB(string packageName, string buildPipeline)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |

### SetPackageUseAssetDependencyDB(string, string, bool)


```csharp title="Declaration"
public static void SetPackageUseAssetDependencyDB(string packageName, string buildPipeline, bool useAssetDependencyDB)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *buildPipeline* |
| `System.Boolean` | *useAssetDependencyDB* |

