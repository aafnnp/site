---
date: "2021-04-03"
title: "字符串"
tags: swift
description:
---

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
-   +、+=、==、<、！= `字符串操作符`
