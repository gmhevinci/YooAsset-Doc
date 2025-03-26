---
title: Class HostPlayModeParameters
sidebar_label: HostPlayModeParameters
description: "联机运行模式的初始化参数"
---
# Class HostPlayModeParameters
联机运行模式的初始化参数

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public class HostPlayModeParameters : InitializeParameters
```
## Fields
### RemoteServices
远端资源地址查询服务类

```csharp title="Declaration"
public IRemoteServices RemoteServices
```
### BuildinQueryServices
内置资源查询服务接口

```csharp title="Declaration"
public IBuildinQueryServices BuildinQueryServices
```
### DeliveryQueryServices
分发资源查询服务接口

```csharp title="Declaration"
public IDeliveryQueryServices DeliveryQueryServices
```
### DeliveryLoadServices
分发资源加载服务接口

```csharp title="Declaration"
public IDeliveryLoadServices DeliveryLoadServices
```
