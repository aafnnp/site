---
date: "2020-05-21"
title: "Go-HelloWorld"
tags: go
---
## 搭建开发环境
让我们创建一个目录，在该目录中编写我们的hello world程序。打开终端并运行以下命令。

``` shell
mkdir ~/Documents/learngo/  
```

上面的命令将learngo在当前用户的Documents目录中创建一个名为目录。

### 你好，世界
使用您喜欢的文本编辑器main.go在learngo目录中创建一个名为以下内容的文件。
``` go
package main

import "fmt"

func main() {  
    fmt.Println("Hello World")
} 
```
按照Go中的约定，将包含main函数的文件命名为main.go。

### 运行程序

1. go install
``` shell
cd ~/Documents/learngo/  
go install
#此命令将编译程序并将编译好的二进制文件复制到~/go/bin内
ls -al ~/go/bin/

~/go/bin/learngo
#输出hello world
```

2. go build
``` shell
cd ~/Documents/learngo/  
go build  
#上面的命令将learngo在当前目录中创建一个二进制文件。ls -al将显示learngo已创建一个名为的文件。
./learngo
#输出Hello World
```
3. go run

cd ~/Documents/learngo/在终端中键入命令以将当前目录更改为learngo。
``` shell
go run main.go  
Hello World
#go run和go build/go install命令之间的细微差别是，go run需要.go文件名作为参数。
```  
go run工作原理非常相似go build。无需将程序编译并安装到当前目录，而是将文件编译到一个临时位置并从该位置运行文件。如果您想知道go run将文件编译到的位置，请go run使用--work参数运行。
``` shell
go run --work main.go
```

4. go playground

``` go
package main 

import "fmt" 

func main() {  
    fmt.Println("Hello World") 
}
```
我们将简要讨论该程序的每一行的作用。

- package main - 每个go文件必须以package name开始。
- import "fmt" - import语句用于导入其他软件包。
- func main（）- func关键字标记函数的开始。
- fmt.Println（"H​​ello World"） 