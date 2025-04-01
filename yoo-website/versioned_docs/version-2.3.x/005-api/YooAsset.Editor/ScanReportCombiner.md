---
title: Class ScanReportCombiner
sidebar_label: ScanReportCombiner
description: "资源扫描报告合并器
说明：相同类型的报告可以合并查看"
---
# Class ScanReportCombiner
资源扫描报告合并器
说明：相同类型的报告可以合并查看

###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class ScanReportCombiner
```
## Properties
### SchemaType
模式类型

```csharp title="Declaration"
public string SchemaType { get; }
```
### ReportTitle
报告标题

```csharp title="Declaration"
public string ReportTitle { get; }
```
### ReportDesc
报告介绍

```csharp title="Declaration"
public string ReportDesc { get; }
```
## Fields
### Headers
标题列表

```csharp title="Declaration"
public List<ReportHeader> Headers
```
### Elements
扫描结果

```csharp title="Declaration"
public readonly List<ReportElement> Elements
```
## Methods
### Combine(ScanReport)
合并报告文件
注意：模式不同的报告文件会合并失败！

```csharp title="Declaration"
public bool Combine(ScanReport scanReport)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.ScanReport](../YooAsset.Editor/ScanReport.md) | *scanReport* |

### GetHeader(string)
获取指定的标题类

```csharp title="Declaration"
public ReportHeader GetHeader(string headerTitle)
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *headerTitle* |

### ExportFiles(string)
导出选中文件

```csharp title="Declaration"
public void ExportFiles(string exportFolderPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *exportFolderPath* |

### SaveChange()
保存改变数据

```csharp title="Declaration"
public void SaveChange()
```
### FixAll()
修复所有元素
注意：排除白名单和隐藏元素

```csharp title="Declaration"
public void FixAll()
```
### FixSelect()
修复选定元素
注意：包含白名单和隐藏元素

```csharp title="Declaration"
public void FixSelect()
```
