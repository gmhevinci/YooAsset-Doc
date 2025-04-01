---
title: Class BuiltinBuildParameters
sidebar_label: BuiltinBuildParameters
---
# Class BuiltinBuildParameters


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class BuiltinBuildParameters : BuildParameters
```
## Fields
### CompressOption
压缩选项

```csharp title="Declaration"
public ECompressOption CompressOption
```
### DisableWriteTypeTree
禁止写入类型树结构（可以降低包体和内存并提高加载效率）

```csharp title="Declaration"
public bool DisableWriteTypeTree
```
### IgnoreTypeTreeChanges
忽略类型树变化

```csharp title="Declaration"
public bool IgnoreTypeTreeChanges
```
## Methods
### GetBundleBuildOptions()
获取内置构建管线的构建选项

```csharp title="Declaration"
public BuildAssetBundleOptions GetBundleBuildOptions()
```

##### Returns

`UnityEditor.BuildAssetBundleOptions`
