# Resource Loading

Learn how to use resource loading.

### Method List

- LoadSceneAsync() Asynchronously load a scene
- LoadAssetSync() Synchronously load an asset object
- LoadAssetAsync() Asynchronously load an asset object
- LoadSubAssetsSync() Synchronously load sub-asset objects
- LoadSubAssetsAsync() Asynchronously load sub-asset objects
- LoadAllAssetsSync() Synchronously load all asset objects in a package
- LoadAllAssetsAsync() Asynchronously load all asset objects in a package
- LoadRawFileSync() Synchronously get a raw file
- LoadRawFileAsync() Asynchronously get a raw file

### Common Convention

**Location** is the address of the resource and also the unique identifier for loading resource objects.

- When addressable mode is not enabled, location represents the complete path of the resource object.

```csharp
// Example with an audio file in the project: "Assets/GameRes/Audio/bgMusic.mp3" 
package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic");
```

- When addressable mode is enabled, location represents the addressable address of the resource object.

````csharp
// 以工程内的音频文件为例："Assets/GameRes/Audio/bgMusic.mp3" 
// 需要在资源配置界面启用可寻址功能（Enable Addressable）。
// 配置界面的可寻址规则为AddressByFileName，那么资源定位地址填写文件名称："bgMusic"
package.LoadAssetAsync<AudioClip>("bgMusic");
````

### Matching Loading Paths

````csharp
// 不带扩展名的模糊匹配
package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic");

// 带扩展名的精准匹配
package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
````

### Asynchronous Loading Example

````csharp
// 委托加载方式
void Start()
{
    AssetOperationHandle handle = package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
    handle.Completed += Handle_Completed;
}
void Handle_Completed(AssetOperationHandle handle)
{
    AudioClip audioClip = handle.AssetObject as AudioClip;
}
````
````csharp
// 协程加载方式
IEnumerator Start()
{
    AssetOperationHandle handle = package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
    yield return handle;   
    AudioClip audioClip = handle.AssetObject as AudioClip;
}
````
````csharp
// Task加载方式
async void Start()
{
    AssetOperationHandle handle = package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
    await handle.Task;
    AudioClip audioClip = handle.AssetObject as AudioClip;	
}
````

### Resource Unloading Example

````csharp
IEnumerator Start()
{
    AssetOperationHandle handle = package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
    yield return handle;
    ...
    handle.Release();
}
````

### Resource Release Example

You can call the resource release method after switching scenes or set a timer interval to release resources.

Note: Only when the resource release method is called, the resource object will be removed from memory.

````csharp
private void UnloadAssets()
{
    var package = YooAssets.GetAssetsPackage("DefaultPackage");
    package.UnloadUnusedAssets();
}
````

### Prefab Loading Example

````csharp
IEnumerator Start()
{
    AssetOperationHandle handle = package.LoadAssetAsync<GameObject>("Assets/GameRes/Panel/login.prefab");
    yield return handle;
    GameObject go = handle.InstantiateSync();
    Debug.Log($"Prefab name is {go.name}");
}
````

### Sub-object Loading Example

For example, if you have an atlas created with TexturePacker and you need to access the sprite objects in the atlas, you can use the sub-object loading interface.

````csharp
IEnumerator Start()
{
    SubAssetsOperationHandle handle = package.LoadSubAssetsAsync<Sprite>(location);
    yield return handle;
    var sprite = handle.GetSubAssetObject<Sprite>("spriteName");
    Debug.Log($"Sprite name is {sprite.name}");
}
````

### Loading All Objects in a Package Example

For example, if we have all the configuration files packed into one package, and we want to load and parse all the configuration files at once.

```csharp
IEnumerator Start()
{
    AllAssetsOperationHandle handle = package.LoadAllAssetsAsync<UnityEngine.TextAsset>(location);
    yield return handle;
    foreach(var assetObj in handle.AllAssetObjects)
    {    
        UnityEngine.TextAsset textAsset = assetObj as UnityEngine.TextAsset;
    }
}
```

### Asynchronous Scene Loading Example

Note: When loading a new main scene, the previously loaded main scene and additional scenes will be automatically unloaded.

````csharp
IEnumerator Start()
{
    string location = "Assets/GameRes/Scene/Login";
    var sceneMode = UnityEngine.SceneManagement.LoadSceneMode.Single;
    bool suspendLoad = false;
    SceneOperationHandle handle = package.LoadSceneAsync(location, sceneMode, suspendLoad);
    yield return handle;
    Debug.Log($"Scene name is {handle.Scene.name}");
}
````

### Raw File Loading Example

For example, the initialization file for Wwise.

````csharp
IEnumerator Start()
{
    string location = "Assets/GameRes/wwise/init.bnk";
    RawFileOperationHandle handle = package.LoadRawFileAsync(location);
    yield return handle;
    byte[] fileData = handle.GetRawFileData();
    string fileText = handle.GetRawFileText();
    string filePath = handle.GetRawFilePath();
}
````

### Configuration File Loading Example

````c#
// 自定义的配置文件
public class MyGameConfig: ScriptableObject
{
    ...
}

IEnumerator Start()
{
    string location = "Assets/GameRes/config/gameConfig.asset";
    AssetOperationHandle handle = package.LoadAssetFileAsync(location);
    yield return handle;
    MyGameConfig gameCOnfig = handle.AssetObject as MyGameConfig;
}
````

### Get Resource Information List

Get a list of resource information using resource tags.

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

