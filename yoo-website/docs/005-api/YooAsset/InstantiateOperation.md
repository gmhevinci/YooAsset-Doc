---
title: Class InstantiateOperation
sidebar_label: InstantiateOperation
---
# Class InstantiateOperation


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Operations/InstantiateOperation.cs#L5)
```csharp title="Declaration"
public sealed class InstantiateOperation : AsyncOperationBase, IEnumerator
```
## Fields
### Result
实例化的游戏对象
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Operations/InstantiateOperation.cs#L25)
```csharp title="Declaration"
public GameObject Result
```
## Methods
### Cancel()
取消实例化对象操作
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Operations/InstantiateOperation.cs#L78)
```csharp title="Declaration"
public void Cancel()
```
### WaitForAsyncComplete()
等待异步实例化结束
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Operations/InstantiateOperation.cs#L91)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```

## Implements

* `System.Collections.IEnumerator`
