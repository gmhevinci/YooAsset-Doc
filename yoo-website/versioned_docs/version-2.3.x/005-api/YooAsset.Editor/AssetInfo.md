---
title: Class AssetInfo
sidebar_label: AssetInfo
---
# Class AssetInfo


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/Common/AssetInfo.cs#L7)
```csharp title="Declaration"
[Serializable]
public class AssetInfo : IComparable<AssetInfo>
```
## Properties
### FileExtension
文件格式
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/Common/AssetInfo.cs#L30)
```csharp title="Declaration"
public string FileExtension { get; }
```
## Fields
### AssetPath
资源路径
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/Common/AssetInfo.cs#L15)
```csharp title="Declaration"
public string AssetPath
```
### AssetGUID
资源GUID
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/Common/AssetInfo.cs#L20)
```csharp title="Declaration"
public string AssetGUID
```
### AssetType
资源类型
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/Common/AssetInfo.cs#L25)
```csharp title="Declaration"
public Type AssetType
```
## Methods
### IsShaderAsset()
是否为着色器资源
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/Common/AssetInfo.cs#L57)
```csharp title="Declaration"
public bool IsShaderAsset()
```

##### Returns

`System.Boolean`
### CompareTo(AssetInfo)

###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/Common/AssetInfo.cs#L65)
```csharp title="Declaration"
public int CompareTo(AssetInfo other)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.AssetInfo](../YooAsset.Editor/AssetInfo.md) | *other* |


## Implements

* `System.IComparable<YooAsset.Editor.AssetInfo>`
