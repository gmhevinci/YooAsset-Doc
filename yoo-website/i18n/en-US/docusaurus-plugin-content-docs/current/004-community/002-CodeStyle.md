# Code Contribution

Please follow the guidelines below for code contribution.

### Submission Guidelines

Each PR should only target one improvement or fix. Do not merge multiple changes into one PR.

Try to use English for the PR title, but you can use Chinese for the comments.

### Alignment Guidelines

Use the Tab key for alignment (you can set it in VS).

### Naming Guidelines

[Rule 1-1] Use English words for naming. Avoid using Pinyin or meaningless letters.

[Rule 1-2] Be intuitive and easy to understand. Use English words or phrases that can describe their functionality or have meaning.

[Rule 1-3] Do not use underscore naming convention.

```csharp
int car_type // Incorrect: underscore naming convention.
```

[Rule 1-4] Use **PascalCase** for constants, static fields, classes, structs, non-private fields, and methods.

```csharp
public const float MaxSpeed = 100f; //常量
public static float MaxSpeed = 100f; //静态字段
public class GameClass; //类
public struct GameStruct; //结构体
public string FirstName; //public字段
protected string FirstName; //protected字段
public void SendMessage(string message) {} //方法
```

[Rule 1-5] Use **camelCase** for private fields, method parameters, and local variables.

Note: Private fields should start with an underscore.

```csharp
private string _firstName; //私有字段
public void FindByFirstName(string firstName) {} //方法参数
string firstName; //局部变量
```

[Rule 1-6] Interface naming

Note: Interfaces should start with the letter "I" in uppercase.

```csharp
public interface IState; // Interface
```

[Rule 1-7] Enum naming

Note: Enums should start with the letter "E" in uppercase.

```csharp
public enum EGameType {Simple, Hard} // Enum and enum values
```

### Coding Guidelines

[Rule 2-1] When declaring variables, declare only one variable per line.

```csharp
private string _firstName;
private string _lastName;
```

[Rule 2-2] Place class fields at the top of the class.

```csharp
public class Student 
{
	private string _firstName;
	private string _lastName;

    public string GetFirstName() 
    {
        return _firstFiled;
    }
}
```

[Rule 2-3] Keep the length of a single line of code within the width of the screen. If it exceeds, break it into multiple lines.

### Comment Guidelines

[Rule 3-1] For public methods, use the /// format to automatically generate XML-style comments. Include method description, parameter meanings, and return content.

Note: Private methods can be exempt from comments.

```csharp
/// <summary>
/// 设置场景名称
/// </summary>
/// <param name="sceneName">场景名</param>
/// <returns>如果设置成功返回True</returns>
public bool SetSceneName(string sceneName)
{
}
```

[Rule 3-2] For public fields, use the /// format to automatically generate XML-style comments.

Note: Private fields can be exempt from comments.

```csharp
public class SceneManager
{
    /// <summary>
    /// 场景的名字
    /// </summary>
    public string SceneName;
}
```

[Rule 3-3] For private fields, place comments after the code, separated by a space.

```csharp
public class Student
{
   	private string _firstName; //姓氏
	private string _lastName; //姓名
}
```

[Rule 3-4] Comment blocks within methods.

```csharp
public void UpdateHost
{
    // 和服务器通信
    ...
        
    // 检测通信结果
    ...
        
    // 分析数据
    ...
}
```
