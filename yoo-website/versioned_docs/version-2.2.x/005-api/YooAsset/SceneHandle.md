---
title: Class SceneHandle
sidebar_label: SceneHandle
---
# Class SceneHandle


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public class SceneHandle : HandleBase, IEnumerator, IDisposable
```
## Properties
### SceneName
场景名称

```csharp title="Declaration"
public string SceneName { get; }
```
### SceneObject
场景对象

```csharp title="Declaration"
public Scene SceneObject { get; }
```
## Methods
### ActivateScene()
激活场景（当同时存在多个场景时用于切换激活场景）

```csharp title="Declaration"
public bool ActivateScene()
```

##### Returns

`System.Boolean`
### UnSuspend()
解除场景加载挂起操作

```csharp title="Declaration"
public bool UnSuspend()
```

##### Returns

`System.Boolean`
### UnloadAsync()
异步卸载场景对象
注意：场景卸载成功后，会自动释放该handle的引用计数！

```csharp title="Declaration"
public UnloadSceneOperation UnloadAsync()
```

##### Returns

[YooAsset.UnloadSceneOperation](../YooAsset/UnloadSceneOperation.md)
## Events
### Completed
完成委托

```csharp title="Declaration"
public event Action<SceneHandle> Completed
```
##### Event Type
`System.Action<YooAsset.SceneHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
