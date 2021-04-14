---
date: '2020-10-28'
title: 'Linux命令traceroute'
tags: linux
description: 'traceroute命令用于显示数据包到主机之间的路径'
---

**traceroute**命令用于显示数据包到主机之间的路径。

> raceroute 命令 用于追踪数据包在网络上的传输时的全部路径，它默认发送的数据包大小是 40 字节。
>
> 通过 traceroute 我们可以知道信息从你的计算机到互联网另一端的主机是走的什么路径。当然每次数据包由某一同样的出发点（source）到达某一同样的目的地(destination)走的路径可能会不一样，但基本上来说大部分时候所走的路由是相同的。
>
> traceroute 通过发送小的数据包到目的设备直到其返回，来测量其需要多长时间。一条路径上的每个设备 traceroute 要测 3 次。输出结果中包括每次测试的时间(ms)和设备的名称（如有的话）及其 ip 地址。

## 使用方法

```shell
traceroute <host>
```

## 案例

![1EOlsJ](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/1EOlsJ.png)

## 参数

-   -d 使用 Socket 层级的排错功能。
-   -f<存活数值> 设置第一个检测数据包的存活数值 TTL 的大小。
-   -F 设置勿离断位。
-   -g<网关> 设置来源路由网关，最多可设置 8 个。
-   -i<网络界面> 使用指定的网络界面送出数据包。
-   -I 使用 ICMP 回应取代 UDP 资料信息。
-   -m<存活数值> 设置检测数据包的最大存活数值 TTL 的大小。
-   -n 直接使用 IP 地址而非主机名称。
-   -p<通信端口> 设置 UDP 传输协议的通信端口。
-   -r 忽略普通的 Routing Table，直接将数据包送到远端主机上。
-   -s<来源地址> 设置本地主机送出数据包的 IP 地址。
-   -t<服务类型> 设置检测数据包的 TOS 数值。
-   -v 详细显示指令的执行过程。
-   -w<超时秒数> 设置等待远端主机回报的时间。
-   -x 开启或关闭数据包的正确性检验。

**traceroute**命令可在 Linux、macOS、WSL 和任何 UNIX 环境下运行
