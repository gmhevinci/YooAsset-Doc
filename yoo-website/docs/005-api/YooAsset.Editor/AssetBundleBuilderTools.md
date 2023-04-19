---
title: Class AssetBundleBuilderTools
sidebar_label: AssetBundleBuilderTools
---
# Class AssetBundleBuilderTools


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderTools.cs#L11)
```csharp title="Declaration"
public static class AssetBundleBuilderTools
```
## Methods
### CheckCorruptionPrefab(List&lt;string&gt;)
检测所有损坏的预制体文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderTools.cs#L16)
```csharp title="Declaration"
public static void CheckCorruptionPrefab(List<string> searchDirectorys)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.String>` | *searchDirectorys* |

### FindRedundantAnimationState(List&lt;string&gt;)
检测所有动画控制器的冗余状态
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderTools.cs#L44)
```csharp title="Declaration"
public static void FindRedundantAnimationState(List<string> searchDirectorys)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.String>` | *searchDirectorys* |

### ClearMaterialUnusedProperty(List&lt;string&gt;)
清理所有材质球的冗余属性
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/AssetBundleBuilderTools.cs#L74)
```csharp title="Declaration"
public static void ClearMaterialUnusedProperty(List<string> searchDirectorys)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Collections.Generic.List<System.String>` | *searchDirectorys* |

