---
title: Enum ECollectorType
sidebar_label: ECollectorType
---
# Enum ECollectorType


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/ECollectorType.cs#L5)
```csharp title="Declaration"
[Serializable]
public enum ECollectorType
```
## Fields
### MainAssetCollector
收集参与打包的主资源对象，并写入到资源清单的资源列表里（可以通过代码加载）。
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/ECollectorType.cs#L11)
```csharp title="Declaration"
MainAssetCollector = 0
```
### StaticAssetCollector
收集参与打包的主资源对象，但不写入到资源清单的资源列表里（无法通过代码加载）。
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/ECollectorType.cs#L16)
```csharp title="Declaration"
StaticAssetCollector = 1
```
### DependAssetCollector
收集参与打包的依赖资源对象，但不写入到资源清单的资源列表里（无法通过代码加载）。
注意：如果依赖资源对象没有被主资源对象引用，则不参与打包构建。
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/ECollectorType.cs#L22)
```csharp title="Declaration"
DependAssetCollector = 2
```
### None
该收集器类型不能被设置
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/ECollectorType.cs#L27)
```csharp title="Declaration"
None = 3
```
