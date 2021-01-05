---
slug: "/posts/server/how-to-install-certbot"
date: "2020-12-16"
title: "安装Certbot"
path: "/posts/server/how-to-install-certbot"
tags: ["Server"]
---

![Fkz8eJ](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/Fkz8eJ.jpg)

## 前置条件

- Centos 8/Ubuntu 18.04/Debain 10
- 域名 xxx.com
- 域名解析到对应服务器

## Centos 8安装Certbot
### 加入EPEL软件源

``` shell
sudo yum install epel-release
sudo yum -y update
```
### 下载并安装特定于Certbot和web服务器的包

``` shell
sudo curl -O https://dl.eff.org/certbot-auto
sudo mv certbot-auto /usr/local/bin/certbot-auto
chmod 0755 /usr/local/bin/certbot-auto
```

### 启动Certbot

``` shell
sudo /usr/local/bin/certbot-auto --nginx
```

### 启动jenkins

```bash
sudo systemctl start jenkins
```

### 询问信息如下

``` shell
  
# sudo /usr/local/bin/certbot-auto --nginx
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
No names were found in your configuration files. Please enter in your domain
name(s) (comma and/or space separated)  (Enter 'c' to cancel): www.example.com
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for www.example.com
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/nginx.conf

Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
Redirecting all traffic on port 80 to ssl in /etc/nginx/nginx.conf

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
### 开启防火墙

``` shell
sudo firewall-cmd --zone=public --permanent --add-service=https
sudo firewall-cmd --reload
```

## Ubuntu 18.04安装Certbot

### 安装Certbot和web服务器

``` shell
sudo apt-get update
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get install python-certbot-nginx
sudo certbot --nginx
```

### 开启防火墙

``` shell
sudo systemctl start ufw && sudo systemctl enable ufw
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
```

## Debain 10安装Certbot

### 安装Certbot和web服务器

``` shell
sudo apt install certbot python-certbot-nginx
sudo certbot --nginx
```

### 询问信息

``` shell
# sudo certbot --nginx
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): admin@example.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel: A

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: N
No names were found in your configuration files. Please enter in your domain
name(s) (comma and/or space separated)  (Enter 'c' to cancel): www.rajie.wiki
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for www.example.com
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/default

Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
Redirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/default

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

### 开启防火墙

``` shell
sudo systemctl start ufw && sudo systemctl enable ufw
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
```