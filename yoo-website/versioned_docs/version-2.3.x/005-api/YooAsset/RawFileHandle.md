---
title: Class RawFileHandle
sidebar_label: RawFileHandle
---
# Class RawFileHandle


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/RawFileHandle.cs#L4)
```csharp title="Declaration"
public class RawFileHandle : HandleBase, IEnumerator, IDisposable
```
## Methods
### WaitForAsyncComplete()
等待异步执行完毕
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/RawFileHandle.cs#L41)
```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### GetRawFileData()
获取原生文件的二进制数据
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/RawFileHandle.cs#L52)
```csharp title="Declaration"
public byte[] GetRawFileData()
```

##### Returns

`System.Byte[]`
### GetRawFileText()
获取原生文件的文本数据
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/RawFileHandle.cs#L62)
```csharp title="Declaration"
public string GetRawFileText()
```

##### Returns

`System.String`
### GetRawFilePath()
获取原生文件的路径
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/RawFileHandle.cs#L72)
```csharp title="Declaration"
public string GetRawFilePath()
```

##### Returns

`System.String`
## Events
### Completed
完成委托
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourceManager/Handle/RawFileHandle.cs#L19)
```csharp title="Declaration"
public event Action<RawFileHandle> Completed
```
##### Event Type
`System.Action<YooAsset.RawFileHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
