---
title: Class RawFileOperationHandle
sidebar_label: RawFileOperationHandle
---
# Class RawFileOperationHandle


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/RawFileOperationHandle.cs#L7)
```csharp title="Declaration"
public class RawFileOperationHandle : OperationHandleBase, IEnumerator, IDisposable
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/RawFileOperationHandle.cs#L44)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### Release()
释放资源句柄
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/RawFileOperationHandle.cs#L54)
```csharp title="Declaration"
public void Release()
```
### Dispose()
释放资源句柄
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/RawFileOperationHandle.cs#L62)
```csharp title="Declaration"
public void Dispose()
```
### GetRawFileData()
获取原生文件的二进制数据
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/RawFileOperationHandle.cs#L71)
```csharp title="Declaration"
public byte[] GetRawFileData()
```

##### Returns

`System.Byte[]`
### GetRawFileText()
获取原生文件的文本数据
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/RawFileOperationHandle.cs#L84)
```csharp title="Declaration"
public string GetRawFileText()
```

##### Returns

`System.String`
### GetRawFilePath()
获取原生文件的路径
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/RawFileOperationHandle.cs#L97)
```csharp title="Declaration"
public string GetRawFilePath()
```

##### Returns

`System.String`
## Events
### Completed
完成委托
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Handles/RawFileOperationHandle.cs#L22)
```csharp title="Declaration"
public event Action<RawFileOperationHandle> Completed
```
##### Event Type
`System.Action<YooAsset.RawFileOperationHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
