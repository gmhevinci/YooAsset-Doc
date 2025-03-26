---
title: Class BuildContext
sidebar_label: BuildContext
---
# Class BuildContext


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildSystem/BuildContext.cs#L7)
```csharp title="Declaration"
public class BuildContext
```
## Methods
### ClearAllContext()
清空所有上下文对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildSystem/BuildContext.cs#L14)
```csharp title="Declaration"
public void ClearAllContext()
```
### SetContextObject(IContextObject)
设置上下文对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildSystem/BuildContext.cs#L22)
```csharp title="Declaration"
public void SetContextObject(IContextObject contextObject)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.IContextObject](../YooAsset.Editor/IContextObject.md) | *contextObject* |

### GetContextObject&lt;T&gt;()
获取上下文对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildSystem/BuildContext.cs#L37)
```csharp title="Declaration"
public T GetContextObject<T>() where T : IContextObject
```

##### Returns

`<T>`
##### Type Parameters
* `T`
### TryGetContextObject&lt;T&gt;()
获取上下文对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleBuilder/BuildSystem/BuildContext.cs#L53)
```csharp title="Declaration"
public T TryGetContextObject<T>() where T : IContextObject
```

##### Returns

`<T>`
##### Type Parameters
* `T`
