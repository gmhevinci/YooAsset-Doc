---
title: Class AssetDependencyDatabase
sidebar_label: AssetDependencyDatabase
description: "资源依赖数据库"
---
# Class AssetDependencyDatabase
资源依赖数据库

###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class AssetDependencyDatabase
```
## Methods
### CreateDatabase(bool, string)
创建缓存数据库

```csharp title="Declaration"
public void CreateDatabase(bool readCacheDatabaseFile, string databaseFilePath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *readCacheDatabaseFile* |
| `System.String` | *databaseFilePath* |

### SaveDatabase()
保存缓存数据库

```csharp title="Declaration"
public void SaveDatabase()
```
### ClearDatabase(bool)
清理缓存数据库

```csharp title="Declaration"
public void ClearDatabase(bool deleteDatabaseFile)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *deleteDatabaseFile* |

### GetDependencies(string, bool)
获取资源的依赖列表

```csharp title="Declaration"
public string[] GetDependencies(string assetPath, bool recursive)
```

##### Returns

`System.String[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetPath* |
| `System.Boolean` | *recursive* |

