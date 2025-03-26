---
title: Class UpdatePackageVersionOperation
sidebar_label: UpdatePackageVersionOperation
description: "请求远端包裹的最新版本"
---
# Class UpdatePackageVersionOperation
请求远端包裹的最新版本

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class UpdatePackageVersionOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Properties
### PackageVersion
当前最新的包裹版本

```csharp title="Declaration"
public string PackageVersion { get; protected set; }
```

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
