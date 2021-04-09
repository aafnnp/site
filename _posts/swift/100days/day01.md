---
date: "2021-04-02"
title: "变量、基本数据类型、字符串插值"
tags: swift
description: 取得成功的秘诀就是开始
---

## 变量

变量是一种使用方便的占位符，用于引用计算机内存地址。

swift 每个变量指定了特定的类型，类型决定变量占用内存的大小，也决定可存储值的范围。

变量名可以由字母、数字和下划线组成，以字母或下划线开始，且区分大小写。

变量名也可以使用简单的 Unicode 字符

变量和常量可以使用 print 函数输出，在字符串中可以使用括号与反斜线插入变量

```swift
// 变量声明
var variableName = <initial value>

//实例
import Cocoa

var a = 42
print(a) //输出42

var b:float
b = 3.1415926
print(b) //输出3.1415926

var _var = "hello swift"
var 你好 = "世界"
print(_var) // hello swift
print(你好) //世界

var name = "manon"

print("\(name)") //manon
```

<!-- ## 基本数据类型

swift 提供的数据类型包括：整形 Int、浮点数 Double 和 Float、布尔类型 Bool 以及字符串类型 String、Optional、Array、Dictionary、Struct、Class 等。


## 常量声明

> 常量一旦赋值，不能再次赋值，否则会报错。

```swift
let _const = <initial value>
let _const:Float = 3.1415926
```

## 常量命名

和变量命名相同

## 常量输出

和变量命名相同



字符串是一系列字符的集合，比如`hello world`，它的数据类型为 String

```swift
import Cocoa
//创建字符串
var str1 = "hello world"
print(str1)

//空字符串
var str2 = ""
var str3 = " manon"
if str2.isEmpty() {
	print("str2 是空字符串")
}else{
	print("str2 不是空字符串")
}

// 连接字符串

var str4 = str1 + str3
print(str4) //"hello world manon"
print('str1和str3连接：\(str4)')

// 字符串长度
print(str4.count)

// 字符串比较
if str1==str2{
	print("\(str1) 与 \(str2)是相等的")
}else{
	print("\(str1) 与 \(str2)是不相等的")
}
```

字符串函数及运算符

-   isEmpty `判断字符串是否为空，返回布尔值`
-   hasPrefix `检查字符串是否有特定的前缀`
-   hasSuffix `检查字符串是否有特定的后缀`
-   Int `转换字符串数字为整型`
-   count `计算字符串的长度`
-   utf8、utf16 `遍历String的utf8属性访问utf8、utf16编码`
-   unicodeScalars `遍历String的unicodeScalars属性访问Unicode标量编码`
-   +、+=、==、<、！= `字符串操作符` -->
