---
title: Class BuildParametersContext
sidebar_label: BuildParametersContext
---
# Class BuildParametersContext


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public class BuildParametersContext : IContextObject
```
## Properties
### Parameters


```csharp title="Declaration"
public BuildParameters Parameters { get; }
```
## Methods
### GetPipelineOutputDirectory()


```csharp title="Declaration"
public string GetPipelineOutputDirectory()
```

##### Returns

`System.String`
### GetPackageOutputDirectory()


```csharp title="Declaration"
public string GetPackageOutputDirectory()
```

##### Returns

`System.String`
### GetPipelineBuildOptions()


```csharp title="Declaration"
public BuildAssetBundleOptions GetPipelineBuildOptions()
```

##### Returns

`UnityEditor.BuildAssetBundleOptions`
### GetSBPBuildParameters()


```csharp title="Declaration"
public BundleBuildParameters GetSBPBuildParameters()
```

##### Returns

`UnityEditor.Build.Pipeline.BundleBuildParameters`

## Implements

* [YooAsset.Editor.IContextObject](../YooAsset.Editor/IContextObject.md)
