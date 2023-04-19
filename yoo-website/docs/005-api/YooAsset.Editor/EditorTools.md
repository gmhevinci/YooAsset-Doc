---
title: Class EditorTools
sidebar_label: EditorTools
description: "编辑器工具类"
---
# Class EditorTools
编辑器工具类

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L17)
```csharp title="Declaration"
public static class EditorTools
```
## Methods
### GetAssignableTypes(Type)
获取带继承关系的所有类的类型
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L53)
```csharp title="Declaration"
public static List<Type> GetAssignableTypes(Type parentType)
```

##### Returns

`System.Collections.Generic.List<System.Type>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Type` | *parentType* |

### InvokeNonPublicStaticMethod(Type, string, params object[])
调用私有的静态方法
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L76)
```csharp title="Declaration"
public static object InvokeNonPublicStaticMethod(Type type, string method, params object[] parameters)
```

##### Returns

`System.Object`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *type* | 类的类型 |
| `System.String` | *method* | 类里要调用的方法名 |
| `System.Object[]` | *parameters* | 调用方法传入的参数 |

### InvokePublicStaticMethod(Type, string, params object[])
调用公开的静态方法
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L93)
```csharp title="Declaration"
public static object InvokePublicStaticMethod(Type type, string method, params object[] parameters)
```

##### Returns

`System.Object`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *type* | 类的类型 |
| `System.String` | *method* | 类里要调用的方法名 |
| `System.Object[]` | *parameters* | 调用方法传入的参数 |

### FindAssets(EAssetSearchType, string[])
搜集资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L112)
```csharp title="Declaration"
public static string[] FindAssets(EAssetSearchType searchType, string[] searchInFolders)
```

##### Returns

`System.String[]`: 返回搜集到的资源路径列表
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.Editor.EAssetSearchType](../YooAsset.Editor/EAssetSearchType.md) | *searchType* | 搜集的资源类型 |
| `System.String[]` | *searchInFolders* | 指定搜索的文件夹列表 |

### FindAssets(EAssetSearchType, string)
搜集资源
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L150)
```csharp title="Declaration"
public static string[] FindAssets(EAssetSearchType searchType, string searchInFolder)
```

##### Returns

`System.String[]`: 返回搜集到的资源路径列表
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.Editor.EAssetSearchType](../YooAsset.Editor/EAssetSearchType.md) | *searchType* | 搜集的资源类型 |
| `System.String` | *searchInFolder* | 指定搜索的文件夹 |

### OpenFolderPanel(string, string, string)
打开搜索面板
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L161)
```csharp title="Declaration"
public static string OpenFolderPanel(string title, string defaultPath, string defaultName = "")
```

##### Returns

`System.String`: 返回选择的文件夹绝对路径，如果无效返回NULL
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *title* | 标题名称 |
| `System.String` | *defaultPath* | 默认搜索路径 |
| `System.String` | *defaultName* |  |

### OpenFilePath(string, string, string)
打开搜索面板
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L181)
```csharp title="Declaration"
public static string OpenFilePath(string title, string defaultPath, string extension = "")
```

##### Returns

`System.String`: 返回选择的文件绝对路径，如果无效返回NULL
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *title* | 标题名称 |
| `System.String` | *defaultPath* | 默认搜索路径 |
| `System.String` | *extension* |  |

### DisplayProgressBar(string, int, int)
显示进度框
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L198)
```csharp title="Declaration"
public static void DisplayProgressBar(string tips, int progressValue, int totalValue)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *tips* |
| `System.Int32` | *progressValue* |
| `System.Int32` | *totalValue* |

### ClearProgressBar()
隐藏进度框
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L206)
```csharp title="Declaration"
public static void ClearProgressBar()
```
### FocusUnitySceneWindow()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L213)
```csharp title="Declaration"
public static void FocusUnitySceneWindow()
```
### CloseUnityGameWindow()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L217)
```csharp title="Declaration"
public static void CloseUnityGameWindow()
```
### FocusUnityGameWindow()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L222)
```csharp title="Declaration"
public static void FocusUnityGameWindow()
```
### FocueUnityProjectWindow()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L227)
```csharp title="Declaration"
public static void FocueUnityProjectWindow()
```
### FocusUnityHierarchyWindow()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L232)
```csharp title="Declaration"
public static void FocusUnityHierarchyWindow()
```
### FocusUnityInspectorWindow()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L237)
```csharp title="Declaration"
public static void FocusUnityInspectorWindow()
```
### FocusUnityConsoleWindow()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L242)
```csharp title="Declaration"
public static void FocusUnityConsoleWindow()
```
### ClearUnityConsole()
清空控制台
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L268)
```csharp title="Declaration"
public static void ClearUnityConsole()
```
### HasDirtyScenes()

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L275)
```csharp title="Declaration"
public static bool HasDirtyScenes()
```

##### Returns

`System.Boolean`
### StringToStringList(string, char)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L289)
```csharp title="Declaration"
public static List<string> StringToStringList(string str, char separator)
```

##### Returns

`System.Collections.Generic.List<System.String>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *str* |
| `System.Char` | *separator* |

