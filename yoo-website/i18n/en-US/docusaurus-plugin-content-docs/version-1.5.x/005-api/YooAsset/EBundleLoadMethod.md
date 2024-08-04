---
title: Enum EBundleLoadMethod
sidebar_label: EBundleLoadMethod
description: "Bundle文件的加载方法"
---
# Enum EBundleLoadMethod
Bundle文件的加载方法

###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Loader/EBundleLoadMethod.cs#L7)
```csharp title="Declaration"
public enum EBundleLoadMethod
```
## Fields
### Normal
正常加载（不需要解密）
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Loader/EBundleLoadMethod.cs#L12)
```csharp title="Declaration"
Normal = 0
```
### LoadFromFileOffset
通过文件偏移来解密加载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Loader/EBundleLoadMethod.cs#L17)
```csharp title="Declaration"
LoadFromFileOffset = 1
```
### LoadFromMemory
通过文件内存来解密加载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Loader/EBundleLoadMethod.cs#L22)
```csharp title="Declaration"
LoadFromMemory = 2
```
### LoadFromStream
通过文件流来解密加载
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/AssetSystem/Loader/EBundleLoadMethod.cs#L27)
```csharp title="Declaration"
LoadFromStream = 3
```
