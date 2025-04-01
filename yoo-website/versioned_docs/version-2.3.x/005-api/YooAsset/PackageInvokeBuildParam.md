---
title: Class PackageInvokeBuildParam
sidebar_label: PackageInvokeBuildParam
---
# Class PackageInvokeBuildParam


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public class PackageInvokeBuildParam
```
## Fields
### PackageName
包裹名称

```csharp title="Declaration"
public readonly string PackageName
```
### BuildPipelineName
构建管线名称

```csharp title="Declaration"
public string BuildPipelineName
```
### BuildUserData
用户数据

```csharp title="Declaration"
public object BuildUserData
```
### InvokeAssmeblyName
构建类所属程序集名称

```csharp title="Declaration"
public string InvokeAssmeblyName
```
### InvokeClassFullName
构建执行的类名全称
注意：类名必须包含命名空间！

```csharp title="Declaration"
public string InvokeClassFullName
```
### InvokeMethodName
构建执行的方法名称
注意：执行方法必须满足 BindingFlags.Public | BindingFlags.Static

```csharp title="Declaration"
public string InvokeMethodName
```
