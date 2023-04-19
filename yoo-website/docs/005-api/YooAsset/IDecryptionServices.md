---
title: Interface IDecryptionServices
sidebar_label: IDecryptionServices
---
# Interface IDecryptionServices


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public interface IDecryptionServices
```
## Methods
### LoadFromFileOffset(DecryptFileInfo)


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


```csharp title="Declaration"
uint GetManagedReadBufferSize()
```

##### Returns

`System.UInt32`
