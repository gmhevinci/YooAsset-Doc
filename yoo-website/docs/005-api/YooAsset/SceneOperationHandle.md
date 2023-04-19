---
title: Class SceneOperationHandle
sidebar_label: SceneOperationHandle
---
# Class SceneOperationHandle


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public class SceneOperationHandle : OperationHandleBase, IEnumerator
```
## Properties
### SceneObject


```csharp title="Declaration"
public Scene SceneObject { get; }
```
## Methods
### ActivateScene()


```csharp title="Declaration"
public bool ActivateScene()
```

##### Returns

`System.Boolean`
### IsMainScene()


```csharp title="Declaration"
public bool IsMainScene()
```

##### Returns

`System.Boolean`
### UnloadAsync()


```csharp title="Declaration"
public UnloadSceneOperation UnloadAsync()
```

##### Returns

[YooAsset.UnloadSceneOperation](../YooAsset/UnloadSceneOperation.md)
## Events
### Completed


```csharp title="Declaration"
public event Action<SceneOperationHandle> Completed
```
##### Event Type
`System.Action<YooAsset.SceneOperationHandle>`

## Implements

* `System.Collections.IEnumerator`
