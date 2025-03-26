---
title: Struct DecryptResult
sidebar_label: DecryptResult
---
# Struct DecryptResult


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L23)
```csharp title="Declaration"
public struct DecryptResult
```
## Fields
### Result
资源包对象
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L28)
```csharp title="Declaration"
public AssetBundle Result
```
### CreateRequest
异步请求句柄
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L33)
```csharp title="Declaration"
public AssetBundleCreateRequest CreateRequest
```
### ManagedStream
托管流对象
注意：流对象在资源包对象释放的时候会自动释放
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Services/IDecryptionServices.cs#L39)
```csharp title="Declaration"
public Stream ManagedStream
```
