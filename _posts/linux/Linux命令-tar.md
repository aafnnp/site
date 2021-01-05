---
slug: "/posts/linux/linux-commands-tar"
date: "2020-10-30"
title: "Linux命令tar"
path: "/posts/linux/linux-commands-tar"
tags: ["Linux"]
description: "tar用于linux的文件和目录创建档案，利用tar命令，可以把一大堆的文件和目录全部打包成一个文件"
---

**tar**用于linux的文件和目录创建档案，利用tar命令，可以把一大堆的文件和目录全部打包成一个文件

## 使用方法

``` shell
tar -cf archive.tar file1 file2
#c参数代表创建压缩文档，f参数用于写入归档文件。

tar -xf archive.tar
#x参数代表解压压缩文档

tar -xf archive.tar -C directory
#C参数代表解压到某个目录

tar -tf archive.tar
#t参数代表列出压缩文档的内容
```