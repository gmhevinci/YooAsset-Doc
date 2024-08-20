# 解决方案

了解一些常规的解决方案。

### 分布式构建解决方案

对于一些超大项目，一般会采取美术工程和游戏工程分开的方案。

通过使用YooAsset的Package机制，可以完美适配该方案。可以把Package理解为一个独立的资源包裹，每个Package之间不存在互相依赖的资源，都是互相独立的沙盒。

**美术工程**

该工程内包含关卡场景，3D模型，粒子特效，着色器等资源，创建名为GameArt的Package收集器。

注意：美术工程在修改完毕后，可以通过自动化工具来打包，然后上传到公司本地的资源服务器。

**游戏工程**

该工程内包含逻辑代码，UI图集，UI面板，UI字体，音频等资源，创建名为GameLogic的Package收集器。

注意：游戏工程里不要使用美术工程里的着色器，避免造成冗余！

```csharp
// 以下是项目开发阶段的解决方案
private IEnumerator Start()
{
    // 游戏工程使用编辑器模拟运行方式，可以方便快捷的验证游戏修改效果。
    {
        var package = YooAssets.CreatePackage("GameLogic");
        var initParameters = new EditorSimulateModeParameters();
        ...（省略初始化参数）
        var initializationOperation = package.InitializeAsync(initParameters);
        yield return initializationOperation;        
    }

    // 美术工程使用HostPlayMode运行方式，通过公司本地的资源服务器来更新。
    {
        var package = YooAssets.CreatePackage("GameArt");
        var initParameters = new HostPlayModeParameters();
        ...（省略初始化参数）
        var initOperation = package.InitializeAsync(initParameters);       
        initializationOperation = package.InitializeAsync(createParameters);
        yield return initializationOperation;  
        
        //美术资源更新流程
        ......
    }
}
```

### 资源自定义分发解决方案

希望将所有热更资源压缩到一个ZIP包里。玩家第一次启动游戏去下载ZIP包，下载完成后解压到沙盒目录下。

**关键是实现自定义文件系统。**

```csharp
//首先需要实现资源分发服务类
private IEnumerator Start()
{
    var package = YooAssets.CreatePackage("GameArt");
    var initParameters = new HostPlayModeParameters();
    initParameters.DeliveryFileSystemParameters = deliveryFileSystem;
    ...（省略其它初始化参数）
    var initOperation = package.InitializeAsync(initParameters);       
    initializationOperation = package.InitializeAsync(createParameters);
    yield return initializationOperation;  
}
```

文件系统实现过程注意事项：

1. ZIP包的下载和解压可以安排在初始化里。
2. ZIP包的下载和解压只保证发生一次。
3. ZIP包的下载器需要满足断点续传和文件校验逻辑。
4. 解压文件在写入缓存目录时需要保证文件的完整性。

### 首包资源定制解决方案

YooAsset默认支持通过Tag来指定首包资源，开发者也可以灵活定制自己的首包方案。

例如：在编辑器下，运行游戏过程中记录YooAsset加载过的资源对象，然后将这些资源对象依赖的AssetBundle文件拷贝到StreamgAssets目录下作为首包内容。

```csharp
using UnityEngine;
using UnityEditor;
using YooAsset.Editor;

void BuildBundle()
{
    // 等待资源构建流程完成
    ......
    
    // 加载构建成功的资源清单对象
    byte[] manifestBytes = FileUtility.ReadAllBytes(manifestPath);
    PackageManifest manifest = ManifestTools.DeserializeFromBinary(manifestBytes);
    
    // 查找所有需要打进首包资源的依赖AB
    HashSet<PackageBundle> bundles = new HashSet<PackageBundle>();
    foreach(var assetPath in buildinAssetPathList)
    {
        if(manifest.TryGetPackageAsset(assetPath, out PackageAsset packageAsset))
        {
            var packageBundle = manifest.BundleList[packageAsset.BundleID];
            if(bundles.Contains(packageBundle) == false)
                bundles.Add(packageBundle);
        }
    }
    
    // 拷贝所有首包文件
    string root = $"{AssetBundleBuilderHelper.GetDefaultStreamingAssetsRoot()}/{packageName}";
    foreach(var packageBundle in bundles)
    {
        string destPath = $"{root}/{packageBundle.FileName}";
        ...... //拷贝文件
    }
}
```

### 视频打包和加载解决方案

