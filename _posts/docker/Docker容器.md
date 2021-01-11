---
date: "2021-01-07"
title: "Docker Containers"
description: "Docker 把应用程序及其依赖，打包在 image 文件里面。只有通过这个文件，才能生成 Docker 容器"
tags: docker
---

image 文件生成的容器实例，本身也是一个文件，称为容器文件。也就是说，一旦容器生成，就会同时存在两个文件： image 文件和容器文件。而且关闭容器并不会删除容器文件，只是容器停止运行而已。

``` shell
# 列出本机正在运行的容器
$ docker container ls
```

``` shell
# 列出本机所有容器，包括终止运行的容器
$ docker container ls --all
```

上面命令的输出结果之中，包括容器的 ID。很多地方都需要提供这个 ID，比如上一节终止容器运行的docker container kill命令。

终止运行的容器文件，依然会占据硬盘空间，可以使用docker container rm命令删除。

``` shell
$ docker container rm [containerID]
```
运行上面的命令之后，再使用docker container ls --all命令，就会发现被删除的容器文件已经消失了。

## 更多

- [x] [Docker镜像](./Docker镜像)
- [x] [Docker容器](./Docker容器)
- [x] [Dockerfiles](./Dockerfiles)
- [x] [Docker更新容器](./Docker更新容器)
- [x] [Docker更新镜像](./Docker更新容器)
- [ ] [How to access files outside a Docker image]()
- [ ] [Sharing Docker Images on Docker Hub]()
- [ ] [Working with Docker Images from the command line]()
- [ ] [Working with Docker Containers from the command line]()
- [ ] [What to do if a Docker container immediately exits]()
- [ ] [Create a simple Node.js Hello World Docker Container from scratch]()
- [ ] [Using Docker Desktop to manage a Container]()
- [ ] [First steps with Docker after the installation]()
- [x] [Macos安装Docker](./Macos安装Docker)