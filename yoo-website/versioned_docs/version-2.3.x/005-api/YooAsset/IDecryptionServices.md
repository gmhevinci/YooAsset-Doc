---
title: Interface IDecryptionServices
sidebar_label: IDecryptionServices
description: "解密类服务接口"
---
# Interface IDecryptionServices
解密类服务接口

###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L20)
```csharp title="Declaration"
public interface IDecryptionServices
```
## Methods
### LoadFromFileOffset(DecryptFileInfo)
文件偏移解密方法
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L25)
```csharp title="Declaration"
ulong LoadFromFileOffset(DecryptFileInfo fileInfo)
```

##### Returns

`System.UInt64`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DecryptFileInfo](../YooAsset/DecryptFileInfo.md) | *fileInfo* |

### LoadFromMemory(DecryptFileInfo)
文件内存解密方法
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L30)
```csharp title="Declaration"
byte[] LoadFromMemory(DecryptFileInfo fileInfo)
```

##### Returns

`System.Byte[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DecryptFileInfo](../YooAsset/DecryptFileInfo.md) | *fileInfo* |

### LoadFromStream(DecryptFileInfo)
文件流解密方法
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L35)
```csharp title="Declaration"
Stream LoadFromStream(DecryptFileInfo fileInfo)
```

##### Returns

`System.IO.Stream`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.DecryptFileInfo](../YooAsset/DecryptFileInfo.md) | *fileInfo* |

### GetManagedReadBufferSize()
文件流解密的托管缓存大小
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L40)
```csharp title="Declaration"
uint GetManagedReadBufferSize()
```

##### Returns

`System.UInt32`
