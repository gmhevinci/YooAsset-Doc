---
title: Interface IDeliveryQueryServices
sidebar_label: IDeliveryQueryServices
---
# Interface IDeliveryQueryServices


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public interface IDeliveryQueryServices
```
## Methods
### Query(string, string, string)
查询是否为开发者分发的资源文件

```csharp title="Declaration"
bool Query(string packageName, string fileName, string fileCRC)
```

##### Returns

`System.Boolean`: 返回查询结果
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 包裹名称 |
| `System.String` | *fileName* | 文件名称（包含文件的后缀格式） |
| `System.String` | *fileCRC* | 文件哈希值 |

### GetFilePath(string, string)
获取分发资源文件的路径

```csharp title="Declaration"
string GetFilePath(string packageName, string fileName)
```

##### Returns

`System.String`: 返回资源文件的路径
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *packageName* | 包裹名称 |
| `System.String` | *fileName* | 文件名称（包含文件的后缀格式） |

