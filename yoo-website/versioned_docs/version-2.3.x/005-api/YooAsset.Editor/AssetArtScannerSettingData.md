---
title: Class AssetArtScannerSettingData
sidebar_label: AssetArtScannerSettingData
---
# Class AssetArtScannerSettingData


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L11)
```csharp title="Declaration"
public class AssetArtScannerSettingData
```
## Properties
### IsDirty
配置数据是否被修改
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L16)
```csharp title="Declaration"
public static bool IsDirty { get; }
```
### Setting

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L24)
```csharp title="Declaration"
public static AssetArtScannerSetting Setting { get; }
```
## Methods
### SaveFile()
存储配置文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L37)
```csharp title="Declaration"
public static void SaveFile()
```
### ClearAll()
清空所有数据
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L51)
```csharp title="Declaration"
public static void ClearAll()
```
### ScanAll()
扫描所有项
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L60)
```csharp title="Declaration"
public static void ScanAll()
```
### ScanAll(string)
扫描所有项
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L75)
```csharp title="Declaration"
public static void ScanAll(string keyword)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *keyword* |

### Scan(string)
扫描单项
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L96)
```csharp title="Declaration"
public static ScannerResult Scan(string scannerGUID)
```

##### Returns

[YooAsset.Editor.ScannerResult](../YooAsset.Editor/ScannerResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *scannerGUID* |

### CreateScanner(string, string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L107)
```csharp title="Declaration"
public static AssetArtScanner CreateScanner(string name, string desc)
```

##### Returns

[YooAsset.Editor.AssetArtScanner](../YooAsset.Editor/AssetArtScanner.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *name* |
| `System.String` | *desc* |

### RemoveScanner(AssetArtScanner)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L117)
```csharp title="Declaration"
public static void RemoveScanner(AssetArtScanner scanner)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetArtScanner](../YooAsset.Editor/AssetArtScanner.md) | *scanner* |

### ModifyScanner(AssetArtScanner)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L128)
```csharp title="Declaration"
public static void ModifyScanner(AssetArtScanner scanner)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetArtScanner](../YooAsset.Editor/AssetArtScanner.md) | *scanner* |

### CreateCollector(AssetArtScanner, AssetArtCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L137)
```csharp title="Declaration"
public static void CreateCollector(AssetArtScanner scanner, AssetArtCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetArtScanner](../YooAsset.Editor/AssetArtScanner.md) | *scanner* |
| [YooAsset.Editor.AssetArtCollector](../YooAsset.Editor/AssetArtCollector.md) | *collector* |

### RemoveCollector(AssetArtScanner, AssetArtCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L142)
```csharp title="Declaration"
public static void RemoveCollector(AssetArtScanner scanner, AssetArtCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetArtScanner](../YooAsset.Editor/AssetArtScanner.md) | *scanner* |
| [YooAsset.Editor.AssetArtCollector](../YooAsset.Editor/AssetArtCollector.md) | *collector* |

### ModifyCollector(AssetArtScanner, AssetArtCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSettingData.cs#L153)
```csharp title="Declaration"
public static void ModifyCollector(AssetArtScanner scanner, AssetArtCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetArtScanner](../YooAsset.Editor/AssetArtScanner.md) | *scanner* |
| [YooAsset.Editor.AssetArtCollector](../YooAsset.Editor/AssetArtCollector.md) | *collector* |

