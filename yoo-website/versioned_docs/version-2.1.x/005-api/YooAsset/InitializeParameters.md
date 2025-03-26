---
title: Class InitializeParameters
sidebar_label: InitializeParameters
description: "初始化参数"
---
# Class InitializeParameters
初始化参数

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class InitializeParameters
```
## Fields
### BuildinRootDirectory
内置文件的根路径
注意：当参数为空的时候会使用默认的根目录。

```csharp title="Declaration"
public string BuildinRootDirectory
```
### SandboxRootDirectory
沙盒文件的根路径
注意：当参数为空的时候会使用默认的根目录。

```csharp title="Declaration"
public string SandboxRootDirectory
```
### CacheFileAppendExtension
缓存文件追加原始后缀格式

```csharp title="Declaration"
public bool CacheFileAppendExtension
```
### CacheBootVerifyLevel
缓存系统启动时的验证级别

```csharp title="Declaration"
public EVerifyLevel CacheBootVerifyLevel
```
### AutoDestroyAssetProvider
自动销毁不再使用的资源提供者

```csharp title="Declaration"
public bool AutoDestroyAssetProvider
```
### BreakpointResumeFileSize
启用断点续传参数
说明：当文件的大小大于设置的字节数时启用断点续传下载器

```csharp title="Declaration"
public uint BreakpointResumeFileSize
```
### DecryptionServices
文件解密服务接口

```csharp title="Declaration"
public IDecryptionServices DecryptionServices
```
