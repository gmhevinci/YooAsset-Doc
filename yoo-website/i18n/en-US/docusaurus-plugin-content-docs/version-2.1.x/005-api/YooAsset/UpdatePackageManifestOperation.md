---
title: Class UpdatePackageManifestOperation
sidebar_label: UpdatePackageManifestOperation
description: "向远端请求并更新清单"
---
# Class UpdatePackageManifestOperation
向远端请求并更新清单

###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/UpdatePackageManifestOperation.cs#L10)
```csharp title="Declaration"
public abstract class UpdatePackageManifestOperation : AsyncOperationBase, IEnumerator
```
## Methods
### SavePackageVersion()
保存当前清单的版本，用于下次启动时自动加载的版本。
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/PackageSystem/Operations/UpdatePackageManifestOperation.cs#L15)
```csharp title="Declaration"
public virtual void SavePackageVersion()
```

## Implements

* `System.Collections.IEnumerator`