### NameToEnum&lt;T&gt;(string)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L307)
```csharp title="Declaration"
public static T NameToEnum<T>(string name)
```

##### Returns

`<T>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *name* |

##### Type Parameters
* `T`
### CreateFileDirectory(string)
创建文件所在的目录
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L322)
```csharp title="Declaration"
public static void CreateFileDirectory(string filePath)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *filePath* | 文件路径 |

### CreateDirectory(string)
创建文件夹
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L331)
```csharp title="Declaration"
public static bool CreateDirectory(string directory)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *directory* |

### DeleteDirectory(string)
删除文件夹及子目录
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L347)
```csharp title="Declaration"
public static bool DeleteDirectory(string directory)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *directory* |

### FileRename(string, string)
文件重命名
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L363)
```csharp title="Declaration"
public static void FileRename(string filePath, string newName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |
| `System.String` | *newName* |

### MoveFile(string, string)
移动文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L383)
```csharp title="Declaration"
public static void MoveFile(string filePath, string destPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |
| `System.String` | *destPath* |

### CopyDirectory(string, string)
拷贝文件夹
注意：包括所有子目录的文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L396)
```csharp title="Declaration"
public static void CopyDirectory(string sourcePath, string destPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *sourcePath* |
| `System.String` | *destPath* |

### CopyFile(string, string, bool)
拷贝文件
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L416)
```csharp title="Declaration"
public static void CopyFile(string sourcePath, string destPath, bool overwrite)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *sourcePath* |
| `System.String` | *destPath* |
| `System.Boolean` | *overwrite* |

### ClearFolder(string)
清空文件夹
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L432)
```csharp title="Declaration"
public static void ClearFolder(string directoryPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *directoryPath* |

### GetFileSize(string)
获取文件字节大小
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L455)
```csharp title="Declaration"
public static long GetFileSize(string filePath)
```

##### Returns

`System.Int64`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### ReadFileAllText(string)
读取文件的所有文本内容
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L464)
```csharp title="Declaration"
public static string ReadFileAllText(string filePath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### ReadFileAllLine(string)
读取文本的所有文本内容
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L475)
```csharp title="Declaration"
public static string[] ReadFileAllLine(string filePath)
```

##### Returns

`System.String[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### CheckBundleFileValid(byte[])
检测AssetBundle文件是否合法
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L486)
```csharp title="Declaration"
public static bool CheckBundleFileValid(byte[] fileData)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte[]` | *fileData* |

### GetRegularPath(string)
获取规范的路径
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L520)
```csharp title="Declaration"
public static string GetRegularPath(string path)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *path* |

### GetProjectPath()
获取项目工程路径
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L528)
```csharp title="Declaration"
public static string GetProjectPath()
```

##### Returns

`System.String`
### AbsolutePathToAssetPath(string)
转换文件的绝对路径为Unity资源路径
例如 D:\\YourPorject\\Assets\\Works\\file.txt 替换为 Assets/Works/file.txt
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L538)
```csharp title="Declaration"
public static string AbsolutePathToAssetPath(string absolutePath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *absolutePath* |

### AssetPathToAbsolutePath(string)
转换Unity资源路径为文件的绝对路径
例如：Assets/Works/file.txt 替换为 D:\\YourPorject/Assets/Works/file.txt
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L548)
```csharp title="Declaration"
public static string AssetPathToAbsolutePath(string assetPath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *assetPath* |

### FindFolder(string, string)
递归查找目标文件夹路径
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L560)
```csharp title="Declaration"
public static string FindFolder(string root, string folderName)
```

##### Returns

`System.String`: 返回找到的文件夹路径，如果没有找到返回空字符串
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *root* | 搜索的根目录 |
| `System.String` | *folderName* | 目标文件夹名称 |

### Substring(string, string, bool, bool)
截取字符串
获取匹配到的后面内容
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L585)
```csharp title="Declaration"
public static string Substring(string content, string key, bool includeKey, bool firstMatch = true)
```

##### Returns

`System.String`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *content* | 内容 |
| `System.String` | *key* | 关键字 |
| `System.Boolean` | *includeKey* | 分割的结果里是否包含关键字 |
| `System.Boolean` | *firstMatch* |  |

