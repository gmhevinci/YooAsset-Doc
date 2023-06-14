# 构建报告

学习如何查看资源构建报告。

报告工具，可以查看概览信息（Summary），资源对象列表信息（AssetView），资源包列表信息（BundleView）。

**注意**：该工具仅支持Unity2019.4+

### 概览视图

![image](./Image/AssetReporter-img1.png)

### 资源对象列表视图

可以查看资源对象列表以及每个资源对象所依赖的资源包。

![image](./Image/AssetReporter-img2.png)

### 资源包列表视图

可以查看资源包列表以及每个资源包所包含的资源对象。

![image](./Image/AssetReporter-img3.png)

### 冗余资源列表视图

在构建参数BuildParameters.AutoAnalyzeRedundancy为False的时候，资源系统底层不会在自动分析冗余资源，需要开发者自己手动配置来避免资源冗余。

![image](./Image/AssetReporter-img4.png)
