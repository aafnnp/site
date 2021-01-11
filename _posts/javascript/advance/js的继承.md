---
date: "2020-05-19"
title: "继承"
tags: js
---

## 构造继承
## 原型继承
## 实例继承
## 拷⻉继承
## 原型 prototype 机制或 apply 和 call ⽅法去实现较简单，建议使⽤构造函数与原型混合⽅式

``` javascript
function Parent(){
	this.name = 'wang';
}
function Child(){
        this.age = 28;
}
Child.prototype = new Parent();//继承了Parent，通过原型
var demo = new Child();
alert(demo.age);
alert(demo.name);//得到被继承的属性
```