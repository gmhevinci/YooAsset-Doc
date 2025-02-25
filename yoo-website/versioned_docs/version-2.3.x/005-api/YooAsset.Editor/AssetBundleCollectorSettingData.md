---
title: Class AssetBundleCollectorSettingData
sidebar_label: AssetBundleCollectorSettingData
---
# Class AssetBundleCollectorSettingData


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L10)
```csharp title="Declaration"
public class AssetBundleCollectorSettingData
```
## Properties
### IsDirty
配置数据是否被修改
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L27)
```csharp title="Declaration"
public static bool IsDirty { get; }
```
### Setting

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L135)
```csharp title="Declaration"
public static AssetBundleCollectorSetting Setting { get; }
```
## Methods
### SaveFile()
存储配置文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L148)
```csharp title="Declaration"
public static void SaveFile()
```
### FixFile()
修复配置文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L162)
```csharp title="Declaration"
public static void FixFile()
```
### ClearAll()
清空所有数据
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L174)
```csharp title="Declaration"
public static void ClearAll()
```
### GetActiveRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L180)
```csharp title="Declaration"
public static List<RuleDisplayName> GetActiveRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetAddressRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L192)
```csharp title="Declaration"
public static List<RuleDisplayName> GetAddressRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetPackRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L204)
```csharp title="Declaration"
public static List<RuleDisplayName> GetPackRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetFilterRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L216)
```csharp title="Declaration"
public static List<RuleDisplayName> GetFilterRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### HasActiveRuleName(string)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L237)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L241)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L245)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L249)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L254)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L271)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L288)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L305)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L324)
```csharp title="Declaration"
public static void ModifyPackageView(bool showPackageView)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *showPackageView* |

### ModifyAddressable(bool)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L329)
```csharp title="Declaration"
public static void ModifyAddressable(bool enableAddressable)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *enableAddressable* |

### ModifyUniqueBundleName(bool)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L334)
```csharp title="Declaration"
public static void ModifyUniqueBundleName(bool uniqueBundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *uniqueBundleName* |

### ModifyShowEditorAlias(bool)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L339)
```csharp title="Declaration"
public static void ModifyShowEditorAlias(bool showAlias)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *showAlias* |

### CreatePackage(string)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L346)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L354)
```csharp title="Declaration"
public static void RemovePackage(AssetBundleCollectorPackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |

### ModifyPackage(AssetBundleCollectorPackage)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L365)
```csharp title="Declaration"
public static void ModifyPackage(AssetBundleCollectorPackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |

### CreateGroup(AssetBundleCollectorPackage, string)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L374)
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

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L382)
```csharp title="Declaration"
public static void RemoveGroup(AssetBundleCollectorPackage package, AssetBundleCollectorGroup group)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |

### ModifyGroup(AssetBundleCollectorPackage, AssetBundleCollectorGroup)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L393)
```csharp title="Declaration"
public static void ModifyGroup(AssetBundleCollectorPackage package, AssetBundleCollectorGroup group)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |

### CreateCollector(AssetBundleCollectorGroup, AssetBundleCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L402)
```csharp title="Declaration"
public static void CreateCollector(AssetBundleCollectorGroup group, AssetBundleCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |
| [YooAsset.Editor.AssetBundleCollector](../YooAsset.Editor/AssetBundleCollector.md) | *collector* |

### RemoveCollector(AssetBundleCollectorGroup, AssetBundleCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L407)
```csharp title="Declaration"
public static void RemoveCollector(AssetBundleCollectorGroup group, AssetBundleCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |
| [YooAsset.Editor.AssetBundleCollector](../YooAsset.Editor/AssetBundleCollector.md) | *collector* |

### ModifyCollector(AssetBundleCollectorGroup, AssetBundleCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L418)
```csharp title="Declaration"
public static void ModifyCollector(AssetBundleCollectorGroup group, AssetBundleCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |
| [YooAsset.Editor.AssetBundleCollector](../YooAsset.Editor/AssetBundleCollector.md) | *collector* |

### GetPackageAllTags(string)
获取所有的资源标签
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L429)
```csharp title="Declaration"
public static string GetPackageAllTags(string packageName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

