---
title: Class EditorTools
sidebar_label: EditorTools
description: "Editor Tools Class"
---
# Class EditorTools
Editor Tools Class

###### **Assembly**: YooAsset.Editor.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L17)
```csharp title="Declaration"
public static class EditorTools
```
## Methods
### GetAssignableTypes(Type)
Get the types of all classes with inheritance relationships
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
Invoke private static methods
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L76)
```csharp title="Declaration"
public static object InvokeNonPublicStaticMethod(Type type, string method, params object[] parameters)
```

##### Returns

`System.Object`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *type* | Type of the class |
| `System.String` | *method* | Name of the method to be called in the class |
| `System.Object[]` | *parameters* | Parameters passed to the method |

### InvokePublicStaticMethod(Type, string, params object[])
Invoke public static methods
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L93)
```csharp title="Declaration"
public static object InvokePublicStaticMethod(Type type, string method, params object[] parameters)
```

##### Returns

`System.Object`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *type* | Type of the class |
| `System.String` | *method* | Name of the method to be called in the class |
| `System.Object[]` | *parameters* | Parameters passed to the method |

### FindAssets(EAssetSearchType, string[])
Collect assets
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L112)
```csharp title="Declaration"
public static string[] FindAssets(EAssetSearchType searchType, string[] searchInFolders)
```

##### Returns

`System.String[]`: List of collected asset paths
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.Editor.EAssetSearchType](../YooAsset.Editor/EAssetSearchType.md) | *searchType* | Type of assets to collect |
| `System.String[]` | *searchInFolders* | List of folders to search in |

### FindAssets(EAssetSearchType, string)
Collect assets
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L150)
```csharp title="Declaration"
public static string[] FindAssets(EAssetSearchType searchType, string searchInFolder)
```

##### Returns

`System.String[]`: List of collected asset paths
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [YooAsset.Editor.EAssetSearchType](../YooAsset.Editor/EAssetSearchType.md) | *searchType* | Type of assets to collect |
| `System.String` | *searchInFolder* | Folder to search in |

### OpenFolderPanel(string, string, string)
Open the search panel
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L161)
```csharp title="Declaration"
public static string OpenFolderPanel(string title, string defaultPath, string defaultName = "")
```

##### Returns

`System.String`: Absolute path of the selected folder, returns NULL if invalid
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *title* | Title name |
| `System.String` | *defaultPath* | Default search path |
| `System.String` | *defaultName* |  |

### OpenFilePath(string, string, string)
Open the search panel
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L181)
```csharp title="Declaration"
public static string OpenFilePath(string title, string defaultPath, string extension = "")
```

##### Returns

`System.String`: Absolute path of the selected file, returns NULL if invalid
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *title* | Title name |
| `System.String` | *defaultPath* | Default search path |
| `System.String` | *extension* |  |

### DisplayProgressBar(string, int, int)
Display a progress bar
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
Hide the progress bar
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
Clear the console
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
Create the directory where the file is located
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L322)
```csharp title="Declaration"
public static void CreateFileDirectory(string filePath)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *filePath* | File path |

### CreateDirectory(string)
Create a directory
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
Delete a directory and its subdirectories
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
File Rename
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
Move File
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
Copy Directory
Note: Including files from all subdirectories
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
Copy File
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
Clear Folder
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L432)
```csharp title="Declaration"
public static void ClearFolder(string directoryPath)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *directoryPath* |

### GetFileSize(string)
Get File Size in bytes
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
Read all text content of a file
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
Read all lines of text content
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
Check if the AssetBundle file is valid
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
Get the regular path
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
Get the project's project path
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L528)
```csharp title="Declaration"
public static string GetProjectPath()
```

##### Returns

`System.String`
### AbsolutePathToAssetPath(string)
Convert the absolute path of a file to a Unity asset path
For example, replace D:\\YourPorject\\Assets\\Works\\file.txt with Assets/Works/file.txt
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
Converts Unity asset path to the absolute file path.
For example: Replace Assets/Works/file.txt with D:\\YourProject/Assets/Works/file.txt
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
Recursively finds the target folder path.
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L560)
```csharp title="Declaration"
public static string FindFolder(string root, string folderName)
```

##### Returns

`System.String`: Returns the found folder path, or an empty string if not found.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *root* | The root directory to search. |
| `System.String` | *folderName* | The name of the target folder. |

### Substring(string, string, bool, bool)
Substring a string.
Get the content after the matched key.
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Editor/EditorTools.cs#L585)
```csharp title="Declaration"
public static string Substring(string content, string key, bool includeKey, bool firstMatch = true)
```

##### Returns

`System.String`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *content* | The content. |
| `System.String` | *key* | The keyword. |
| `System.Boolean` | *includeKey* | Whether the result includes the keyword. |
| `System.Boolean` | *firstMatch* |  |
