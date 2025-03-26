---
title: Class UpdatePackageManifestOperation
sidebar_label: UpdatePackageManifestOperation
description: "向远端请求并更新清单"
---
# Class UpdatePackageManifestOperation
向远端请求并更新清单

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public abstract class UpdatePackageManifestOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Methods
### SavePackageVersion()
保存当前清单的版本，用于下次启动时自动加载的版本。

```csharp title="Declaration"
public virtual void SavePackageVersion()
```

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
