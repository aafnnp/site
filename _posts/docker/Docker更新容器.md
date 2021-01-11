---
date: "2021-01-11"
title: "Docker更新容器"
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
