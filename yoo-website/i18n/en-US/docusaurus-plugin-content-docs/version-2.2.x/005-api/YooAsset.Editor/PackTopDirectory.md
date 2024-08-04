---
title: Class PackTopDirectory
sidebar_label: PackTopDirectory
description: "以收集器路径下顶级文件夹为资源包名
注意：文件夹下所有文件打进一个资源包
例如：收集器路径为 &quot;Assets/UIPanel&quot;
例如：&quot;Assets/UIPanel/Shop/Image/backgroud.png&quot; --&gt; &quot;assets_uipanel_shop.bundle&quot;
例如：&quot;Assets/UIPanel/Shop/View/main.prefab&quot; --&gt; &quot;assets_uipanel_shop.bundle&quot;"
---
# Class PackTopDirectory
以收集器路径下顶级文件夹为资源包名
注意：文件夹下所有文件打进一个资源包
例如：收集器路径为 &quot;Assets/UIPanel&quot;
例如：&quot;Assets/UIPanel/Shop/Image/backgroud.png&quot; --&gt; &quot;assets_uipanel_shop.bundle&quot;
例如：&quot;Assets/UIPanel/Shop/View/main.prefab&quot; --&gt; &quot;assets_uipanel_shop.bundle&quot;

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/AssetBundleCollector/DefaultPackRule.cs#L83)
```csharp title="Declaration"
[DisplayName("资源包名: 收集器下顶级文件夹路径")]
public class PackTopDirectory : IPackRule
```

## Implements

* [YooAsset.Editor.IPackRule](../YooAsset.Editor/IPackRule.md)
