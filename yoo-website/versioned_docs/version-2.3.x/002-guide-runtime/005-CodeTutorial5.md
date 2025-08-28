# 资源卸载

学习资源卸载的使用方法。

### 资源句柄释放

每个资源对象加载方法都会返回一个资源句柄，开发者需要在该资源不再使用的时候释放该句柄，否则会造成资源泄露（一直存在内中当中）

````csharp
IEnumerator Start()
{
    // 资源句柄释放可以减少该资源的引用计数，当资源引用计数为零的时候，可以使用资源卸载方法卸载资源包。
    AssetHandle handle = package.LoadAssetAsync<AudioClip>("Assets/GameRes/Audio/bgMusic.mp3");
    yield return handle;
    ...
    handle.Release();
}
````

### 资源卸载范例

````csharp
// 卸载所有引用计数为零的资源包。
// 可以在切换场景之后调用资源释放方法或者写定时器间隔时间去释放。
// 备注：支持同步操作。
private IEnumerator UnloadUnusedAssets()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var operation = package.UnloadUnusedAssetsAsync();
    operation.WaitForAsyncComplete(); //支持同步操作
    yield return operation;
}

// 强制卸载所有资源包，该方法请在合适的时机调用。
// 注意：Package在销毁的时候也会自动调用该方法。
// 备注：不支持同步操作。
private IEnumerator ForceUnloadAllAssets()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    var operation = package.UnloadAllAssetsAsync();
    yield return operation;
}

// 尝试卸载指定的资源对象
// 注意：如果该资源还在被使用，该方法会无效。
private void TryUnloadUnusedAsset()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    package.TryUnloadUnusedAsset("Assets/GameRes/Panel/login.prefab");
}
````

### 场景卸载范例

```csharp
IEnumerator Start()
{
    // 异步加载场景
    var sceneHandle = package.LoadSceneAsync("Assets/GameRes/Scene/scene_home");
    yield return handle;
    
    ...
    
    // 场景卸载成功后，会自动释放该handle的引用计数！
    // 当前必须保留一个场景，无法卸载最后的场景！
    var operation = sceneHandle.UnloadAsync();
    yield return operation;
}
```

