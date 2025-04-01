---
title: Class AssetBundleCollectorSetting
sidebar_label: AssetBundleCollectorSetting
---
# Class AssetBundleCollectorSetting


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[CreateAssetMenu(fileName = "AssetBundleCollectorSetting", menuName = "YooAsset/Create AssetBundle Collector Settings")]
public class AssetBundleCollectorSetting : ScriptableObject
```
## Fields
### ShowPackageView
显示包裹列表视图

```csharp title="Declaration"
public bool ShowPackageView
```
### ShowEditorAlias
是否显示编辑器别名

```csharp title="Declaration"
public bool ShowEditorAlias
```
### UniqueBundleName
资源包名唯一化

```csharp title="Declaration"
public bool UniqueBundleName
```
### Packages
包裹列表

```csharp title="Declaration"
public List<AssetBundleCollectorPackage> Packages
```
## Methods
### ClearAll()
清空所有数据

```csharp title="Declaration"
public void ClearAll()
```
### CheckPackageConfigError(string)
检测包裹配置错误

```csharp title="Declaration"
public void CheckPackageConfigError(string packageName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### CheckAllPackageConfigError()
检测所有配置错误

```csharp title="Declaration"
public void CheckAllPackageConfigError()
```
### FixAllPackageConfigError()
修复所有配置错误

```csharp title="Declaration"
public bool FixAllPackageConfigError()
```

##### Returns

`System.Boolean`
### GetPackageAllTags(string)
获取所有的资源标签

```csharp title="Declaration"
public List<string> GetPackageAllTags(string packageName)
```

##### Returns

`System.Collections.Generic.List<System.String>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### GetPackageAssets(bool, bool, string)


```csharp title="Declaration"
[Obsolete("This method will be removed in a future ! Use BeginCollect instead.", true)]
public CollectResult GetPackageAssets(bool simulateBuild, bool useAssetDependencyDB, string packageName)
```

##### Returns

[YooAsset.Editor.CollectResult](../YooAsset.Editor/CollectResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *simulateBuild* |
| `System.Boolean` | *useAssetDependencyDB* |
| `System.String` | *packageName* |

### BeginCollect(string, bool, bool)
收集指定包裹的资源文件

```csharp title="Declaration"
public CollectResult BeginCollect(string packageName, bool simulateBuild, bool useAssetDependencyDB)
```

##### Returns

[YooAsset.Editor.CollectResult](../YooAsset.Editor/CollectResult.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.Boolean` | *simulateBuild* |
| `System.Boolean` | *useAssetDependencyDB* |

### GetPackage(string)
获取包裹类

```csharp title="Declaration"
public AssetBundleCollectorPackage GetPackage(string packageName)
```

##### Returns

[YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

