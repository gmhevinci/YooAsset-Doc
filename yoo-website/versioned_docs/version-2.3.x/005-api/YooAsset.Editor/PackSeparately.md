---
title: Class PackSeparately
sidebar_label: PackSeparately
description: "以文件路径作为资源包名
注意：每个文件独自打资源包
例如：\"Assets/UIPanel/Shop/Image/backgroud.png\" --&gt; \"assets_uipanel_shop_image_backgroud.bundle\"
例如：\"Assets/UIPanel/Shop/View/main.prefab\" --&gt; \"assets_uipanel_shop_view_main.bundle\""
---
# Class PackSeparately
以文件路径作为资源包名
注意：每个文件独自打资源包
例如："Assets/UIPanel/Shop/Image/backgroud.png" --&gt; "assets_uipanel_shop_image_backgroud.bundle"
例如："Assets/UIPanel/Shop/View/main.prefab" --&gt; "assets_uipanel_shop_view_main.bundle"

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultRules/DefaultPackRule.cs#L38)
```csharp title="Declaration"
[DisplayName("资源包名: 文件路径")]
public class PackSeparately : IPackRule
```

## Implements

* [YooAsset.Editor.IPackRule](../YooAsset.Editor/IPackRule.md)
