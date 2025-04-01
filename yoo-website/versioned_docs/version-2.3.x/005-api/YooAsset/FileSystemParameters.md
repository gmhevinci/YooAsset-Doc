---
title: Class FileSystemParameters
sidebar_label: FileSystemParameters
description: "文件系统参数"
---
# Class FileSystemParameters
文件系统参数

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public class FileSystemParameters
```
## Properties
### FileSystemClass
文件系统类
格式: "namespace.class,assembly"
格式: "命名空间.类型名,程序集"

```csharp title="Declaration"
public string FileSystemClass { get; }
```
### PackageRoot
文件系统的根目录

```csharp title="Declaration"
public string PackageRoot { get; }
```
## Methods
### AddParameter(string, object)
添加自定义参数

```csharp title="Declaration"
public void AddParameter(string name, object value)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *name* |
| `System.Object` | *value* |

### CreateDefaultEditorFileSystemParameters(string)
创建默认的编辑器文件系统参数
&lt;param name="packageRoot"&gt;文件系统的根目录&lt;/param&gt;

```csharp title="Declaration"
public static FileSystemParameters CreateDefaultEditorFileSystemParameters(string packageRoot)
```

##### Returns

[YooAsset.FileSystemParameters](../YooAsset/FileSystemParameters.md)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageRoot* |

### CreateDefaultBuildinFileSystemParameters(IDecryptionServices, string)
创建默认的内置文件系统参数

```csharp title="Declaration"
public static FileSystemParameters CreateDefaultBuildinFileSystemParameters(IDecryptionServices decryptionServices = null, string packageRoot = null)
```

##### Returns

[YooAsset.FileSystemParameters](../YooAsset/FileSystemParameters.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.IDecryptionServices](../YooAsset/IDecryptionServices.md) | *decryptionServices* | 加密文件解密服务类 |
| `System.String` | *packageRoot* | 文件系统的根目录 |

### CreateDefaultCacheFileSystemParameters(IRemoteServices, IDecryptionServices, string)
创建默认的缓存文件系统参数

```csharp title="Declaration"
public static FileSystemParameters CreateDefaultCacheFileSystemParameters(IRemoteServices remoteServices, IDecryptionServices decryptionServices = null, string packageRoot = null)
```

##### Returns

[YooAsset.FileSystemParameters](../YooAsset/FileSystemParameters.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.IRemoteServices](../YooAsset/IRemoteServices.md) | *remoteServices* | 远端资源地址查询服务类 |
| [YooAsset.IDecryptionServices](../YooAsset/IDecryptionServices.md) | *decryptionServices* | 加密文件解密服务类 |
| `System.String` | *packageRoot* | 文件系统的根目录 |

### CreateDefaultWebServerFileSystemParameters(IWebDecryptionServices, bool)
创建默认的WebServer文件系统参数

```csharp title="Declaration"
public static FileSystemParameters CreateDefaultWebServerFileSystemParameters(IWebDecryptionServices decryptionServices = null, bool disableUnityWebCache = false)
```

##### Returns

[YooAsset.FileSystemParameters](../YooAsset/FileSystemParameters.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.IWebDecryptionServices](../YooAsset/IWebDecryptionServices.md) | *decryptionServices* | 加密文件解密服务类 |
| `System.Boolean` | *disableUnityWebCache* | 禁用Unity的网络缓存 |

### CreateDefaultWebRemoteFileSystemParameters(IRemoteServices, IWebDecryptionServices, bool)
创建默认的WebRemote文件系统参数

```csharp title="Declaration"
public static FileSystemParameters CreateDefaultWebRemoteFileSystemParameters(IRemoteServices remoteServices, IWebDecryptionServices decryptionServices = null, bool disableUnityWebCache = false)
```

##### Returns

[YooAsset.FileSystemParameters](../YooAsset/FileSystemParameters.md)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.IRemoteServices](../YooAsset/IRemoteServices.md) | *remoteServices* | 远端资源地址查询服务类 |
| [YooAsset.IWebDecryptionServices](../YooAsset/IWebDecryptionServices.md) | *decryptionServices* | 加密文件解密服务类 |
| `System.Boolean` | *disableUnityWebCache* | 禁用Unity的网络缓存 |

