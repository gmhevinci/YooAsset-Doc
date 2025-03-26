---
title: Class AssetDependencyDatabase
sidebar_label: AssetDependencyDatabase
description: "资源依赖数据库"
---
# Class AssetDependencyDatabase
资源依赖数据库

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetDependencyDatabase.cs#L14)
```csharp title="Declaration"
public class AssetDependencyDatabase
```
## Methods
### CreateDatabase(bool, string)
创建缓存数据库
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetDependencyDatabase.cs#L38)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetDependencyDatabase.cs#L121)
```csharp title="Declaration"
public void SaveDatabase()
```
### ClearDatabase(bool)
清理缓存数据库
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetDependencyDatabase.cs#L160)
```csharp title="Declaration"
public void ClearDatabase(bool deleteDatabaseFile)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *deleteDatabaseFile* |

### GetDependencies(string, bool)
获取资源的依赖列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetDependencyDatabase.cs#L174)
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

