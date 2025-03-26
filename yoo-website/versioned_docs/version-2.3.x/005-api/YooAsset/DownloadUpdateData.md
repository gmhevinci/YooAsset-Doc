---
title: Struct DownloadUpdateData
sidebar_label: DownloadUpdateData
description: "下载器相关的更新数据"
---
# Struct DownloadUpdateData
下载器相关的更新数据

###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadDefine.cs#L23)
```csharp title="Declaration"
public struct DownloadUpdateData
```
## Fields
### PackageName
所属包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadDefine.cs#L28)
```csharp title="Declaration"
public string PackageName
```
### Progress
下载进度 (0-1f)
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadDefine.cs#L33)
```csharp title="Declaration"
public float Progress
```
### TotalDownloadCount
下载文件总数
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadDefine.cs#L38)
```csharp title="Declaration"
public int TotalDownloadCount
```
### CurrentDownloadCount
当前完成的下载文件数量
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadDefine.cs#L43)
```csharp title="Declaration"
public int CurrentDownloadCount
```
### TotalDownloadBytes
下载数据总大小（单位：字节）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadDefine.cs#L48)
```csharp title="Declaration"
public long TotalDownloadBytes
```
### CurrentDownloadBytes
当前完成的下载数据大小（单位：字节）
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/DownloadSystem/DownloadDefine.cs#L53)
```csharp title="Declaration"
public long CurrentDownloadBytes
```
