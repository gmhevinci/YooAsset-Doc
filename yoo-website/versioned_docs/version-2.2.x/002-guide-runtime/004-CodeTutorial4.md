# 资源加载

学习资源加载的使用方法。

### 方法列表

- LoadSceneAsync() 异步加载场景
- LoadAssetSync() 同步加载资源对象
- LoadAssetAsync() 异步加载资源对象
- LoadSubAssetsSync() 同步加载子资源对象
- LoadSubAssetsAsync() 异步加载子资源对象
- LoadAllAssetsSync() 同步加载资源包内所有资源对象
- LoadAllAssetsAsync() 异步加载资源包内所有资源对象
- LoadRawFileSync() 同步获取原生文件
- LoadRawFileAsync() 异步获取原生文件

### 统一约定

**Location**为资源的定位地址，也是加载资源对象的唯一标识符。

- 在未开启可寻址模式下，location代表的是资源对象的完整路径。

```csharp
// 以工程内的音频文件为例："Assets/GameRes/Audio/bgMusic.mp3" 
package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic");
```

- 在开启可寻址模式下，location代表的是资源对象可寻址地址。

  注意：可寻址模式下，也支持使用完整的资源路径来加载。

````csharp
// 以工程内的音频文件为例："Assets/GameRes/Audio/bgMusic.mp3" 
// 需要在资源配置界面启用可寻址功能（Enable Addressable）。
// 配置界面的可寻址规则为AddressByFileName，那么资源定位地址填写文件名称："bgMusic"
package.LoadAssetAsync<AudioClip>("bgMusic");
````

### 加载路径的匹配

````csharp
// 不带扩展名的模糊匹配
package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic");

// 带扩展名的精准匹配
package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
````

### 异步加载范例

````csharp
// 委托加载方式
void Start()
{
    AssetHandle handle = package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
    handle.Completed += Handle_Completed;
}
void Handle_Completed(AssetHandle handle)
{
    AudioClip audioClip = handle.AssetObject as AudioClip;
}
````
````csharp
// 协程加载方式
IEnumerator Start()
{
    AssetHandle handle = package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
    yield return handle;   
    AudioClip audioClip = handle.AssetObject as AudioClip;
}
````
````csharp
// Task加载方式
async void Start()
{
    AssetHandle handle = package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
    await handle.Task;
    AudioClip audioClip = handle.AssetObject as AudioClip;	
}
````


### 预制体加载范例

````csharp
IEnumerator Start()
{
    AssetHandle handle = package.LoadAssetAsync<GameObject>("Assets/GameRes/Panel/login.prefab");
    yield return handle;
    GameObject go = handle.InstantiateSync();
    Debug.Log($"Prefab name is {go.name}");
}
````

### 子对象加载范例

例如：通过TexturePacker创建的图集，如果需要访问图集的精灵对象，可以通过子对象加载接口。

````csharp
IEnumerator Start()
{
    SubAssetsHandle handle = package.LoadSubAssetsAsync<Sprite>(location);
    yield return handle;
    var sprite = handle.GetSubAssetObject<Sprite>("spriteName");
    Debug.Log($"Sprite name is {sprite.name}");
}
````

### 资源包内所有对象加载范例

例如：我们将所有配置表打进了一个资源包里，我们想把所有配置文件一次性全部加载出来解析。

```csharp
IEnumerator Start()
{
    // 注意：location只需要填写资源包里的任意资源地址。
    AllAssetsHandle handle = package.LoadAllAssetsAsync<UnityEngine.TextAsset>(location);
    yield return handle;
    foreach(var assetObj in handle.AllAssetObjects)
    {    
        UnityEngine.TextAsset textAsset = assetObj as UnityEngine.TextAsset;
    }
}
```

### 场景异步加载范例

注意：当加载新的主场景的时候，会自动释放之前加载的主场景以及附加场景。

````csharp
IEnumerator Start()
{
    string location = "Assets/GameRes/Scene/Login";
    var sceneMode = UnityEngine.SceneManagement.LoadSceneMode.Single;
    var physicsMode = LocalPhysicsMode.None;
    bool suspendLoad = false;
    SceneHandle handle = package.LoadSceneAsync(location, sceneMode, physicsMode, suspendLoad);
    yield return handle;
    Debug.Log($"Scene name is {handle.Scene.name}");
}
````

### 原生文件加载范例

**注意：原生文件必须使用原生构建管线来构建。**

例如：wwise的初始化文件

````csharp
IEnumerator Start()
{
    // 注意：该Package必须是原生文件构建管线构建的资源包裹。
    string location = "Assets/GameRes/wwise/init.bnk";
    RawFileHandle handle = package.LoadRawFileAsync(location);
    yield return handle;
    byte[] fileData = handle.GetRawFileData();
    string fileText = handle.GetRawFileText();
    string filePath = handle.GetRawFilePath();
}
````

### 配置文件加载范例

````csharp
// 自定义的配置文件
public class MyGameConfig: ScriptableObject
{
    ...
}

IEnumerator Start()
{
    string location = "Assets/GameRes/config/gameConfig.asset";
    AssetHandle handle = package.LoadAssetAsync(location);
    yield return handle;
    MyGameConfig gameCOnfig = handle.AssetObject as MyGameConfig;
}
````

### 热更脚本加载范例

如果使用的是Lua或者ILRuntime，HybirdCLR热更方式，可以将Lua或者Hotfix.dll的文件格式修改为.bytes

```csharp
IEnumerator Start()
{
    AssetHandle handle = package.LoadAssetAsync<TextAsset>("Assets/GameRes/Hotfix.bytes");
    yield return handle;
    TextAsset textAsset = handle.AssetObject as TextAsset;
    //textAsset.bytes 二进制数据
    //textAsset.text 文本数据
}
```

### 获取资源信息列表

通过资源标签来获取资源信息列表。

````csharp
void GetAssetInfosByTag(string tag)
{
    AssetInfo[] assetInfos = package.GetAssetInfos(tag);
    foreach (var assetInfo in assetInfos)
    {
        Debug.Log(assetInfo.AssetPath);
    }
}
````

获取所有的资源信息列表。

````csharp
void GetAllAssetInfos()
{
    AssetInfo[] assetInfos = package.GetAllAssetInfos();
    foreach (var assetInfo in assetInfos)
    {
        Debug.Log(assetInfo.AssetPath);
    }
}
````

### 检测资源是否需要更新下载

````csharp
{
    bool isNeedDownload = package.IsNeedDownloadFromRemote(location);
}
````

