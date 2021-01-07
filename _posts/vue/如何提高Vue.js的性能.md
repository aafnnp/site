---
slug: "/posts/vue/how-to-boost-vue-js-performance"
date: "2019-05-21"
title: "如何提高Vue.js的性能"
path: "/posts/vue/how-to-boost-vue-js-performance"
tags: js
---

![mFYkyS](https://cdn.jsdelivr.net/gh/funnyPan/pics@master/uPic/mFYkyS.png)

## 减少网络请求

> 减少网络请求的总大小可加快页面加载时间 ——Google

当我们首次在Vue中启动SPA项目时，通常我们会使用CLI 3.0+快速准备项目框架和开发环境，并开始创建页面和组件。

然后我们继续以这种加速发展。
我们的页面增加了，我们放在这些页面上的组件也增加了。
但是在后台，还有一件事情我们会忘记大小的增加。
那是我们的捆绑文件。

您是否考虑过用户甚至无法访问该页面的可能性？
或者在特定条件下可能无法满足您渲染的组件的要求。
您创建的大多数模式可能永远都不可见。

我们将所有这些冗余代码发送给我们的用户。
而用户只想查看一个页面。

