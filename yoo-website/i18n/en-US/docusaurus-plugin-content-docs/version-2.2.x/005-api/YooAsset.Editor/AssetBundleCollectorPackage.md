---
title: Class AssetBundleCollectorPackage
sidebar_label: AssetBundleCollectorPackage
---
# Class AssetBundleCollectorPackage


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L10)
```csharp title="Declaration"
[Serializable]
public class AssetBundleCollectorPackage
```
## Fields
### PackageName
包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L16)
```csharp title="Declaration"
public string PackageName
```
### PackageDesc
包裹描述
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L21)
```csharp title="Declaration"
public string PackageDesc
```
### Groups
分组列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L26)
```csharp title="Declaration"
public List<AssetBundleCollectorGroup> Groups
```
## Methods
### CheckConfigError()
检测配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L32)
```csharp title="Declaration"
public void CheckConfigError()
```
### FixConfigError()
修复配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L43)
```csharp title="Declaration"
public bool FixConfigError()
```

##### Returns

`System.Boolean`
### GetAllCollectAssets(CollectCommand)
获取打包收集的资源文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L59)
```csharp title="Declaration"
public List<CollectAssetInfo> GetAllCollectAssets(CollectCommand command)
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.CollectAssetInfo>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.CollectCommand](../YooAsset.Editor/CollectCommand.md) | *command* |

### GetAllTags()
获取所有的资源标签
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L100)
```csharp title="Declaration"
public List<string> GetAllTags()
```

##### Returns

`System.Collections.Generic.List<System.String>`
