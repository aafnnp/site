---
slug: "/posts/css/draw-triangle"
date: "2017-07-12"
title: "三角形绘制方法"
path: "/posts/css/draw-triangle"
tags: ["css"]
description: "在做UI（页面重构）的时候，免不了和各种小图标打交道，这其中最多的应该是三角形以及箭头"
---

在做UI（页面重构）的时候，免不了和各种小图标打交道，这其中最多的应该是三角形以及箭头，一般情况下可以通过伪类使用unicode解决大部分问题。

现在我们来总结下几种使用css绘制三角形的方法，dom结构如下：

``` html
<div class="triangle"></div>
```
## 最简单最方便的办法 background
```
代码忽略
```

## unicode
``` css
.triangle:after{
    display:block;
    content:"\25B2";
    color:"#fd5353";
    font-size:20px;
}
```
> 注意，伪类必须加上content属性，否则不生效

[unicode图表](http://www.w3cplus.com/solution/css3content/images/html.png)


## border

``` css
.triangle{
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
```

使用border绘制三角形是什么原理？事实上，宽度相等的border是以45度对接的，如下图：

![image](https://i.stack.imgur.com/hZefy.png)

那么没有了上border就是如下图：

![image](https://i.stack.imgur.com/uV9Q5.png)

再设置div的宽度为0，就是如下图：

![image](https://i.stack.imgur.com/K1A7G.png)

再设置div的高度为0，如下图：

![image](https://i.stack.imgur.com/NsmsW.png)

最后设置左右border的颜色为透明，如下图：

![image](https://i.stack.imgur.com/B42zY.png)

再来个动图：

![image](https://i.stack.imgur.com/vYvqa.gif)

通过这种原理，我们可以做更多的图形，比如五角星、六角星等，更多图形请移步[shapesofcss](https://css-tricks.com/examples/ShapesOfCSS/)

## 使用css3 transform rotate

![image](https://i.stack.imgur.com/mEaS1.jpg)

``` css
.triangle {
    width: 30%;
    padding-bottom: 21.27%; /* = width / 1.41 */
    position: relative;
    
    //划重点
    overflow:hidden;
}

.triangle: before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0079C6;
    
    //划重点
    transform-origin: 0 100%;        
    transform: rotate(45deg);
}
```
> 为什么是1.41，因为正方形的对角线长度是约等于1.414。

## 使用clip-path

``` css
.triangle{
    width:200px;
    height:200px;
    background:#fd5353;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
}
```

clip-path不支持安卓4.4以下，其余均需使用浏览器前缀-webkit，[caniuse](http://caniuse.com/#feat=css-clip-path)

详细请移步 [clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

