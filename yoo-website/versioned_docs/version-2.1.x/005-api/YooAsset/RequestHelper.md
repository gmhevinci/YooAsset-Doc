---
title: Class RequestHelper
sidebar_label: RequestHelper
---
# Class RequestHelper


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public class RequestHelper
```
## Methods
### RecordRequestFailed(string, string)
记录请求失败事件

```csharp title="Declaration"
public static void RecordRequestFailed(string packageName, string eventName)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *eventName* |

### GetRequestFailedCount(string, string)
获取请求失败的次数

```csharp title="Declaration"
public static int GetRequestFailedCount(string packageName, string eventName)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *packageName* |
| `System.String` | *eventName* |