```csharp
// 编写自定义打包规则，然后将脚本放在Editor目录下。
// 然后在AssetBundleCollector界面对视频文件使用扩展的打包规则。
public class PackVideo : IPackRule
{
    PackRuleResult IPackRule.GetPackRuleResult(PackRuleData data)
    {
        string bundleName = data.AssetPath;
        string fileExtension = Path.GetExtension(data.AssetPath);
        fileExtension = fileExtension.Remove(0, 1);
        PackRuleResult result = new PackRuleResult(bundleName, fileExtension);
        return result;
    }
}
```

```csharp
// 视频加载范例
public IEnumerator Start()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var handle = package.LoadRawFileAsync(location);
    yield return handle;
    
    _videoPlayer.url = handle.GetRawFilePath();
    _videoPlayer.Play();
}
```

### 图集打包的零冗余解决方案

在unity2020以上的版本，我们会推荐使用SBP构建管线。

在使用Unity的图集系统的时候（SpriteAtlas），如何解决通过SBP构建管线造成的散图冗余的问题。

1. 确保SBP插件的版本升级到最新（例如：v2.1.3）。
2. 确保SpriteAtals和精灵散图构建进一个AssetBundle。
3. 确保精灵散图的收集器设置为StaticAssetCollector类型。

```csharp
// 图集加载范例
public IEnumerator Start()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var handle = package.LoadAssetAsync<SpriteAtlas>(location);
    yield return handle;
    
    var atlas = handle.AssetObject as SpriteAtlas;
    _image.sprite = atlas.GetSprite("icon_test");
}
```

### 弱联网环境解决方案

对于偏单机但是也有资源热更需求的项目。当玩家在无网络的时候，我们又不希望玩家卡在资源更新步骤而不能正常游戏。所以当玩家本地网络有问题的时候，我们可以跳过资源更新的步骤。

````csharp
private IEnumerator Start()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    
    // 先获取远端最新的资源版本
    var versionOp = package.RequestPackageVersionAsync(30);
    yield return versionOp;
    if (versionOp.Status == EOperationStatus.Succeed)
    {
        // 如果获取远端资源版本成功，说明当前网络连接通畅，可以走正常更新流程。
        var manifestOp = package.UpdatePackageManifestAsync(versionOp.PackageVersion);
		yield return manifestOp;
        if (manifestOp.Status != EOperationStatus.Succeed)
        {
            ShowMessageBox("请检查本地网络，资源清单更新失败！");
            yield break;
        }
        
        // 创建下载器并更新资源
        ......（代码省略）
        
        // 注意：下载完成之后再保存本地版本
        PlayerPrefs.SetString("GAME_VERSION", versionOp.PackageVersion);
        
        // 开始游戏
        StartGame();
    }
    else
    {
        // 获取上次成功记录的版本
        string version = PlayerPrefs.GetString("GAME_VERSION", string.Empty);
        if(string.IsNullOrEmpty(version))
        {
            ShowMessageBox("没有找到本地版本记录，需要更新资源！");
            yield break;
        }
        
        // 加载本地缓存的资源清单文件
        var manifestOp = package.UpdatePackageManifestAsync(version);
		yield return manifestOp;
        if (manifestOp.Status != EOperationStatus.Succeed)
        {
            ShowMessageBox("加载本地资源清单文件失败，需要更新资源！");
            yield break;
        }
        
        // 在正常开始游戏之前，还需要验证本地清单内容的完整性。
        var downloader = package.CreateResourceDownloader(1, 1, 60);
        if (downloader.TotalDownloadCount > 0)   
        {
            ShowMessageBox("资源内容本地并不完整，需要更新资源！");
            yield break;
        }
        
        // 开始游戏
        StartGame();
    }
}
````

### 资源服务器自定义请求解决方案

例如：在HTTP请求里增加账号密码等内容。

```csharp
// 设置自定义请求委托
YooAssets.SetDownloadSystemUnityWebRequest(MyWebRequester);

public UnityWebRequest MyWebRequester(string url)
{
    var request = new UnityWebRequest(url, UnityWebRequest.kHttpVerbGet);
    var authorization = GetAuthorization("Admin", "12345");
    request.SetRequestHeader("AUTHORIZATION", authorization);
    return reqeust;
}
private string GetAuthorization(string userName, string password)
{
    string auth = userName + ":" + password;
    var bytes = System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(auth);
    return "Basic " + System.Convert.ToBase64String(bytes);
}
```

### 微信小游戏支持解决方案

