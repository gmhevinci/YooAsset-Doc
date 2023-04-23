---
title: Class PackDirectory
sidebar_label: PackDirectory
description: "以父类文件夹路径作为资源包名
注意：文件夹下所有文件打进一个资源包
例如：&quot;Assets/UIPanel/Shop/Image/backgroud.png&quot; --&gt; &quot;assets_uipanel_shop_image.bundle&quot;
例如：&quot;Assets/UIPanel/Shop/View/main.prefab&quot; --&gt; &quot;assets_uipanel_shop_view.bundle&quot;"
---
# Class PackDirectory
以父类文件夹路径作为资源包名
注意：文件夹下所有文件打进一个资源包
例如：&quot;Assets/UIPanel/Shop/Image/backgroud.png&quot; --&gt; &quot;assets_uipanel_shop_image.bundle&quot;
例如：&quot;Assets/UIPanel/Shop/View/main.prefab&quot; --&gt; &quot;assets_uipanel_shop_view.bundle&quot;

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultPackRule.cs#L60)
```csharp title="Declaration"
[DisplayName("资源包名: 父类文件夹路径")]
public class PackDirectory : IPackRule
```

## Implements

* [YooAsset.Editor.IPackRule](../YooAsset.Editor/IPackRule.md)
