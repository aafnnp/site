---
date: "2021-04-13"
title: "一些有用的Html&&css&&javascript Tips"
tags: [i18n,javascript,css]
---

## `loading=lazy`属性

> 这是一个性能优化的措施，图片懒加载

``` html
<img src='image.jpg' loading='lazy' alt='Alternative Text'>
```

## Email、tel、sms

``` html
<a href="mailto:{email}?subject={subject}&body={content}">
  Send us an email
</a>

<a href="tel:{phone}">
  Call us
</a>

<a href="sms:{phone}?body={content}">
  Send us a message
</a>
```

## 列表`start`属性

> 使用`start`属性改变列表的初始序号

![XNg0zd](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/XNg0zd.jpg)

## meter Element

> 无需js、css写出progress bar

``` html
<label for="value1">Low</label>
<meter id="value1" min="0" max="100" low="30" high="75" optimum="80" value="25"></meter>

<label for="value2">Medium</label>
<meter id="value2" min="0" max="100" low="30" high="75" optimum="80" value="50"></meter>

<label for="value3">High</label>
<meter id="value3" min="0" max="100" low="30" high="75" optimum="80" value="80"></meter>
```

![xAOKxW](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/xAOKxW.jpg)

## html 原生搜索

``` html
<div class="wrapper">
  <h1>
    Native HTML Search
  </h1>

  <input list="items">

  <datalist id="items">
    <option value="Marko Denic">
    <option value="FreeCodeCamp">
    <option value="FreeCodeTools">
    <option value="Web Development">
    <option value="Web Developer">
  </datalist>
</div>
```

![KIOpYV](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/KIOpYV.jpg)

## Fieldset Element

``` html
<form>
  <fieldset>
    <legend>Choose your favorite language</legend>

    <input type="radio" id="javascript" name="language">
    <label for="javascript">JavaScript</label><br/>

    <input type="radio" id="python" name="language">
    <label for="python">Python</label><br/>

    <input type="radio" id="java" name="language">
    <label for="java">Java</label>
  </fieldset>
</form>
```
![6gS5fT](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/6gS5fT.jpg)

## Window.opener

> 用`target = "_ blank"`打开的页面允许新页面访问原始页面的`window.opener`。这可能具有安全性和性能影响。包括`rel = "noopener"或者`rel = "noreferer"`来防止这种情况。

``` html
<a href="https://markodenic.com/" target="_blank" rel="noopener">
	Marko's website
</a>
```

## Base Element

> 如果需要在新标签打开所有的链接，使用`base`

``` html
<head>
   <base target="_blank">
</head>
<!-- This link will open in a new tab. -->
<div class="wrapper">
  This link will be opened in a new tab: &nbsp;
  <a href="https://freecodetools.org/">
    Free Code Tools
  </a>

  <p>
    Read more: <br><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base">
    MDN Documentation
    </a>
  </p>
</div>
```

## 去除favicon缓存

> 使用时间戳或者其他版本信息去除缓存，这样每次获取的favicon都是新的

``` html
<link rel="icon" href="/favicon.ico?v=2" />
```

## 原生 sliders

``` html
<label for="volume">Volume: </label>
<input type="range" id="volume" name="volume" min="0" max="20">

<label for="result">Your choice: </label>
<input type="number" id="result" name="result">
```
![8tZXxw](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/8tZXxw.jpg)

## html Accordion

``` html
<div class="wrapper">
  <details>
    <summary>
      Click me to see more details
    </summary>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum perferendis eius. Adipisci velit et similique earum quas illo odio rerum optio, quis, expedita assumenda enim dicta aliquam porro maxime minima sed a ullam, aspernatur corporis.
    </p>
  </details>
</div>
```

![gqU6rS](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/gqU6rS.jpg)

## mark 标签

> 使用`mark`标签高亮文字

![USVaFH](https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/USVaFH.jpg)

## `download`属性

``` html

<a href='path/to/file' download>
  Download
</a>
```

## picture 标签

``` html
<picture>
  <!-- load .webp image if supported -->
  <source srcset="logo.webp" type="image/webp">

  <!--
	Fallback if `.webp` images or <picture> tag
	not supported by the browser.
  -->
  <img src="logo.png" alt="logo">
</picture>
```

<!-- TODO -->

[x] css
[x] javascript