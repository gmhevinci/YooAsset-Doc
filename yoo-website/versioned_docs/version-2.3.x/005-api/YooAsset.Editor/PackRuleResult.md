---
title: Struct PackRuleResult
sidebar_label: PackRuleResult
---
# Struct PackRuleResult


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectRules/IPackRule.cs#L20)
```csharp title="Declaration"
public struct PackRuleResult
```
## Methods
### IsValid()
结果是否有效
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectRules/IPackRule.cs#L34)
```csharp title="Declaration"
public bool IsValid()
```

##### Returns

`System.Boolean`
### GetBundleName(string, bool)
获取资源包全名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectRules/IPackRule.cs#L42)
```csharp title="Declaration"
public string GetBundleName(string packageName, bool uniqueBundleName)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/CollectRules/IPackRule.cs#L56)
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

