---
title: Class PackTopDirectory
sidebar_label: PackTopDirectory
description: "以收集器路径下顶级文件夹为资源包名
注意：文件夹下所有文件打进一个资源包
例如：收集器路径为 \"Assets/UIPanel\"
例如：\"Assets/UIPanel/Shop/Image/backgroud.png\" --&gt; \"assets_uipanel_shop.bundle\"
例如：\"Assets/UIPanel/Shop/View/main.prefab\" --&gt; \"assets_uipanel_shop.bundle\""
---
# Class PackTopDirectory
以收集器路径下顶级文件夹为资源包名
注意：文件夹下所有文件打进一个资源包
例如：收集器路径为 "Assets/UIPanel"
例如："Assets/UIPanel/Shop/Image/backgroud.png" --&gt; "assets_uipanel_shop.bundle"
例如："Assets/UIPanel/Shop/View/main.prefab" --&gt; "assets_uipanel_shop.bundle"

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultPackRule.cs#L73)
```csharp title="Declaration"
[DisplayName("资源包名: 收集器下顶级文件夹路径")]
public class PackTopDirectory : IPackRule
```

## Implements

* [YooAsset.Editor.IPackRule](../YooAsset.Editor/IPackRule.md)
