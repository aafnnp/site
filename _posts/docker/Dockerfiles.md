---
slug: "/posts/docker/dockerfiles"
date: "2021-01-08"
title: "Dockerfile"
path: "/posts/docker/dockerfiles"
description: "Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明"
tags: docker
---

> Dockerfile是一个包含用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取Dockerfile中的指令自动生成映像。
> docker build命令用于从Dockerfile构建映像。可以在docker build命令中使用-f标志指向文件系统中任何位置的Dockerfile。


## 文件说明

Docker从上到下的顺序运行Dockerfile的指令，第一条指令必须是FROM。

1. FROM

用于设置基本映像，FROM必须作为第一条指令

2. LABEL

用于添加标签，设置映像标签

``` shell
LABEL maintainer="manon.icu"
```

3. RUN

用于执行当前映像的任何命令

``` shell
RUN /bin/bash -c "source $HOME/.bashrc;echo $HOME"
```

4. CMD

用于执行映像的应用程序

``` shell
CMD ["executable","param1","param2"]
```

5. COPY/ADD

用于将源文件复制到目的地

``` shell
COPY dist /www/dist
```

6. WORKDIR

用于为RUN/CMD/COPY指令设置工作目录，如不存在，会默认创建


## 完整的Dockerfile

``` dockerfile
FROM node:lts-alpine

WORKDIR /app
ADD . /app
RUN npm install

CMD ["npm", "start"]
```