首先安装WX-WASM-SDK-V2 Unity插件，然后导入微信文件系统相关代码，WebPlayMode初始化的时候使用微信文件系统类。

微信文件系统相关代码可以在扩展工程内找到：Extension Sample --> Runtime --> WechatFileSystem

微信文件系统注意事项：

1. 不支持同步加载。
2. 不支持资源加密。
3. 不支持原生文件构建管线。

原生文件解决办法：

1. 修改Unity引擎无法识别的文件的后缀名为.bytes。
2. 视频文件通过微信插件来加载播放，视频文件不做资源版本控制。

需要关注的代码段：

````csharp
class WechatFileSystem : IFileSystem
{
    // 微信缓存根目录是否需要调整?
    public virtual void OnCreate(string packageName, string rootDirectory)
    {
        PackageName = packageName;
        _wxFileSystemMgr = WX.GetFileSystemManager();
        _wxFileCacheRoot = WX.env.USER_DATA_PATH; //注意：如果有子目录，请修改此处！
    }
    
    // 保证该方法返回正确的查询结果
    public virtual bool Exists(PackageBundle bundle)
    {
        string filePath = GetWXFileLoadPath(bundle);
        string result = _wxFileSystemMgr.AccessSync(filePath);
        return result.Equals("access:ok");
    }
}
````

**注意**：一定要禁止微信对资源清单版本文件进行缓存（文件名称样例：PackageManifest_xxx.version）

微信小游戏的配置教程：https://www.bilibili.com/read/cv24995199/

### FairyGUI支持解决方案

注意：在FairyGUI的面板销毁的时候，将资源句柄列表释放，否则会造成资源泄漏。

````csharp
// 资源句柄列表
private List<AssetOperationHandle> _handles = new List<AssetOperationHandle>(100);

// 加载方法
private object LoadFunc(string name, string extension, System.Type type, out DestroyMethod method)
{
    method = DestroyMethod.None; //注意：这里一定要设置为None
    string location = $"Assets/FairyRes/{name}{extension}";
    var package = YooAssets.GetPackage("DefaultPackage");
    var handle = package.LoadAssetSync(location , type);
    _handles.Add(handle);
    return handle.AssetObject;
}

// 执行FairyGUI的添加包函数
UIPackage.AddPackage(name, LoadFunc);

// 释放资源句柄列表
private void ReleaseHandles()
{
    foreach(var handle in _handles)
    {
        handle.Release();
    }
    _handles.Clear();
}
````

### Wwise音频热更解决方案

Wwise在iOS和Android平台，提供了API用于设置SoundBank路径。

AkSoundEngine::SetBasePath()设置基础目录。

```
SetBasePath的默认路径为：Application.streamingAssetsPath/Audio/GeneratedSoundBanks/(Platform)
```

AkSoundEngine::AddBasePath()设置热更目录，该方法可以设置多个更新目录。

```
AddBasePath的默认路径为：Application.persistentDataPath
```

**加载规则**

LoadBank时会从最后一次AddBasePath的路径开始搜索，依次向前最后到SetBasePath的路径，搜索到第一个目标SoundBank后加载。

**伪代码示例**

```csharp
// 在资源收集界面，将SoundBank文件目录设置为原生文件（PackRawFile)，并增加一个Tag标记。
public IEnumerator Start()
{
    ......
        
    var package = YooAssets.GetPackage("DefaultPackage");
    
    // 通过Tag标记下载更新的音频文件
    var downloader = package.CreateResourceDownloader(soundbankTag);
    downloader.BeginDownload();
 	yield return downloader;
    
    // 通过下面的方法获取原生文件的句柄
    var handle = package.LoadRawFileAsync(location);
    yield return handle;
    
    // 拷贝沙盒内音频文件到指定目录下（AddBasePath方法添加的目录）
    var packageVersion = package.GetPackageVersion();
    var basePath = $"{Application.persistentDataPath}/Audio/GeneratedSoundBanks/{packageVersion}";
    var soundbankSourceFilePath = handle.GetRawFilePath();
    var soundbankDestFilePath = $"{basePath}/soundbankFileName";
    if (File.Exists(soundbankDestFilePath) == false)
    {
        File.Copy(soundbankSourceFilePath, soundbankDestFilePath);
    }
}
```

参考：https://zhuanlan.zhihu.com/p/32055700/

### UniTask支持解决方案

详情参考 [UniTask 配置教程](https://github.com/tuyoogame/YooAsset/tree/main/Assets/YooAsset/Samples~/UniTask%20Sample/README.md)
