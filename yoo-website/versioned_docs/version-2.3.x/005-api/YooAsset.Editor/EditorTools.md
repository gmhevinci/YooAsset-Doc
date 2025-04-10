---
title: Class EditorTools
sidebar_label: EditorTools
description: "编辑器工具类"
---
# Class EditorTools
编辑器工具类

###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public static class EditorTools
```
## Methods
### GetAssignableTypes(Type)
获取带继承关系的所有类的类型

```csharp title="Declaration"
public static List<Type> GetAssignableTypes(Type parentType)
```

##### Returns

`System.Collections.Generic.List<System.Type>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Type` | *parentType* |

### GetTypesWithAttribute(Type)
获取带有指定属性的所有类的类型

```csharp title="Declaration"
public static List<Type> GetTypesWithAttribute(Type attrType)
```

##### Returns

`System.Collections.Generic.List<System.Type>`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Type` | *attrType* |

### InvokeNonPublicStaticMethod(Type, string, params object[])
调用私有的静态方法

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

### GetPackageManagerYooVersion()


```csharp title="Declaration"
public static string GetPackageManagerYooVersion()
```

##### Returns

`System.String`
### FindAssets(EAssetSearchType, string[])
搜集资源

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

```csharp title="Declaration"
public static void ClearProgressBar()
```
### FocusUnitySceneWindow()


```csharp title="Declaration"
public static void FocusUnitySceneWindow()
```
### CloseUnityGameWindow()


```csharp title="Declaration"
public static void CloseUnityGameWindow()
```
### FocusUnityGameWindow()


```csharp title="Declaration"
public static void FocusUnityGameWindow()
```
### FocueUnityProjectWindow()


```csharp title="Declaration"
public static void FocueUnityProjectWindow()
```
### FocusUnityHierarchyWindow()


```csharp title="Declaration"
public static void FocusUnityHierarchyWindow()
```
### FocusUnityInspectorWindow()


```csharp title="Declaration"
public static void FocusUnityInspectorWindow()
```
### FocusUnityConsoleWindow()


```csharp title="Declaration"
public static void FocusUnityConsoleWindow()
```
### ClearUnityConsole()
清空控制台

```csharp title="Declaration"
public static void ClearUnityConsole()
```
### HasDirtyScenes()


```csharp title="Declaration"
public static bool HasDirtyScenes()
```

##### Returns

`System.Boolean`
### RemoveFirstChar(string)


```csharp title="Declaration"
public static string RemoveFirstChar(string str)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *str* |

### RemoveLastChar(string)


```csharp title="Declaration"
public static string RemoveLastChar(string str)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *str* |

### StringToStringList(string, char)


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

```csharp title="Declaration"
public static void CreateFileDirectory(string filePath)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *filePath* | 文件路径 |

### CreateDirectory(string)
创建文件夹

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

```csharp title="Declaration"
public static void ClearFolder(string directoryPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *directoryPath* |

### GetFileSize(string)
获取文件字节大小

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

```csharp title="Declaration"
public static string GetRegularPath(string path)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *path* |

### RemoveExtension(string)
移除路径里的后缀名

```csharp title="Declaration"
public static string RemoveExtension(string str)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *str* |

### GetProjectPath()
获取项目工程路径

```csharp title="Declaration"
public static string GetProjectPath()
```

##### Returns

`System.String`
### AbsolutePathToAssetPath(string)
转换文件的绝对路径为Unity资源路径
例如 D:\\YourPorject\\Assets\\Works\\file.txt 替换为 Assets/Works/file.txt

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

