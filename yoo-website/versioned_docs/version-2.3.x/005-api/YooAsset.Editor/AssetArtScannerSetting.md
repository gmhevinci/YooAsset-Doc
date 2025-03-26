---
title: Class AssetArtScannerSetting
sidebar_label: AssetArtScannerSetting
---
# Class AssetArtScannerSetting


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSetting.cs#L11)
```csharp title="Declaration"
public class AssetArtScannerSetting : ScriptableObject
```
## Fields
### Scanners
扫描器列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSetting.cs#L16)
```csharp title="Declaration"
public List<AssetArtScanner> Scanners
```
## Methods
### BeginScan(string)
开始扫描
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSetting.cs#L21)
```csharp title="Declaration"
public ScannerResult BeginScan(string scannerGUID)
```

##### Returns

[YooAsset.Editor.ScannerResult](../YooAsset.Editor/ScannerResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *scannerGUID* |

### GetScanner(string)
获取指定的扫描器
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/AssetArtScannerSetting.cs#L56)
```csharp title="Declaration"
public AssetArtScanner GetScanner(string scannerGUID)
```

##### Returns

[YooAsset.Editor.AssetArtScanner](../YooAsset.Editor/AssetArtScanner.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *scannerGUID* |

