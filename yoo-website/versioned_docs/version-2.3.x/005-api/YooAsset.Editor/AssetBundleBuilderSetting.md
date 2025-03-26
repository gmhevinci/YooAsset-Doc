---
title: Class AssetBundleBuilderSetting
sidebar_label: AssetBundleBuilderSetting
---
# Class AssetBundleBuilderSetting


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L7)
```csharp title="Declaration"
public static class AssetBundleBuilderSetting
```
## Methods
### GetPackageBuildPipeline(string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L10)
```csharp title="Declaration"
public static EBuildPipeline GetPackageBuildPipeline(string packageName)
```

##### Returns

[YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### SetPackageBuildPipeline(string, EBuildPipeline)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L15)
```csharp title="Declaration"
public static void SetPackageBuildPipeline(string packageName, EBuildPipeline buildPipeline)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |

### GetPackageCompressOption(string, EBuildPipeline)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L22)
```csharp title="Declaration"
public static ECompressOption GetPackageCompressOption(string packageName, EBuildPipeline buildPipeline)
```

##### Returns

[YooAsset.Editor.ECompressOption](../YooAsset.Editor/ECompressOption.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |

### SetPackageCompressOption(string, EBuildPipeline, ECompressOption)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L27)
```csharp title="Declaration"
public static void SetPackageCompressOption(string packageName, EBuildPipeline buildPipeline, ECompressOption compressOption)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |
| [YooAsset.Editor.ECompressOption](../YooAsset.Editor/ECompressOption.md) | *compressOption* |

### GetPackageFileNameStyle(string, EBuildPipeline)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L34)
```csharp title="Declaration"
public static EFileNameStyle GetPackageFileNameStyle(string packageName, EBuildPipeline buildPipeline)
```

##### Returns

[YooAsset.Editor.EFileNameStyle](../YooAsset.Editor/EFileNameStyle.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |

### SetPackageFileNameStyle(string, EBuildPipeline, EFileNameStyle)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L39)
```csharp title="Declaration"
public static void SetPackageFileNameStyle(string packageName, EBuildPipeline buildPipeline, EFileNameStyle fileNameStyle)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |
| [YooAsset.Editor.EFileNameStyle](../YooAsset.Editor/EFileNameStyle.md) | *fileNameStyle* |

### GetPackageBuildinFileCopyOption(string, EBuildPipeline)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L46)
```csharp title="Declaration"
public static EBuildinFileCopyOption GetPackageBuildinFileCopyOption(string packageName, EBuildPipeline buildPipeline)
```

##### Returns

[YooAsset.Editor.EBuildinFileCopyOption](../YooAsset.Editor/EBuildinFileCopyOption.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |

### SetPackageBuildinFileCopyOption(string, EBuildPipeline, EBuildinFileCopyOption)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L51)
```csharp title="Declaration"
public static void SetPackageBuildinFileCopyOption(string packageName, EBuildPipeline buildPipeline, EBuildinFileCopyOption buildinFileCopyOption)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |
| [YooAsset.Editor.EBuildinFileCopyOption](../YooAsset.Editor/EBuildinFileCopyOption.md) | *buildinFileCopyOption* |

### GetPackageBuildinFileCopyParams(string, EBuildPipeline)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L58)
```csharp title="Declaration"
public static string GetPackageBuildinFileCopyParams(string packageName, EBuildPipeline buildPipeline)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |

### SetPackageBuildinFileCopyParams(string, EBuildPipeline, string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L63)
```csharp title="Declaration"
public static void SetPackageBuildinFileCopyParams(string packageName, EBuildPipeline buildPipeline, string buildinFileCopyParams)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |
| `System.String` | *buildinFileCopyParams* |

### GetPackageEncyptionClassName(string, EBuildPipeline)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L70)
```csharp title="Declaration"
public static string GetPackageEncyptionClassName(string packageName, EBuildPipeline buildPipeline)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |

### SetPackageEncyptionClassName(string, EBuildPipeline, string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L75)
```csharp title="Declaration"
public static void SetPackageEncyptionClassName(string packageName, EBuildPipeline buildPipeline, string encyptionClassName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |
| `System.String` | *encyptionClassName* |

### GetPackageClearBuildCache(string, EBuildPipeline)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L82)
```csharp title="Declaration"
public static bool GetPackageClearBuildCache(string packageName, EBuildPipeline buildPipeline)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |

### SetPackageClearBuildCache(string, EBuildPipeline, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L87)
```csharp title="Declaration"
public static void SetPackageClearBuildCache(string packageName, EBuildPipeline buildPipeline, bool clearBuildCache)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |
| `System.Boolean` | *clearBuildCache* |

### GetPackageUseAssetDependencyDB(string, EBuildPipeline)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L94)
```csharp title="Declaration"
public static bool GetPackageUseAssetDependencyDB(string packageName, EBuildPipeline buildPipeline)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |

### SetPackageUseAssetDependencyDB(string, EBuildPipeline, bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderSetting.cs#L99)
```csharp title="Declaration"
public static void SetPackageUseAssetDependencyDB(string packageName, EBuildPipeline buildPipeline, bool useAssetDependencyDB)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| [YooAsset.Editor.EBuildPipeline](../YooAsset.Editor/EBuildPipeline.md) | *buildPipeline* |
| `System.Boolean` | *useAssetDependencyDB* |

