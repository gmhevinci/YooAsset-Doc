---
title: Class PackDirectory
sidebar_label: PackDirectory
description: "以父类文件夹路径作为资源包名
注意：文件夹下所有文件打进一个资源包
例如：\"Assets/UIPanel/Shop/Image/backgroud.png\" --&gt; \"assets_uipanel_shop_image.bundle\"
例如：\"Assets/UIPanel/Shop/View/main.prefab\" --&gt; \"assets_uipanel_shop_view.bundle\""
---
# Class PackDirectory
以父类文件夹路径作为资源包名
注意：文件夹下所有文件打进一个资源包
例如："Assets/UIPanel/Shop/Image/backgroud.png" --&gt; "assets_uipanel_shop_image.bundle"
例如："Assets/UIPanel/Shop/View/main.prefab" --&gt; "assets_uipanel_shop_view.bundle"

###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
[DisplayName("资源包名: 父类文件夹路径")]
public class PackDirectory : IPackRule
```

## Implements

* [YooAsset.Editor.IPackRule](../YooAsset.Editor/IPackRule.md)
