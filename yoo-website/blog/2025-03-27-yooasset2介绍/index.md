---
slug: yooasset2.3介绍
title: yooasset2.3介绍
authors: [hevinci]
tags: [yooasset2.3]
---

yooasset已经开源有三周年，yooasset2.3x的正式版本也已经发布。对于yooasset1.5x版本我们不再维护。

#### 2.3x版本和1.5x版本有何不同

底层代码我们做了大量重构。

1. 重构了资源构建流程，将原来耦合在构建管线里代码拆分为了现在的多条构建管线：EditorSimulateBuildPipeline，BuiltinBuildPipeline，ScriptableBuildPipeline，RawFileBuildPipeline。这样做的目的是为了方便大家定制自己的构建管线。**重点**：原生文件目前需要走自己的构建管线流程！如果从1.0升级需要将原生文件单独拆分出来放到独立的package里，然后通过原生文件构建管线去打包。

2. 运行时新增了文件系统的概念，默认提供了多个文件系统类：DefaultBuildinFileSystem，DefaultCacheFileSystem，DefaultEditorFileSystem，DefaultWebRemoteFileSystem，DefaultWebServerFileSystem，TiktokFileSystem，WechatFileSystem。根据不同的平台和需求，选择对应的文件系统。开发者还可以定制自己的文件系统来满足项目的特殊需求。

3. 新版本还做了大量的优化工作，极大的提升了资源打包的速度，以及一些运行时代码的优化。

4. 还有大量新增的特性和功能等待大家挖掘！

#### 开发者如何选择

对于已经上线的项目还是建议保持稳定，对于开发周期的项目和新项目我们建议直接使用2.3x版本。如果是小游戏平台，强烈推荐使用2.3x版本。
