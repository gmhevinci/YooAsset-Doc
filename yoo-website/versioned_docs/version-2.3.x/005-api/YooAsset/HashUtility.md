---
title: Class HashUtility
sidebar_label: HashUtility
description: "哈希工具类"
---
# Class HashUtility
哈希工具类

###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L192)
```csharp title="Declaration"
public static class HashUtility
```
## Methods
### StringSHA1(string)
获取字符串的Hash值
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L205)
```csharp title="Declaration"
public static string StringSHA1(string str)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *str* |

### FileSHA1(string)
获取文件的Hash值
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L214)
```csharp title="Declaration"
public static string FileSHA1(string filePath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### FileSHA1Safely(string)
获取文件的Hash值
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L225)
```csharp title="Declaration"
public static string FileSHA1Safely(string filePath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### StreamSHA1(Stream)
获取数据流的Hash值
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L241)
```csharp title="Declaration"
public static string StreamSHA1(Stream stream)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.IO.Stream` | *stream* |

### BytesSHA1(byte[])
获取字节数组的Hash值
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L252)
```csharp title="Declaration"
public static string BytesSHA1(byte[] buffer)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte[]` | *buffer* |

### StringMD5(string)
获取字符串的MD5
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L265)
```csharp title="Declaration"
public static string StringMD5(string str)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *str* |

### FileMD5(string)
获取文件的MD5
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L274)
```csharp title="Declaration"
public static string FileMD5(string filePath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### FileMD5Safely(string)
获取文件的MD5
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L285)
```csharp title="Declaration"
public static string FileMD5Safely(string filePath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### StreamMD5(Stream)
获取数据流的MD5
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L301)
```csharp title="Declaration"
public static string StreamMD5(Stream stream)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.IO.Stream` | *stream* |

### BytesMD5(byte[])
获取字节数组的MD5
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L311)
```csharp title="Declaration"
public static string BytesMD5(byte[] buffer)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte[]` | *buffer* |

### StringCRC32(string)
获取字符串的CRC32
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L323)
```csharp title="Declaration"
public static string StringCRC32(string str)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *str* |

### FileCRC32(string)
获取文件的CRC32
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L332)
```csharp title="Declaration"
public static string FileCRC32(string filePath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### FileCRC32Safely(string)
获取文件的CRC32
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L343)
```csharp title="Declaration"
public static string FileCRC32Safely(string filePath)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *filePath* |

### StreamCRC32(Stream)
获取数据流的CRC32
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L359)
```csharp title="Declaration"
public static string StreamCRC32(Stream stream)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.IO.Stream` | *stream* |

### BytesCRC32(byte[])
获取字节数组的CRC32
###### [View Source](https://github.com/tuyoogame/YooAsset-Samples.git/blob/main/Assets/YooAsset/Runtime/Utility/YooUtility.cs#L369)
```csharp title="Declaration"
public static string BytesCRC32(byte[] buffer)
```

##### Returns

`System.String`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte[]` | *buffer* |

