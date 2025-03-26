---
title: Class ScanReport
sidebar_label: ScanReport
---
# Class ScanReport


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L7)
```csharp title="Declaration"
[Serializable]
public class ScanReport
```
## Fields
### FileSign
文件签名（自动填写）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L13)
```csharp title="Declaration"
public string FileSign
```
### FileVersion
文件版本（自动填写）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L18)
```csharp title="Declaration"
public string FileVersion
```
### SchemaType
模式类型（自动填写）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L23)
```csharp title="Declaration"
public string SchemaType
```
### ScannerGUID
扫描器GUID（自动填写）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L28)
```csharp title="Declaration"
public string ScannerGUID
```
### ReportName
报告名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L34)
```csharp title="Declaration"
public string ReportName
```
### ReportDesc
报告介绍
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L39)
```csharp title="Declaration"
public string ReportDesc
```
### ReportHeaders
报告的标题列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L44)
```csharp title="Declaration"
public List<ReportHeader> ReportHeaders
```
### ReportElements
扫描的元素列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L49)
```csharp title="Declaration"
public List<ReportElement> ReportElements
```
## Methods
### AddHeader(string, int)
添加标题
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L61)
```csharp title="Declaration"
public ReportHeader AddHeader(string headerTitle, int width)
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *headerTitle* |
| `System.Int32` | *width* |

### AddHeader(string, int, int, int)
添加标题
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L71)
```csharp title="Declaration"
public ReportHeader AddHeader(string headerTitle, int width, int minWidth, int maxWidth)
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *headerTitle* |
| `System.Int32` | *width* |
| `System.Int32` | *minWidth* |
| `System.Int32` | *maxWidth* |

### CheckError()
检测错误
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ScanReport.cs#L81)
```csharp title="Declaration"
public void CheckError()
```
