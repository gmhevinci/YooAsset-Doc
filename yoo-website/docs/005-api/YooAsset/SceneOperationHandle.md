---
title: Class SceneOperationHandle
sidebar_label: SceneOperationHandle
---
# Class SceneOperationHandle


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SceneOperationHandle.cs#L5)
```csharp title="Declaration"
public class SceneOperationHandle : OperationHandleBase, IEnumerator
```
## Properties
### SceneObject
场景对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SceneOperationHandle.cs#L43)
```csharp title="Declaration"
public Scene SceneObject { get; }
```
## Methods
### ActivateScene()
激活场景
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SceneOperationHandle.cs#L56)
```csharp title="Declaration"
public bool ActivateScene()
```

##### Returns

`System.Boolean`
### IsMainScene()
是否为主场景
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SceneOperationHandle.cs#L75)
```csharp title="Declaration"
public bool IsMainScene()
```

##### Returns

`System.Boolean`
### UnloadAsync()
异步卸载子场景
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SceneOperationHandle.cs#L99)
```csharp title="Declaration"
public UnloadSceneOperation UnloadAsync()
```

##### Returns

[YooAsset.UnloadSceneOperation](../YooAsset/UnloadSceneOperation.md)
## Events
### Completed
完成委托
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/SceneOperationHandle.cs#L21)
```csharp title="Declaration"
public event Action<SceneOperationHandle> Completed
```
##### Event Type
`System.Action<YooAsset.SceneOperationHandle>`

## Implements

* `System.Collections.IEnumerator`
