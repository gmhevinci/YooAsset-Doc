---
title: Class RequestPackageVersionOperation
sidebar_label: RequestPackageVersionOperation
---
# Class RequestPackageVersionOperation


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/RequestPackageVersionOperation.cs#L4)
```csharp title="Declaration"
public abstract class RequestPackageVersionOperation : AsyncOperationBase, IEnumerator, IComparable<AsyncOperationBase>
```
## Properties
### PackageVersion
当前最新的包裹版本
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/ResourcePackage/Operation/RequestPackageVersionOperation.cs#L9)
```csharp title="Declaration"
public string PackageVersion { get; protected set; }
```

## Implements

* `System.Collections.IEnumerator`
* `System.IComparable<YooAsset.AsyncOperationBase>`
