---
title: Class ReportHeader
sidebar_label: ReportHeader
---
# Class ReportHeader


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class ReportHeader
```
## Fields
### MaxValue


```csharp title="Declaration"
public const int MaxValue = 8388608
```
### HeaderTitle
标题

```csharp title="Declaration"
public string HeaderTitle
```
### Width
标题宽度

```csharp title="Declaration"
public int Width
```
### MinWidth
单元列最小宽度

```csharp title="Declaration"
public int MinWidth
```
### MaxWidth
单元列最大宽度

```csharp title="Declaration"
public int MaxWidth
```
### Stretchable
可伸缩选项

```csharp title="Declaration"
public bool Stretchable
```
### Searchable
可搜索选项

```csharp title="Declaration"
public bool Searchable
```
### Sortable
可排序选项

```csharp title="Declaration"
public bool Sortable
```
### Counter
统计数量

```csharp title="Declaration"
public bool Counter
```
### Units
展示单位

```csharp title="Declaration"
public string Units
```
### HeaderType
数值类型

```csharp title="Declaration"
public EHeaderType HeaderType
```
## Methods
### SetMinWidth(int)


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


```csharp title="Declaration"
public ReportHeader SetStretchable()
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)
### SetSearchable()


```csharp title="Declaration"
public ReportHeader SetSearchable()
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)
### SetSortable()


```csharp title="Declaration"
public ReportHeader SetSortable()
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)
### SetCounter()


```csharp title="Declaration"
public ReportHeader SetCounter()
```

##### Returns

[YooAsset.Editor.ReportHeader](../YooAsset.Editor/ReportHeader.md)
### SetUnits(string)


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

```csharp title="Declaration"
public void CheckValueValid(string value)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *value* |

