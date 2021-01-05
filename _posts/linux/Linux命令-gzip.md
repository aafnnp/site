---
slug: "/posts/linux/linux-commands-gzip"
date: "2020-10-09"
title: "Linux命令gzip"
path: "/posts/linux/linux-commands-gzip"
tags: ["Linux"]
description: "“gzip”命令的快速指南，用于压缩文件"
---

“gzip”命令的快速指南，用于压缩文件

gzip命令可以在Linux、macOS、WSL和任何有UNIX环境的地方使用。

您可以使用gzip命令使用名为[LZ77](https://en.wikipedia.org/wiki/LZ77_and_LZ78)的gzip压缩协议压缩文件。


## 使用方法
``` shell
gzip filename
```

这将压缩文件，并向其附加一个.gz扩展名，原始文件将被删除。为了防止出现这种情况，可以使用```-C```选项并使用输出重定向将输出写入文件名.gz文件：

``` shell
gzip -c filename > filename.gz
```

-C选项指定输出将转到标准输出流，保留原始文件不变

同时也可以使用-K选项

``` shell
gzip -k filename
```

压缩越多，压缩（和解压缩）所需的时间就越长。级别范围从1（最快、最差的压缩）到9（最慢、更好的压缩），默认值为6。您可以使用-<NUMBER>选项选择特定级别：

``` shell
gzip -1 filename
```

压缩多文件

``` shell
gzip filename1 filename2
```

使用-r选项递归地压缩目录中的所有文件：

``` shell
gzip -r a_folder
```

-v选项打印压缩百分比信息。下面是一个与-k（keep）选项一起使用的示例：

![fvzBBf](https://cdn.jsdelivr.net/gh/funnyPan/pics@master/uPic/fvzBBf.png)

gzip还可以用于解压缩文件，使用-d选项：

``` shell
gzip -d filename.gz
```