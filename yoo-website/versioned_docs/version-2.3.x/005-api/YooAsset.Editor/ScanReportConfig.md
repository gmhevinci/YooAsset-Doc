---
title: Class ScanReportConfig
sidebar_label: ScanReportConfig
---
# Class ScanReportConfig


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class ScanReportConfig
```
## Methods
### ImportJsonConfig(string)
导入JSON报告文件

```csharp title="Declaration"
public static ScanReport ImportJsonConfig(string filePath)
```

##### Returns

[YooAsset.Editor.ScanReport](../YooAsset.Editor/ScanReport.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### ExportJsonConfig(string, ScanReport)
导出JSON报告文件

```csharp title="Declaration"
public static void ExportJsonConfig(string savePath, ScanReport scanReport)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *savePath* |
| [YooAsset.Editor.ScanReport](../YooAsset.Editor/ScanReport.md) | *scanReport* |

