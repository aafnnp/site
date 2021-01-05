---
slug: "/posts/javascript/advance/event-loop"
date: "2020-05-19"
title: "事件循环"
path: "/posts/javascript/advance/event-loop"
tags: ["js"]
---
![k6XBHW](https://cdn.jsdelivr.net/gh/funnypan/pics@master/uPic/k6XBHW.jpg)
众所周知 JS 是⻔⾮阻塞单线程语⾔，因为在最初 JS 就是为了和浏览器交互⽽诞⽣的。如果 JS 是⻔多线程
的语⾔话，我们在多个线程中处理 DOM 就可能会发⽣问题（⼀个线程中新加节点，另⼀个线程中删除节
点），当然可以引⼊读写锁解决这个问题。