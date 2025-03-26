---
title: Class PackageInvokeBuildParam
sidebar_label: PackageInvokeBuildParam
---
# Class PackageInvokeBuildParam


###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/PakcageInvokeBuilder/PakcageInvokeBuildParam.cs#L4)
```csharp title="Declaration"
public class PackageInvokeBuildParam
```
## Fields
### PackageName
包裹名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/PakcageInvokeBuilder/PakcageInvokeBuildParam.cs#L9)
```csharp title="Declaration"
public readonly string PackageName
```
### BuildPipelineName
构建管线名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/PakcageInvokeBuilder/PakcageInvokeBuildParam.cs#L14)
```csharp title="Declaration"
public string BuildPipelineName
```
### BuildUserData
用户数据
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/PakcageInvokeBuilder/PakcageInvokeBuildParam.cs#L19)
```csharp title="Declaration"
public object BuildUserData
```
### InvokeAssmeblyName
构建类所属程序集名称
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/PakcageInvokeBuilder/PakcageInvokeBuildParam.cs#L24)
```csharp title="Declaration"
public string InvokeAssmeblyName
```
### InvokeClassFullName
构建执行的类名全称
注意：类名必须包含命名空间！
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/PakcageInvokeBuilder/PakcageInvokeBuildParam.cs#L30)
```csharp title="Declaration"
public string InvokeClassFullName
```
### InvokeMethodName
构建执行的方法名称
注意：执行方法必须满足 BindingFlags.Public | BindingFlags.Static
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/PakcageInvokeBuilder/PakcageInvokeBuildParam.cs#L36)
```csharp title="Declaration"
public string InvokeMethodName
```
