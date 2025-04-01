---
title: Struct DecryptResult
sidebar_label: DecryptResult
---
# Struct DecryptResult


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public struct DecryptResult
```
## Fields
### Result
资源包对象

```csharp title="Declaration"
public AssetBundle Result
```
### CreateRequest
异步请求句柄

```csharp title="Declaration"
public AssetBundleCreateRequest CreateRequest
```
### ManagedStream
托管流对象
注意：流对象在资源包对象释放的时候会自动释放

```csharp title="Declaration"
public Stream ManagedStream
```
