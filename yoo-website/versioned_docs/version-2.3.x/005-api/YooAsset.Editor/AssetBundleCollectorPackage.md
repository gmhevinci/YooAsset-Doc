---
title: Class AssetBundleCollectorPackage
sidebar_label: AssetBundleCollectorPackage
---
# Class AssetBundleCollectorPackage


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L10)
```csharp title="Declaration"
[Serializable]
public class AssetBundleCollectorPackage
```
## Fields
### PackageName
包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L16)
```csharp title="Declaration"
public string PackageName
```
### PackageDesc
包裹描述
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L21)
```csharp title="Declaration"
public string PackageDesc
```
### EnableAddressable
启用可寻址资源定位
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L26)
```csharp title="Declaration"
public bool EnableAddressable
```
### LocationToLower
资源定位地址大小写不敏感
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L31)
```csharp title="Declaration"
public bool LocationToLower
```
### IncludeAssetGUID
包含资源GUID数据
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L36)
```csharp title="Declaration"
public bool IncludeAssetGUID
```
### AutoCollectShaders
自动收集所有着色器（所有着色器存储在一个资源包内）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L41)
```csharp title="Declaration"
public bool AutoCollectShaders
```
### IgnoreRuleName
资源忽略规则名
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L46)
```csharp title="Declaration"
public string IgnoreRuleName
```
### Groups
分组列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L51)
```csharp title="Declaration"
public List<AssetBundleCollectorGroup> Groups
```
## Methods
### CheckConfigError()
检测配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L57)
```csharp title="Declaration"
public void CheckConfigError()
```
### FixConfigError()
修复配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L78)
```csharp title="Declaration"
public bool FixConfigError()
```

##### Returns

`System.Boolean`
### GetCollectAssets(CollectCommand)
获取收集的资源列表
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L103)
```csharp title="Declaration"
public List<CollectAssetInfo> GetCollectAssets(CollectCommand command)
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.CollectAssetInfo>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.CollectCommand](../YooAsset.Editor/CollectCommand.md) | *command* |

### GetAllTags()
获取所有的资源标签
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorPackage.cs#L148)
```csharp title="Declaration"
public List<string> GetAllTags()
```

##### Returns

`System.Collections.Generic.List<System.String>`
