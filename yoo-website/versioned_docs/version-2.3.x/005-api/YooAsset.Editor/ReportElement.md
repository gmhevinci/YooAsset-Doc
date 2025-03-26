---
title: Class ReportElement
sidebar_label: ReportElement
---
# Class ReportElement


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L7)
```csharp title="Declaration"
[Serializable]
public class ReportElement
```
## Properties
### IsSelected
是否在列表里选中
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L75)
```csharp title="Declaration"
public bool IsSelected { get; set; }
```
### IsWhiteList
是否在白名单里
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L80)
```csharp title="Declaration"
public bool IsWhiteList { get; set; }
```
### Hidden
是否隐藏元素
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L85)
```csharp title="Declaration"
public bool Hidden { get; set; }
```
## Fields
### GUID
GUID（白名单存储对象）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L13)
```csharp title="Declaration"
public string GUID
```
### Passes
扫描是否通过
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L18)
```csharp title="Declaration"
public bool Passes
```
### ScanInfos
反馈的信息列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L23)
```csharp title="Declaration"
public List<ReportScanInfo> ScanInfos
```
## Methods
### AddScanInfo(string, string)
添加扫描信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L34)
```csharp title="Declaration"
public void AddScanInfo(string headerTitle, string value)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *headerTitle* |
| `System.String` | *value* |

### AddScanInfo(string, long)
添加扫描信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L43)
```csharp title="Declaration"
public void AddScanInfo(string headerTitle, long value)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *headerTitle* |
| `System.Int64` | *value* |

### AddScanInfo(string, double)
添加扫描信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L51)
```csharp title="Declaration"
public void AddScanInfo(string headerTitle, double value)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *headerTitle* |
| `System.Double` | *value* |

### GetScanInfo(string)
获取扫描信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportElement.cs#L59)
```csharp title="Declaration"
public ReportScanInfo GetScanInfo(string headerTitle)
```

##### Returns

[YooAsset.Editor.ReportScanInfo](../YooAsset.Editor/ReportScanInfo.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *headerTitle* |

