---
title: Class EditorTools
sidebar_label: EditorTools
---
# Class EditorTools


###### **Assembly**: YooAsset.Editor.dll

```csharp title="Declaration"
public static class EditorTools
```
## Methods
### GetAssignableTypes(Type)


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


```csharp title="Declaration"
public static object InvokeNonPublicStaticMethod(Type type, string method, params object[] parameters)
```

##### Returns

`System.Object`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Type` | *type* |
| `System.String` | *method* |
| `System.Object[]` | *parameters* |

### InvokePublicStaticMethod(Type, string, params object[])


```csharp title="Declaration"
public static object InvokePublicStaticMethod(Type type, string method, params object[] parameters)
```

##### Returns

`System.Object`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Type` | *type* |
| `System.String` | *method* |
| `System.Object[]` | *parameters* |

### FindAssets(EAssetSearchType, string[])


```csharp title="Declaration"
public static string[] FindAssets(EAssetSearchType searchType, string[] searchInFolders)
```

##### Returns

`System.String[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.EAssetSearchType](../YooAsset.Editor/EAssetSearchType.md) | *searchType* |
| `System.String[]` | *searchInFolders* |

### FindAssets(EAssetSearchType, string)


```csharp title="Declaration"
public static string[] FindAssets(EAssetSearchType searchType, string searchInFolder)
```

##### Returns

`System.String[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| [YooAsset.Editor.EAssetSearchType](../YooAsset.Editor/EAssetSearchType.md) | *searchType* |
| `System.String` | *searchInFolder* |

### OpenFolderPanel(string, string, string)


```csharp title="Declaration"
public static string OpenFolderPanel(string title, string defaultPath, string defaultName = "")
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *title* |
| `System.String` | *defaultPath* |
| `System.String` | *defaultName* |

### OpenFilePath(string, string, string)


```csharp title="Declaration"
public static string OpenFilePath(string title, string defaultPath, string extension = "")
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *title* |
| `System.String` | *defaultPath* |
| `System.String` | *extension* |

### DisplayProgressBar(string, int, int)


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


```csharp title="Declaration"
public static void ClearUnityConsole()
```
### HasDirtyScenes()


```csharp title="Declaration"
public static bool HasDirtyScenes()
```

##### Returns

`System.Boolean`
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


```csharp title="Declaration"
public static void CreateFileDirectory(string filePath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### CreateDirectory(string)


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


```csharp title="Declaration"
public static void FileRename(string filePath, string newName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |
| `System.String` | *newName* |

### MoveFile(string, string)


```csharp title="Declaration"
public static void MoveFile(string filePath, string destPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |
| `System.String` | *destPath* |

### CopyDirectory(string, string)


```csharp title="Declaration"
public static void CopyDirectory(string sourcePath, string destPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *sourcePath* |
| `System.String` | *destPath* |

### CopyFile(string, string, bool)


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


```csharp title="Declaration"
public static void ClearFolder(string directoryPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *directoryPath* |

### GetFileSize(string)


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


```csharp title="Declaration"
public static string GetProjectPath()
```

##### Returns

`System.String`
### AbsolutePathToAssetPath(string)


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


```csharp title="Declaration"
public static string FindFolder(string root, string folderName)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *root* |
| `System.String` | *folderName* |

### Substring(string, string, bool, bool)


```csharp title="Declaration"
public static string Substring(string content, string key, bool includeKey, bool firstMatch = true)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *content* |
| `System.String` | *key* |
| `System.Boolean` | *includeKey* |
| `System.Boolean` | *firstMatch* |

