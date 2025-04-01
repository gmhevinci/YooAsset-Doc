---
title: Class ReportElement
sidebar_label: ReportElement
---
# Class ReportElement


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class ReportElement
```
## Properties
### IsSelected
是否在列表里选中

```csharp title="Declaration"
public bool IsSelected { get; set; }
```
### IsWhiteList
是否在白名单里

```csharp title="Declaration"
public bool IsWhiteList { get; set; }
```
### Hidden
是否隐藏元素

```csharp title="Declaration"
public bool Hidden { get; set; }
```
## Fields
### GUID
GUID（白名单存储对象）

```csharp title="Declaration"
public string GUID
```
### Passes
扫描是否通过

```csharp title="Declaration"
public bool Passes
```
### ScanInfos
反馈的信息列表

```csharp title="Declaration"
public List<ReportScanInfo> ScanInfos
```
## Methods
### AddScanInfo(string, string)
添加扫描信息

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

```csharp title="Declaration"
public ReportScanInfo GetScanInfo(string headerTitle)
```

##### Returns

[YooAsset.Editor.ReportScanInfo](../YooAsset.Editor/ReportScanInfo.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *headerTitle* |

