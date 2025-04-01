---
title: Class AssetBundleCollector
sidebar_label: AssetBundleCollector
---
# Class AssetBundleCollector


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class AssetBundleCollector
```
## Fields
### CollectPath
收集路径
注意：支持文件夹或单个资源文件

```csharp title="Declaration"
public string CollectPath
```
### CollectorGUID
收集器的GUID

```csharp title="Declaration"
public string CollectorGUID
```
### CollectorType
收集器类型

```csharp title="Declaration"
public ECollectorType CollectorType
```
### AddressRuleName
寻址规则类名

```csharp title="Declaration"
public string AddressRuleName
```
### PackRuleName
打包规则类名

```csharp title="Declaration"
public string PackRuleName
```
### FilterRuleName
过滤规则类名

```csharp title="Declaration"
public string FilterRuleName
```
### AssetTags
资源分类标签

```csharp title="Declaration"
public string AssetTags
```
### UserData
用户自定义数据

```csharp title="Declaration"
public string UserData
```
## Methods
### IsValid()
收集器是否有效

```csharp title="Declaration"
public bool IsValid()
```

##### Returns

`System.Boolean`
### CheckConfigError()
检测配置错误

```csharp title="Declaration"
public void CheckConfigError()
```
### FixConfigError()
修复配置错误

```csharp title="Declaration"
public bool FixConfigError()
```

##### Returns

`System.Boolean`
### GetAllCollectAssets(CollectCommand, AssetBundleCollectorGroup)
获取打包收集的资源文件

```csharp title="Declaration"
public List<CollectAssetInfo> GetAllCollectAssets(CollectCommand command, AssetBundleCollectorGroup group)
```

##### Returns

`System.Collections.Generic.List<YooAsset.Editor.CollectAssetInfo>`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.CollectCommand](../YooAsset.Editor/CollectCommand.md) | *command* |
| [YooAsset.Editor.AssetBundleCollectorGroup](../YooAsset.Editor/AssetBundleCollectorGroup.md) | *group* |

