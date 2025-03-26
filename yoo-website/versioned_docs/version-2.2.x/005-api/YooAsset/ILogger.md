---
title: Interface ILogger
sidebar_label: ILogger
description: "自定义日志处理"
---
# Interface ILogger
自定义日志处理

###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public interface ILogger
```
## Methods
### Log(string)


```csharp title="Declaration"
void Log(string message)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *message* |

### Warning(string)


```csharp title="Declaration"
void Warning(string message)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *message* |

### Error(string)


```csharp title="Declaration"
void Error(string message)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *message* |

### Exception(Exception)


```csharp title="Declaration"
void Exception(Exception exception)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Exception` | *exception* |

