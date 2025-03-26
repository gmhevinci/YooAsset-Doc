---
title: Class ReportHeader
sidebar_label: ReportHeader
---
# Class ReportHeader


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L6)
```csharp title="Declaration"
[Serializable]
public class ReportHeader
```
## Fields
### MaxValue

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L9)
```csharp title="Declaration"
public const int MaxValue = 8388608
```
### HeaderTitle
标题
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L14)
```csharp title="Declaration"
public string HeaderTitle
```
### Width
标题宽度
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L19)
```csharp title="Declaration"
public int Width
```
### MinWidth
单元列最小宽度
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L24)
```csharp title="Declaration"
public int MinWidth
```
### MaxWidth
单元列最大宽度
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L29)
```csharp title="Declaration"
public int MaxWidth
```
### Stretchable
可伸缩选项
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L34)
```csharp title="Declaration"
public bool Stretchable
```
### Searchable
可搜索选项
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L39)
```csharp title="Declaration"
public bool Searchable
```
### Sortable
可排序选项
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L44)
```csharp title="Declaration"
public bool Sortable
```
### Counter
统计数量
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L49)
```csharp title="Declaration"
public bool Counter
```
### Units
展示单位
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L54)
```csharp title="Declaration"
public string Units
```
### HeaderType
数值类型
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L59)
```csharp title="Declaration"
public EHeaderType HeaderType
```
## Methods
### SetMinWidth(int)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L77)
```csharp title="Declaration"
public ReportHeader SetMinWidth(int value)
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *value* |

### SetMaxWidth(int)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L82)
```csharp title="Declaration"
public ReportHeader SetMaxWidth(int value)
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *value* |

### SetStretchable()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L87)
```csharp title="Declaration"
public ReportHeader SetStretchable()
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)
### SetSearchable()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L92)
```csharp title="Declaration"
public ReportHeader SetSearchable()
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)
### SetSortable()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L97)
```csharp title="Declaration"
public ReportHeader SetSortable()
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)
### SetCounter()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L102)
```csharp title="Declaration"
public ReportHeader SetCounter()
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)
### SetUnits(string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L107)
```csharp title="Declaration"
public ReportHeader SetUnits(string units)
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *units* |

### SetHeaderType(EHeaderType)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L112)
```csharp title="Declaration"
public ReportHeader SetHeaderType(EHeaderType value)
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.EHeaderType](../YooAsset.Editor/EHeaderType.md) | *value* |

### CheckValueValid(string)
检测数值有效性
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetArtReporter/ReportHeader.cs#L121)
```csharp title="Declaration"
public void CheckValueValid(string value)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *value* |

