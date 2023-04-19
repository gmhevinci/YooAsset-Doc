---
title: Class RawFileOperationHandle
sidebar_label: RawFileOperationHandle
---
# Class RawFileOperationHandle


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public class RawFileOperationHandle : OperationHandleBase, IEnumerator, IDisposable
```
## Methods
### WaitForAsyncComplete()


```csharp title="Declaration"
public void WaitForAsyncComplete()
```
### Release()


```csharp title="Declaration"
public void Release()
```
### Dispose()


```csharp title="Declaration"
public void Dispose()
```
### GetRawFileData()


```csharp title="Declaration"
public byte[] GetRawFileData()
```

##### Returns

`System.Byte[]`
### GetRawFileText()


```csharp title="Declaration"
public string GetRawFileText()
```

##### Returns

`System.String`
### GetRawFilePath()


```csharp title="Declaration"
public string GetRawFilePath()
```

##### Returns

`System.String`
## Events
### Completed


```csharp title="Declaration"
public event Action<RawFileOperationHandle> Completed
```
##### Event Type
`System.Action<YooAsset.RawFileOperationHandle>`

## Implements

* `System.Collections.IEnumerator`
* `System.IDisposable`
