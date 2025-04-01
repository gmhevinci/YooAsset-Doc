---
title: Class ScanReport
sidebar_label: ScanReport
---
# Class ScanReport


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class ScanReport
```
## Fields
### FileSign
文件签名（自动填写）

```csharp title="Declaration"
public string FileSign
```
### FileVersion
文件版本（自动填写）

```csharp title="Declaration"
public string FileVersion
```
### SchemaType
模式类型（自动填写）

```csharp title="Declaration"
public string SchemaType
```
### ScannerGUID
扫描器GUID（自动填写）

```csharp title="Declaration"
public string ScannerGUID
```
### ReportName
报告名称

```csharp title="Declaration"
public string ReportName
```
### ReportDesc
报告介绍

```csharp title="Declaration"
public string ReportDesc
```
### ReportHeaders
报告的标题列表

```csharp title="Declaration"
public List<ReportHeader> ReportHeaders
```
### ReportElements
扫描的元素列表

```csharp title="Declaration"
public List<ReportElement> ReportElements
```
## Methods
### AddHeader(string, int)
添加标题

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

```csharp title="Declaration"
public void CheckError()
```
