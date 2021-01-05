---
slug: "/posts/linux/linux-commands-gunzip"
date: "2020-10-12"
title: "Linux命令gunzip"
path: "/posts/linux/linux-commands-gunzip"
tags: ["Linux"]
description: "“gunzip”命令的快速指南，用于解压缩gzip文件。"
---

“gunzip”命令的快速指南，用于解压缩gzip文件。

**gunzip**命令基本上等同于**gzip**命令，但默认情况-d选项始终处于启用状态。

## 使用方法

``` shell
gunzip filename.gz
```

这将**gunzip**并删除**.gz**扩展名，将结果放入文件名文件中。如果该文件存在，它将覆盖该文件。

可以使用-c选项使用输出重定向将其提取到其他文件名：

``` shell
gunzip -c filename.gz > anotherfilename
```

gunzip命令可以在Linux、macOS、WSL和任何有UNIX环境的地方使用

## 参数

- -a或--ascii 　使用ASCII文字模式。
- -c或--stdout或--to-stdout 　把解压后的文件输出到标准输出设备。
- -f或-force 　强行解开压缩文件，不理会文件名称或硬连接是否存在以及该文件是否为符号连接。
- -h或--help 　在线帮助。
- -l或--list 　列出压缩文件的相关信息。
- -L或--license 　显示版本与版权信息。
- -n或--no-name 　解压缩时，若压缩文件内含有远来的文件名称及时间戳记，则将其忽略不予处理。
- -N或--name 　解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其回存到解开的文件上。
- -q或--quiet 　不显示警告信息。
- -r或--recursive 　递归处理，将指定目录下的所有文件及子目录一并处理。
- -S<压缩字尾字符串>或--suffix<压缩字尾字符串> 　更改压缩字尾字符串。
- -t或--test 　测试压缩文件是否正确无误。
- -v或--verbose 　显示指令执行过程。
- -V或--version 显示版本信息。