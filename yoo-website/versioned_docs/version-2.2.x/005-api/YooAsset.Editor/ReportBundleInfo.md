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
资源包的依赖集合

```csharp title="Declaration"
public List<string> DependBundles
```
### AllBuiltinAssets
该资源包内包含的所有资源

```csharp title="Declaration"
public List<string> AllBuiltinAssets
```
## Methods
### GetTagsString()
获取资源分类标签的字符串

```csharp title="Declaration"
public string GetTagsString()
```

##### Returns

`System.String`
