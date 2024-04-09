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
        var createParameters = new EditorSimulateModeParameters();
        createParameters.SimulateManifestFilePath = simulateManifestFilePath;
        var initializationOperation = package.InitializeAsync(createParameters);
        yield return initializationOperation;        
    }

    // 美术工程使用HostPlayMode运行方式，通过公司本地的资源服务器来更新。
    {
        var package = YooAssets.CreatePackage("GameArt");
        var createParameters = new HostPlayModeParameters();
        createParameters.BuildinQueryServices = new GameQueryServices(); 
        createParameters.DecryptionServices = new FileOffsetDecryption();
        createParameters.RemoteServices = new RemoteServices(defaultHostServer, fallbackHostServer);
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

```csharp
//首先需要实现资源分发服务类
class DefaultDeliveryQueryServices : IDeliveryQueryServices
{
    //查询文件是否为分发资源，可以使用IO类去查询解压目录下文件是否存在。
    bool Query(string packageName, string fileName, string fileCRC);
    
    //获取分发资源文件的路径
    string GetFilePath(string packageName, string fileName);
}
```

注意事项：

1. ZIP包的下载器需要满足断点续传和文件校验逻辑。
2. ZIP包的解压目录需要开发者自己维护，例如解压目录清空等行为。
3. ZIP包的下载和解压行为需要在YOO启动之前完成。
4. 解压行为建议只执行一次，一般是玩家安装完APP之后启动游戏后执行一次。
5. 解压目录下的文件在游戏启动的时候无法保证文件的完整性，需要开发者自己维护。
6. YOO的底层机制是会优先查询分发资源，然后是沙盒资源，最后是内置资源。

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

1. 确保SBP插件的版本升级到最新。
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
    var operation = package.UpdatePackageVersionAsync(30);
    yield return operation;
    if (operation.Status == EOperationStatus.Succeed)
    {
        // 如果获取远端资源版本成功，说明当前网络连接通畅，可以走正常更新流程。
        ......
    }
    else
    {
        // 如果获取远端资源版本失败，说明当前网络无连接。
        // 在正常开始游戏之前，需要验证本地清单内容的完整性。
        string packageVersion = package.GetPackageVersion();
        var operation = package.PreDownloadContentAsync(packageVersion);
        yield return operation;
        if (operation.Status != EOperationStatus.Succeed)
        {
            ShowMessageBox("请检查本地网络，有新的游戏内容需要更新！");
            yield break;
        }
        
        int downloadingMaxNum = 10;
        int failedTryAgain = 3;
        int timeout = 60;
        var downloader = operation.CreateResourceDownloader(downloadingMaxNum, failedTryAgain, timeout);
        if (downloader.TotalDownloadCount > 0)   
        {
            // 资源内容本地并不完整，需要提示玩家联网更新。
            ShowMessageBox("请检查本地网络，有新的游戏内容需要更新！");
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

首先在项目里定义UNITY_WECHAT_GAME宏，然后将微信插件的程序集引用关联到YooAsset运行时的程序集。

微信小游戏注意事项：

1. 不支持同步加载。
2. 不支持资源加密。
3. 不支持多Package

**关闭WebGL本地缓存***

因为微信小游戏平台的特殊性，需要关闭WebGL的缓存系统，使用微信自带的缓存系统。

```csharp
YooAssets.SetCacheSystemDisableCacheOnWebGL();
```

**注意**：一定要禁止微信对资源清单版本文件进行缓存（文件名称样例：PackageManifest_xxx.version）

**注意：**如果未调用该方法，微信小游戏有内存崩溃的风险！

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
