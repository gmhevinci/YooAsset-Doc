---
title: Struct PackRuleResult
sidebar_label: PackRuleResult
---
# Struct PackRuleResult


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/IPackRule.cs#L27)
```csharp title="Declaration"
public struct PackRuleResult
```
## Methods
### GetMainBundleName(string, bool)
获取主资源包全名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/IPackRule.cs#L41)
```csharp title="Declaration"
public string GetMainBundleName(string packageName, bool uniqueBundleName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.Boolean` | *uniqueBundleName* |

### GetShareBundleName(string, bool)
获取共享资源包全名称
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/IPackRule.cs#L55)
```csharp title="Declaration"
public string GetShareBundleName(string packageName, bool uniqueBundleName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.Boolean` | *uniqueBundleName* |

