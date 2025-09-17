---
title: Class AssetInfo
sidebar_label: AssetInfo
---
# Class AssetInfo


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class AssetInfo : IComparable<AssetInfo>
```
## Properties
### FileExtension
文件格式

```csharp title="Declaration"
public string FileExtension { get; }
```
## Fields
### AssetPath
资源路径

```csharp title="Declaration"
public string AssetPath
```
### AssetGUID
资源GUID

```csharp title="Declaration"
public string AssetGUID
```
### AssetType
资源类型

```csharp title="Declaration"
public Type AssetType
```
## Methods
### IsShaderAsset()
是否为着色器资源

```csharp title="Declaration"
public bool IsShaderAsset()
```

##### Returns

`System.Boolean`
### IsSpriteAtlas()
是否为图集资源

```csharp title="Declaration"
public bool IsSpriteAtlas()
```

##### Returns

`System.Boolean`
### CompareTo(AssetInfo)


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
