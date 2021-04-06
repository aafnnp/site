---
date: "2021-04-02"
title: "变量"
tags: swift
description:
---

变量是一种使用方便的占位符，用于引用计算机内存地址。

swift 每个变量指定了特定的类型，类型决定变量占用内存的大小，也决定可存储值的范围。

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

```swift
import Cocoa

var _var = "hello swift"
print(_var)
```

## 变量输出

使用括号与反斜线插入变量

```swift
import Cocoa

var name = "manon"

print("\(name)")
```
