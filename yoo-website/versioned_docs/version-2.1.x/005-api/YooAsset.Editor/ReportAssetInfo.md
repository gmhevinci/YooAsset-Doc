---
title: Class ReportAssetInfo
sidebar_label: ReportAssetInfo
---
# Class ReportAssetInfo


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class ReportAssetInfo
```
## Fields
### Address
可寻址地址

```csharp title="Declaration"
public string Address
```
### AssetPath
资源路径

```csharp title="Declaration"
public string AssetPath
```
### AssetGUID
资源GUID
说明：Meta文件记录的GUID

```csharp title="Declaration"
public string AssetGUID
```
### AssetTags
资源的分类标签

```csharp title="Declaration"
public string[] AssetTags
```
### MainBundleName
所属资源包名称

```csharp title="Declaration"
public string MainBundleName
```
### MainBundleSize
所属资源包的大小

```csharp title="Declaration"
public long MainBundleSize
```
### DependAssets
依赖的资源路径列表

```csharp title="Declaration"
public List<string> DependAssets
```
