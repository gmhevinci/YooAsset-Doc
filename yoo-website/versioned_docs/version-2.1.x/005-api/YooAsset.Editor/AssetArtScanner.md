---
title: Class AssetArtScanner
sidebar_label: AssetArtScanner
---
# Class AssetArtScanner


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class AssetArtScanner
```
## Fields
### ScannerGUID
扫描器GUID

```csharp title="Declaration"
public string ScannerGUID
```
### ScannerName
扫描器名称

```csharp title="Declaration"
public string ScannerName
```
### ScannerDesc
扫描器描述

```csharp title="Declaration"
public string ScannerDesc
```
### ScannerSchema
扫描模式
注意：文件路径或文件GUID

```csharp title="Declaration"
public string ScannerSchema
```
### SaveDirectory
存储目录

```csharp title="Declaration"
public string SaveDirectory
```
### Collectors
收集列表

```csharp title="Declaration"
public List<AssetArtCollector> Collectors
```
### WhiteList
白名单

```csharp title="Declaration"
public List<string> WhiteList
```
## Methods
### CheckKeyword(string)
检测关键字匹配

```csharp title="Declaration"
public bool CheckKeyword(string keyword)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *keyword* |

### CheckWhiteList(string)
是否在白名单里

```csharp title="Declaration"
public bool CheckWhiteList(string guid)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *guid* |

### CheckConfigError()
检测配置错误

```csharp title="Declaration"
public void CheckConfigError()
```
### LoadSchema()
加载扫描模式实例

```csharp title="Declaration"
public ScannerSchema LoadSchema()
```

##### Returns

[YooAsset.Editor.ScannerSchema](../YooAsset.Editor/ScannerSchema.md)
### RunScanner()
运行扫描器生成报告类

```csharp title="Declaration"
public ScanReport RunScanner()
```

##### Returns

[YooAsset.Editor.ScanReport](../YooAsset.Editor/ScanReport.md)
