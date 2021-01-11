---
date: "2021-01-08"
title: "基于Docker镜像的更新"
tags: docker
---

1. 停止镜像

``` shell
docker stop <ID or name>
```

2. 移除镜像

``` shell
docker rm <ID or name>
```

3. 拉取最新镜像

``` shell
docker pull <image name>
```

4. 启动镜像

``` shell
docker run <image name> ...options
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