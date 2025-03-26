---
title: Interface IWechatQueryServices
sidebar_label: IWechatQueryServices
---
# Interface IWechatQueryServices


###### **Assembly**: YooAsset.dll

```csharp title="Declaration"
public interface IWechatQueryServices
```
## Methods
### Query(string, string, string)
查询是否为微信缓存的资源文件

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

