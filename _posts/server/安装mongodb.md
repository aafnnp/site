---
slug: "/posts/server/how-to-install-mongodb"
date: "2019-10-19"
title: "安装mongodb"
path: "/posts/server/how-to-install-mongodb"
tags: ["Server"]
---
## 安装mongodb

## 添加mongodb源

```bash
sudo vi /etc/yum.repos.d/mongodb-org.repo


[mongodb-org-3.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc
```

```bash
yum repolist
```

## 安装mongodb

```bash
sudo yum install mongodb-org

启动
sudo systemctl start mongod

重载
sudo systemctl reload mongod

停止
sudo systemctl stop mongod

重启
sudo systemctl restart mongod

加入自启
sudo systemctl enable mongod

检查状态
systemctl status mongod

```


