---
slug: "/posts/server/how-to-install-jenkins"
date: "2019-09-19"
title: "安装jenkins"
path: "/posts/server/how-to-install-jenkins"
tags: server
---
基于centos 7.2

## 安装java环境
``` bash
sudo yum install java-1.8.0-openjdk-devel
```

## 加入软件源

```bash
curl --silent --location http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo | sudo tee /etc/yum.repos.d/jenkins.repo
```
## 加入软件key

```bash
sudo rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
```

## 安装

```bash
sudo yum install jenkins
```

## 启动jenkins

```bash
sudo systemctl start jenkins
```

## 检查jenkins状态

```bash
systemctl status jenkins
```

## 加入开机启动

```bash
sudo systemctl enable jenkins
```

## 访问

``` bash
http://your_ip_or_domain:8080
```
![](https://cdn.jsdelivr.net/gh/funnypan/pics@master/img/20190621160854.png)

``` bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

## 安装默认插件

![](https://cdn.jsdelivr.net/gh/funnypan/pics@master/img/20190621161025.png)


![](https://cdn.jsdelivr.net/gh/funnypan/pics@master/img/20190621161045.png)

## 注册用户

![](https://cdn.jsdelivr.net/gh/funnypan/pics@master/img/20190621161123.png)

## 完成

![](https://cdn.jsdelivr.net/gh/funnypan/pics@master/img/20190621161155.png)
