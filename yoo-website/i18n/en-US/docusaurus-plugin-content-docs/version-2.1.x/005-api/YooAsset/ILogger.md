---
title: Interface ILogger
sidebar_label: ILogger
description: "自定义日志处理"
---
# Interface ILogger
自定义日志处理

###### **Assembly**: YooAsset.dll
###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Utility/YooLogger.cs#L8)
```csharp title="Declaration"
public interface ILogger
```
## Methods
### Log(string)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Utility/YooLogger.cs#L10)
```csharp title="Declaration"
void Log(string message)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *message* |

### Warning(string)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Utility/YooLogger.cs#L11)
```csharp title="Declaration"
void Warning(string message)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *message* |

### Error(string)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Utility/YooLogger.cs#L12)
```csharp title="Declaration"
void Error(string message)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *message* |

### Exception(Exception)

###### [View Source](https://github.com/tuyoogame/YooAsset/blob/main/Assets/YooAsset/Runtime/Utility/YooLogger.cs#L13)
```csharp title="Declaration"
void Exception(Exception exception)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Exception` | *exception* |

