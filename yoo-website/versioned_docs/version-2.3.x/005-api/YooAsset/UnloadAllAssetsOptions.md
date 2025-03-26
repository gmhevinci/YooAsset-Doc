---
title: Class UnloadAllAssetsOptions
sidebar_label: UnloadAllAssetsOptions
---
# Class UnloadAllAssetsOptions


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Operation/UnloadAllAssetsOperation.cs#L6)
```csharp title="Declaration"
public sealed class UnloadAllAssetsOptions
```
## Fields
### ReleaseAllHandles
释放所有资源句柄，防止卸载过程中触发完成回调！
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Operation/UnloadAllAssetsOperation.cs#L11)
```csharp title="Declaration"
public bool ReleaseAllHandles
```
### LockLoadOperation
卸载过程中锁定加载操作，防止新的任务请求！
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Operation/UnloadAllAssetsOperation.cs#L16)
```csharp title="Declaration"
public bool LockLoadOperation
```
