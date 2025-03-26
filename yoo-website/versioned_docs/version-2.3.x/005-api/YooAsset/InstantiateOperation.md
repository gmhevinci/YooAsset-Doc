---
title: Class InstantiateOperation
sidebar_label: InstantiateOperation
---
# Class InstantiateOperation


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Operation/InstantiateOperation.cs#L5)
```csharp title="Declaration"
public sealed class InstantiateOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Fields
### Result
实例化的游戏对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Operation/InstantiateOperation.cs#L32)
```csharp title="Declaration"
public GameObject Result
```
## Methods
### Cancel()
取消实例化对象操作
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Operation/InstantiateOperation.cs#L163)
```csharp title="Declaration"
public void Cancel()
```

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
