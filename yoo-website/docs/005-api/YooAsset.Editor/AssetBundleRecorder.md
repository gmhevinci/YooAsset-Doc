---
title: Class AssetBundleRecorder
sidebar_label: AssetBundleRecorder
---
# Class AssetBundleRecorder


###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/AssetBundleRecorder.cs#L8)
```csharp title="Declaration"
public static class AssetBundleRecorder
```
## Methods
### GetAssetBundle(string)
获取AssetBundle对象，如果没有被缓存就重新加载。
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/AssetBundleRecorder.cs#L15)
```csharp title="Declaration"
public static AssetBundle GetAssetBundle(string filePath)
```

##### Returns

`UnityEngine.AssetBundle`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### UnloadAll()
卸载所有已经加载的AssetBundle文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleReporter/AssetBundleRecorder.cs#L55)
```csharp title="Declaration"
public static void UnloadAll()
```
