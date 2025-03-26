---
title: Class AssetBundleCollectorGroup
sidebar_label: AssetBundleCollectorGroup
---
# Class AssetBundleCollectorGroup


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L10)
```csharp title="Declaration"
[Serializable]
public class AssetBundleCollectorGroup
```
## Fields
### GroupName
分组名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L16)
```csharp title="Declaration"
public string GroupName
```
### GroupDesc
分组描述
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L21)
```csharp title="Declaration"
public string GroupDesc
```
### AssetTags
资源分类标签
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L26)
```csharp title="Declaration"
public string AssetTags
```
### ActiveRuleName
分组激活规则
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L31)
```csharp title="Declaration"
public string ActiveRuleName
```
### Collectors
分组的收集器列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L36)
```csharp title="Declaration"
public List<AssetBundleCollector> Collectors
```
## Methods
### CheckConfigError()
检测配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L42)
```csharp title="Declaration"
public void CheckConfigError()
```
### FixConfigError()
修复配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L61)
```csharp title="Declaration"
public bool FixConfigError()
```

##### Returns

`System.Boolean`
### GetAllCollectAssets(CollectCommand)
获取打包收集的资源文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorGroup.cs#L77)
```csharp title="Declaration"
public List<CollectAssetInfo> GetAllCollectAssets(CollectCommand command)
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.CollectAssetInfo>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.CollectCommand](../YooAsset.Editor/CollectCommand.md) | *command* |

