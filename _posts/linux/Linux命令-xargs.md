---
slug: "/posts/linux/linux-commands-xargs"
date: "2020-10-10"
title: "Linux命令xargs"
path: "/posts/linux/linux-commands-xargs"
tags: linux
description: "xargs（英文全拼： eXtended ARGuments）是给命令传递参数的一个过滤器，也是组合多个命令的一个工具"
---

xargs（英文全拼： eXtended ARGuments）是给命令传递参数的一个过滤器，也是组合多个命令的一个工具。


## 使用方法
``` shell
command1 | xargs command2
```
我们使用**|**将输出传递给xargs。这将负责运行command2命令，使用command1的输出作为其参数。

## 例子
让我们举一个简单的例子。您要从目录中删除某些特定文件。这些文件列在文本文件中。
我们有3个文件：file1，file2，file3。
在**todelete.txt**我们有一个要删除的文件列表，在本例中为file1和file3：

``` shell
cat todelete.txt

file1
file2
```

![nXyQfk](https://cdn.jsdelivr.net/gh/funnyPan/pics@master/uPic/nXyQfk.png)

通过cat命令将todelete内容输出并执行rm命令

``` shell
cat todelete.txt | xargs rm
```

## 参数

- -a file 从文件中读入作为sdtin
- -e flag ，注意有的时候可能会是-E，flag必须是一个以空格分隔的标志，当xargs分析到含有flag这个标志的时候就停止。
- -p 当每次执行一个argument的时候询问一次用户。
- -n num 后面加次数，表示命令在执行的时候一次用的argument的个数，默认是用所有的。
- -t 表示先打印命令，然后再执行。
- -i 或者是-I，这得看linux支持了，将xargs的每项名称，一般是一行一行赋值给 {}，可以用 {} 代替。
- -r no-run-if-empty 当xargs的输入为空的时候则停止xargs，不用再去执行了。
- -s num 命令行的最大字符数，指的是 xargs 后面那个命令的最大命令行字符数。
- -L num 从标准输入一次读取 num 行送给 command 命令。
- -l 同 -L。
- -d delim 分隔符，默认的xargs分隔符是回车，argument的分隔符是空格，这里修改的是xargs的分隔符。
- -x exit的意思，主要是配合-s使用。。
- -P 修改最大的进程数，默认是1，为0时候为as many as it can ，这个例子我没有想到，应该平时都用不到的吧。
