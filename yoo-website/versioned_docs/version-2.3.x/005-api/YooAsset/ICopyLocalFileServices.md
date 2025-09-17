---
title: Interface ICopyLocalFileServices
sidebar_label: ICopyLocalFileServices
description: "本地文件拷贝服务类
备注：包体内文件拷贝，沙盒内文件导入都会触发该服务！"
---
# Interface ICopyLocalFileServices
本地文件拷贝服务类
备注：包体内文件拷贝，沙盒内文件导入都会触发该服务！

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public interface ICopyLocalFileServices
```
## Methods
### CopyFile(LocalFileInfo, string)


```csharp title="Declaration"
void CopyFile(LocalFileInfo sourceFileInfo, string destFilePath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.LocalFileInfo](../YooAsset/LocalFileInfo.md) | *sourceFileInfo* |
| `System.String` | *destFilePath* |

