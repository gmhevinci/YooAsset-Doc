---
title: Class AssetBundleCollectorSettingData
sidebar_label: AssetBundleCollectorSettingData
---
# Class AssetBundleCollectorSettingData


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class AssetBundleCollectorSettingData
```
## Properties
### IsDirty


```csharp title="Declaration"
public static bool IsDirty { get; }
```
### Setting


```csharp title="Declaration"
public static AssetBundleCollectorSetting Setting { get; }
```
## Methods
### SaveFile()


```csharp title="Declaration"
public static void SaveFile()
```
### FixFile()


```csharp title="Declaration"
public static void FixFile()
```
### ClearAll()


```csharp title="Declaration"
public static void ClearAll()
```
### GetActiveRuleNames()


```csharp title="Declaration"
public static List<RuleDisplayName> GetActiveRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetAddressRuleNames()


```csharp title="Declaration"
public static List<RuleDisplayName> GetAddressRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetPackRuleNames()


```csharp title="Declaration"
public static List<RuleDisplayName> GetPackRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetFilterRuleNames()


```csharp title="Declaration"
public static List<RuleDisplayName> GetFilterRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### HasActiveRuleName(string)


```csharp title="Declaration"
public static bool HasActiveRuleName(string ruleName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### HasAddressRuleName(string)


```csharp title="Declaration"
public static bool HasAddressRuleName(string ruleName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### HasPackRuleName(string)


```csharp title="Declaration"
public static bool HasPackRuleName(string ruleName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### HasFilterRuleName(string)


```csharp title="Declaration"
public static bool HasFilterRuleName(string ruleName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### GetActiveRuleInstance(string)


```csharp title="Declaration"
public static IActiveRule GetActiveRuleInstance(string ruleName)
```

##### Returns

[YooAsset.Editor.IActiveRule](../YooAsset.Editor/IActiveRule.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### GetAddressRuleInstance(string)


```csharp title="Declaration"
public static IAddressRule GetAddressRuleInstance(string ruleName)
```

##### Returns

[YooAsset.Editor.IAddressRule](../YooAsset.Editor/IAddressRule.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### GetPackRuleInstance(string)


```csharp title="Declaration"
public static IPackRule GetPackRuleInstance(string ruleName)
```

##### Returns

[YooAsset.Editor.IPackRule](../YooAsset.Editor/IPackRule.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### GetFilterRuleInstance(string)


```csharp title="Declaration"
public static IFilterRule GetFilterRuleInstance(string ruleName)
```

##### Returns

[YooAsset.Editor.IFilterRule](../YooAsset.Editor/IFilterRule.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### ModifyPackageView(bool)


```csharp title="Declaration"
public static void ModifyPackageView(bool showPackageView)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *showPackageView* |

### ModifyAddressable(bool)


```csharp title="Declaration"
public static void ModifyAddressable(bool enableAddressable)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *enableAddressable* |

### ModifyUniqueBundleName(bool)


```csharp title="Declaration"
public static void ModifyUniqueBundleName(bool uniqueBundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *uniqueBundleName* |

### ModifyShowEditorAlias(bool)


```csharp title="Declaration"
public static void ModifyShowEditorAlias(bool showAlias)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *showAlias* |

### CreatePackage(string)


```csharp title="Declaration"
public static AssetBundleCollectorPackage CreatePackage(string packageName)
```

##### Returns

[YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

### RemovePackage(AssetBundleCollectorPackage)


```csharp title="Declaration"
public static void RemovePackage(AssetBundleCollectorPackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |

### ModifyPackage(AssetBundleCollectorPackage)


```csharp title="Declaration"
public static void ModifyPackage(AssetBundleCollectorPackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |

### CreateGroup(AssetBundleCollectorPackage, string)


```csharp title="Declaration"
public static AssetBundleCollectorGroup CreateGroup(AssetBundleCollectorPackage package, string groupName)
```

##### Returns

[YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |
| `System.String` | *groupName* |

### RemoveGroup(AssetBundleCollectorPackage, AssetBundleCollectorGroup)


```csharp title="Declaration"
public static void RemoveGroup(AssetBundleCollectorPackage package, AssetBundleCollectorGroup group)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |

### ModifyGroup(AssetBundleCollectorPackage, AssetBundleCollectorGroup)


```csharp title="Declaration"
public static void ModifyGroup(AssetBundleCollectorPackage package, AssetBundleCollectorGroup group)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |

### CreateCollector(AssetBundleCollectorGroup, AssetBundleCollector)


```csharp title="Declaration"
public static void CreateCollector(AssetBundleCollectorGroup group, AssetBundleCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |
| [YooAsset.Editor.AssetBundleCollector](../YooAsset.Editor/AssetBundleCollector.md) | *collector* |

### RemoveCollector(AssetBundleCollectorGroup, AssetBundleCollector)


```csharp title="Declaration"
public static void RemoveCollector(AssetBundleCollectorGroup group, AssetBundleCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |
| [YooAsset.Editor.AssetBundleCollector](../YooAsset.Editor/AssetBundleCollector.md) | *collector* |

### ModifyCollector(AssetBundleCollectorGroup, AssetBundleCollector)


```csharp title="Declaration"
public static void ModifyCollector(AssetBundleCollectorGroup group, AssetBundleCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |
| [YooAsset.Editor.AssetBundleCollector](../YooAsset.Editor/AssetBundleCollector.md) | *collector* |

### GetPackageAllTags(string)


```csharp title="Declaration"
public static string GetPackageAllTags(string packageName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

