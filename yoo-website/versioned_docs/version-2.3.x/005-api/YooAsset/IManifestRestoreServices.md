---
title: Interface IManifestRestoreServices
sidebar_label: IManifestRestoreServices
description: "资源清单文件处理服务接口"
---
# Interface IManifestRestoreServices
资源清单文件处理服务接口

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public interface IManifestRestoreServices
```
## Methods
### RestoreManifest(byte[])
还原资源清单（解压或解密）

```csharp title="Declaration"
byte[] RestoreManifest(byte[] fileData)
```

##### Returns

`System.Byte[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte[]` | *fileData* |

