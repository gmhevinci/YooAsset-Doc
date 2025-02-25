---
title: Class UpdatePackageVersionOperation
sidebar_label: UpdatePackageVersionOperation
description: "请求远端包裹的最新版本"
---
# Class UpdatePackageVersionOperation
请求远端包裹的最新版本

###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/UpdatePackageVersionOperation.cs#L10)
```csharp title="Declaration"
public abstract class UpdatePackageVersionOperation : AsyncOperationBase, IEnumerator
```
## Properties
### PackageVersion
当前最新的包裹版本
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/UpdatePackageVersionOperation.cs#L15)
```csharp title="Declaration"
public string PackageVersion { get; protected set; }
```

## Implements

* `System.Collections.IEnumerator`
