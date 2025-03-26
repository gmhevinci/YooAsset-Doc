---
title: Class AssetBundleCollectorSetting
sidebar_label: AssetBundleCollectorSetting
---
# Class AssetBundleCollectorSetting


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L9)
```csharp title="Declaration"
[CreateAssetMenu(fileName = "AssetBundleCollectorSetting", menuName = "YooAsset/Create AssetBundle Collector Settings")]
public class AssetBundleCollectorSetting : ScriptableObject
```
## Fields
### ShowPackageView
是否显示包裹列表视图
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L15)
```csharp title="Declaration"
public bool ShowPackageView
```
### EnableAddressable
是否启用可寻址资源定位
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L20)
```csharp title="Declaration"
public bool EnableAddressable
```
### UniqueBundleName
资源包名唯一化
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L25)
```csharp title="Declaration"
public bool UniqueBundleName
```
### ShowEditorAlias
是否显示编辑器别名
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L30)
```csharp title="Declaration"
public bool ShowEditorAlias
```
### Packages
包裹列表
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L36)
```csharp title="Declaration"
public List<AssetBundleCollectorPackage> Packages
```
## Methods
### ClearAll()
清空所有数据
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L42)
```csharp title="Declaration"
public void ClearAll()
```
### CheckConfigError()
检测配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L51)
```csharp title="Declaration"
public void CheckConfigError()
```
### FixConfigError()
修复配置错误
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L62)
```csharp title="Declaration"
public bool FixConfigError()
```

##### Returns

`System.Boolean`
### GetPackageAllTags(string)
获取所有的资源标签
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L78)
```csharp title="Declaration"
public List<string> GetPackageAllTags(string packageName)
```

##### Returns

`System.Collections.Generic.List<System.String>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### GetPackageAssets(EBuildMode, string)
获取包裹收集的资源文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSetting.cs#L95)
```csharp title="Declaration"
public CollectResult GetPackageAssets(EBuildMode buildMode, string packageName)
```

##### Returns

[YooAsset.Editor.CollectResult](../YooAsset.Editor/CollectResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.EBuildMode](../YooAsset.Editor/EBuildMode.md) | *buildMode* |
| `System.String` | *packageName* |

