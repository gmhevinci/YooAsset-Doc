---
title: Struct PackRuleResult
sidebar_label: PackRuleResult
---
# Struct PackRuleResult


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public struct PackRuleResult
```
## Methods
### IsValid()
结果是否有效

```csharp title="Declaration"
public bool IsValid()
```

##### Returns

`System.Boolean`
### GetBundleName(string, bool)
获取资源包全名称

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

