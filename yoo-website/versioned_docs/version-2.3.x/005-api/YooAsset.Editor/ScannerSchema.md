---
title: Class ScannerSchema
sidebar_label: ScannerSchema
---
# Class ScannerSchema


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/ScannerSchema.cs#L7)
```csharp title="Declaration"
public abstract class ScannerSchema : ScriptableObject
```
## Methods
### GetUserGuide()
获取用户指南信息
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/ScannerSchema.cs#L12)
```csharp title="Declaration"
public abstract string GetUserGuide()
```

##### Returns

`System.String`
### RunScanner(AssetArtScanner)
运行生成扫描报告
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/ScannerSchema.cs#L17)
```csharp title="Declaration"
public abstract ScanReport RunScanner(AssetArtScanner scanner)
```

##### Returns

[YooAsset.Editor.ScanReport](../YooAsset.Editor/ScanReport.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetArtScanner](../YooAsset.Editor/AssetArtScanner.md) | *scanner* |

### FixResult(List&lt;ReportElement&gt;)
修复扫描结果
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/ScannerSchema.cs#L22)
```csharp title="Declaration"
public abstract void FixResult(List<ReportElement> fixList)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<YooAsset.Editor.ReportElement>` | *fixList* |

### CreateInspector()
创建检视面板
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtScanner/ScannerSchema.cs#L27)
```csharp title="Declaration"
public virtual SchemaInspector CreateInspector()
```

##### Returns

[YooAsset.Editor.SchemaInspector](../YooAsset.Editor/SchemaInspector.md)
