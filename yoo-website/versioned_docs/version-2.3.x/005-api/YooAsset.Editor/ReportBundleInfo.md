---
title: Class ReportBundleInfo
sidebar_label: ReportBundleInfo
---
# Class ReportBundleInfo


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public class ReportBundleInfo
```
## Fields
### BundleName
资源包名称

```csharp title="Declaration"
public string BundleName
```
### FileName
文件名称

```csharp title="Declaration"
public string FileName
```
### FileHash
文件哈希值

```csharp title="Declaration"
public string FileHash
```
### FileCRC
文件校验码

```csharp title="Declaration"
public string FileCRC
```
### FileSize
文件大小（字节数）

```csharp title="Declaration"
public long FileSize
```
### Encrypted
加密文件

```csharp title="Declaration"
public bool Encrypted
```
### Tags
资源包标签集合

```csharp title="Declaration"
public string[] Tags
```
### DependBundles
依赖的资源包集合
说明：引擎层构建查询结果

```csharp title="Declaration"
public List<string> DependBundles
```
### ReferenceBundles
引用该资源包的资源包集合
说明：谁依赖该资源包

```csharp title="Declaration"
public List<string> ReferenceBundles
```
### BundleContents
资源包内部所有资产

```csharp title="Declaration"
public List<AssetInfo> BundleContents
```
## Methods
### GetTagsString()
获取资源分类标签的字符串

```csharp title="Declaration"
public string GetTagsString()
```

##### Returns

`System.String`
