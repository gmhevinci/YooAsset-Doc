---
title: Class AssetBundleCollectorSettingData
sidebar_label: AssetBundleCollectorSettingData
---
# Class AssetBundleCollectorSettingData


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L10)
```csharp title="Declaration"
public class AssetBundleCollectorSettingData
```
## Properties
### IsDirty
配置数据是否被修改
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L30)
```csharp title="Declaration"
public static bool IsDirty { get; }
```
### Setting

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L161)
```csharp title="Declaration"
public static AssetBundleCollectorSetting Setting { get; }
```
## Methods
### SaveFile()
存储配置文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L174)
```csharp title="Declaration"
public static void SaveFile()
```
### FixFile()
修复配置文件
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L188)
```csharp title="Declaration"
public static void FixFile()
```
### ClearAll()
清空所有数据
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L201)
```csharp title="Declaration"
public static void ClearAll()
```
### GetActiveRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L206)
```csharp title="Declaration"
public static List<RuleDisplayName> GetActiveRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetAddressRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L218)
```csharp title="Declaration"
public static List<RuleDisplayName> GetAddressRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetPackRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L230)
```csharp title="Declaration"
public static List<RuleDisplayName> GetPackRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetFilterRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L242)
```csharp title="Declaration"
public static List<RuleDisplayName> GetFilterRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### GetIgnoreRuleNames()

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L254)
```csharp title="Declaration"
public static List<RuleDisplayName> GetIgnoreRuleNames()
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.RuleDisplayName>`
### HasActiveRuleName(string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L275)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L279)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L283)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L287)
```csharp title="Declaration"
public static bool HasFilterRuleName(string ruleName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### HasIgnoreRuleName(string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L291)
```csharp title="Declaration"
public static bool HasIgnoreRuleName(string ruleName)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### GetActiveRuleInstance(string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L296)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L313)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L330)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L347)
```csharp title="Declaration"
public static IFilterRule GetFilterRuleInstance(string ruleName)
```

##### Returns

[YooAsset.Editor.IFilterRule](../YooAsset.Editor/IFilterRule.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### GetIgnoreRuleInstance(string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L364)
```csharp title="Declaration"
public static IIgnoreRule GetIgnoreRuleInstance(string ruleName)
```

##### Returns

[YooAsset.Editor.IIgnoreRule](../YooAsset.Editor/IIgnoreRule.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *ruleName* |

### ModifyShowPackageView(bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L383)
```csharp title="Declaration"
public static void ModifyShowPackageView(bool showPackageView)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *showPackageView* |

### ModifyShowEditorAlias(bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L388)
```csharp title="Declaration"
public static void ModifyShowEditorAlias(bool showAlias)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *showAlias* |

### ModifyUniqueBundleName(bool)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L393)
```csharp title="Declaration"
public static void ModifyUniqueBundleName(bool uniqueBundleName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *uniqueBundleName* |

### CreatePackage(string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L400)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L408)
```csharp title="Declaration"
public static void RemovePackage(AssetBundleCollectorPackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |

### ModifyPackage(AssetBundleCollectorPackage)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L419)
```csharp title="Declaration"
public static void ModifyPackage(AssetBundleCollectorPackage package)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |

### CreateGroup(AssetBundleCollectorPackage, string)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L428)
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

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L436)
```csharp title="Declaration"
public static void RemoveGroup(AssetBundleCollectorPackage package, AssetBundleCollectorGroup group)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |

### ModifyGroup(AssetBundleCollectorPackage, AssetBundleCollectorGroup)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L447)
```csharp title="Declaration"
public static void ModifyGroup(AssetBundleCollectorPackage package, AssetBundleCollectorGroup group)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorPackage](../YooAsset.Editor/AssetBundleCollectorPackage.md) | *package* |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |

### CreateCollector(AssetBundleCollectorGroup, AssetBundleCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L456)
```csharp title="Declaration"
public static void CreateCollector(AssetBundleCollectorGroup group, AssetBundleCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |
| [YooAsset.Editor.AssetBundleCollector](../YooAsset.Editor/AssetBundleCollector.md) | *collector* |

### RemoveCollector(AssetBundleCollectorGroup, AssetBundleCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L461)
```csharp title="Declaration"
public static void RemoveCollector(AssetBundleCollectorGroup group, AssetBundleCollector collector)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |
| [YooAsset.Editor.AssetBundleCollector](../YooAsset.Editor/AssetBundleCollector.md) | *collector* |

### ModifyCollector(AssetBundleCollectorGroup, AssetBundleCollector)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L472)
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
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/AssetBundleCollectorSettingData.cs#L483)
```csharp title="Declaration"
public static string GetPackageAllTags(string packageName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |

