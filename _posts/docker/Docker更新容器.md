---
date: "2021-01-11"
title: "基于Docker镜像的更新"
tags: docker
---
当你部署你的应用程序，然后你想修复一个bug，或者只是发布一个更新，会发生什么？

运行容器后，可以使用docker ps获取其ID，然后使用docker commit从中为图像创建新标记：

``` shell
docker commit <id> <username>/<imagename>:<tagname>
```
您还可以添加一条changelog消息，列出新版本中更改的内容：

``` shell
docker commit --change "description" <id> <username>/<imagename>:<tagname>
```

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