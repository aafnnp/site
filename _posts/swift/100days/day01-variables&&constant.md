---
date: "2021-04-02"
title: "变量与常量"
tags: swift
description:
---

变量是一种使用方便的占位符，用于引用计算机内存地址。

swift 每个变量指定了特定的类型，类型决定变量占用内存的大小，也决定可存储值的范围。

swift 提供的数据类型包括：整形 Int、浮点数 Double 和 Float、布尔类型 Bool 以及字符串类型 String、Optional、Array、Dictionary、Struct、Class 等。

## 变量声明

```swift
var variableName = <initial value>

//实例
import Cocoa

var a = 42
print(a) //输出42

var b:float
b = 3.1415926
print(b) //输出3.1415926
```

## 变量命名

变量名可以由字母、数字和下划线组成，以字母或下划线开始，且区分大小写。

变量名也可以使用简单的 Unicode 字符

```swift
import Cocoa

var _var = "hello swift"
var 你好 = "世界"
print(_var) // hello swift
print(你好) //世界
```

## 变量输出

变量和常量可以使用 print 函数输出，在字符串中可以使用括号与反斜线插入变量

```swift
import Cocoa

var name = "manon"

print("\(name)") //manon
```

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
