---
title: Class TaskCreateManifest
sidebar_label: TaskCreateManifest
---
# Class TaskCreateManifest


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public abstract class TaskCreateManifest
```
## Methods
### CreateManifestFile(BuildContext)
创建补丁清单文件到输出目录

```csharp title="Declaration"
protected void CreateManifestFile(BuildContext context)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |

### GetBundleDepends(BuildContext, string)
获取资源包的依赖集合

```csharp title="Declaration"
protected abstract string[] GetBundleDepends(BuildContext context, string bundleName)
```

##### Returns

`System.String[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.BuildContext](../YooAsset.Editor/BuildContext.md) | *context* |
| `System.String` | *bundleName* |

