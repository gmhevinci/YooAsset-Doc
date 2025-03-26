---
title: Class AssetDependencyCache
sidebar_label: AssetDependencyCache
---
# Class AssetDependencyCache


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class AssetDependencyCache
```
## Methods
### GetDependencies(string, bool)
获取资源的依赖列表

```csharp title="Declaration"
public string[] GetDependencies(string assetPath, bool recursive = true)
```

##### Returns

`System.String[]`: 返回依赖的资源路径集合
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *assetPath* | 资源路径 |
| `System.Boolean` | *recursive* | 递归查找所有依赖 |

