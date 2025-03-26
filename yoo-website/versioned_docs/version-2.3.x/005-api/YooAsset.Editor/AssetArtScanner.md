---
title: Class AssetArtScanner
sidebar_label: AssetArtScanner
---
# Class AssetArtScanner


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L10)
```csharp title="Declaration"
[Serializable]
public class AssetArtScanner
```
## Fields
### ScannerGUID
扫描器GUID
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L16)
```csharp title="Declaration"
public string ScannerGUID
```
### ScannerName
扫描器名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L21)
```csharp title="Declaration"
public string ScannerName
```
### ScannerDesc
扫描器描述
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L26)
```csharp title="Declaration"
public string ScannerDesc
```
### ScannerSchema
扫描模式
注意：文件路径或文件GUID
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L32)
```csharp title="Declaration"
public string ScannerSchema
```
### SaveDirectory
存储目录
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L37)
```csharp title="Declaration"
public string SaveDirectory
```
### Collectors
收集列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L42)
```csharp title="Declaration"
public List<AssetArtCollector> Collectors
```
### WhiteList
白名单
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L47)
```csharp title="Declaration"
public List<string> WhiteList
```
## Methods
### CheckKeyword(string)
检测关键字匹配
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L53)
```csharp title="Declaration"
public bool CheckKeyword(string keyword)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *keyword* |

### CheckWhiteList(string)
是否在白名单里
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L64)
```csharp title="Declaration"
public bool CheckWhiteList(string guid)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *guid* |

### CheckConfigError()
检测配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L72)
```csharp title="Declaration"
public void CheckConfigError()
```
### LoadSchema()
加载扫描模式实例
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L90)
```csharp title="Declaration"
public ScannerSchema LoadSchema()
```

##### Returns

[YooAsset.Editor.ScannerSchema](../YooAsset.Editor/ScannerSchema.md)
### RunScanner()
运行扫描器生成报告类
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScanner.cs#L115)
```csharp title="Declaration"
public ScanReport RunScanner()
```

##### Returns

[YooAsset.Editor.ScanReport](../YooAsset.Editor/ScanReport.md)
