---
date: '2020-10-11'
title: 'Linux命令nohup'
tags: linux
description: '用于忽略 SIGHUP (挂断信号) 在系统后台不挂断地运行命令，退出终端不会影响程序的运行'
---

**nohup**用于忽略 SIGHUP ("signal hang up" 译：挂断信号) 在系统后台不挂断地运行命令，退出终端不会影响程序的运行。

nohup 命令在默认情况下（非重定向时），会输出一个名叫 nohup.out 的文件到当前目录下，如果当前目录的 nohup.out 文件不可写，输出重定向到 $HOME/nohup.out 文件中。

## 使用方法

```shell
nohup <command>
```

停止运行

```shell
#使用如下命令找到进程pid，然后使用kill杀掉进程
ps -aux | grep <command>
```

## 参数

-   Command：要执行的命令。
-   Arg：一些参数，可以指定输出文件。
-   &：让命令在后台执行，终端退出后命令仍旧执行。

nohup 命令可以在 Linux、macOS、WSL 和任何有 UNIX 环境的地方使用
