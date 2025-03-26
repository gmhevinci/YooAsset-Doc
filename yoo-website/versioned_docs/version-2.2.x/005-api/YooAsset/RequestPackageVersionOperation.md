---
title: Class RequestPackageVersionOperation
sidebar_label: RequestPackageVersionOperation
description: "查询远端包裹的最新版本"
---
# Class RequestPackageVersionOperation
查询远端包裹的最新版本

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class RequestPackageVersionOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
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
