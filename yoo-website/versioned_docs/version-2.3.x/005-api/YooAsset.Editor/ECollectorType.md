---
title: Enum ECollectorType
sidebar_label: ECollectorType
---
# Enum ECollectorType


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[Serializable]
public enum ECollectorType
```
## Fields
### MainAssetCollector
收集参与打包的主资源对象，并写入到资源清单的资源列表里（可以通过代码加载）。

```csharp title="Declaration"
MainAssetCollector = 0
```
### StaticAssetCollector
收集参与打包的主资源对象，但不写入到资源清单的资源列表里（无法通过代码加载）。

```csharp title="Declaration"
StaticAssetCollector = 1
```
### DependAssetCollector
收集参与打包的依赖资源对象，但不写入到资源清单的资源列表里（无法通过代码加载）。
注意：如果依赖资源对象没有被主资源对象引用，则不参与打包构建。

```csharp title="Declaration"
DependAssetCollector = 2
```
### None
该收集器类型不能被设置

```csharp title="Declaration"
None = 3
```
