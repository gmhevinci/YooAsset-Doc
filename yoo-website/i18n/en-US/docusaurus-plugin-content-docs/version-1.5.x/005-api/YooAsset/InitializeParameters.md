---
title: Class InitializeParameters
sidebar_label: InitializeParameters
description: "初始化参数"
---
# Class InitializeParameters
初始化参数

###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/InitializeParameters.cs#L28)
```csharp title="Declaration"
public abstract class InitializeParameters
```
## Fields
### LocationToLower
资源定位地址大小写不敏感
注意：默认值为False
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/InitializeParameters.cs#L34)
```csharp title="Declaration"
public bool LocationToLower
```
### DecryptionServices
文件解密服务接口
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/InitializeParameters.cs#L39)
```csharp title="Declaration"
public IDecryptionServices DecryptionServices
```
### LoadingMaxTimeSlice
资源加载每帧处理的最大时间片段
注意：默认值为MaxValue
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/InitializeParameters.cs#L45)
```csharp title="Declaration"
public long LoadingMaxTimeSlice
```
### DownloadFailedTryAgain
下载失败尝试次数
注意：默认值为MaxValue
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/InitializeParameters.cs#L51)
```csharp title="Declaration"
public int DownloadFailedTryAgain
```
