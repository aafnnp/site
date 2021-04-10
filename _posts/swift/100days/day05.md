---
date: "2021-04-08"
title: "函数、参数、错误"
tags: swift
description: 一般来说，一个函数是可以通过外部代码调用的一个“子程序”（或在递归的情况下由内部函数调用）。像程序本身一样，一个函数由称为函数体的一系列语句组成。值可以传递给一个函数，函数将返回一个值。
---

## 创建函数

Swift 函数从 func 关键字开始，然后是函数名，然后`{}`。函数的所有主体——都放在大括号内。

```swift
// 创建函数
func printHelp() {
    let message = """
		Welcome to MyApp!

		Run this app inside a directory of images and
		MyApp will resize them all into thumbnails
		"""
    print(message)
}
// 调用函数printHelp
printHelp()
```

## 接收参数

函数接收参数，比如内置的`print`函数，参数定义数据类型表示接收的参数类型。

```swift
print("hello world") // hello world即为参数
```

创建函数打印平方值

```swift
func square(number: Int) {
    print(number * number)
}
// Int 表示参数只接受Int类型
square(number: 8) // 64
```

## 返回值

除了接收数据，函数还可以返回数据。通过`-> <数据类型>`告诉 swift 将返回什么数据类型的值。

```swift
func square(number: Int) -> Int {
    return number * number
}
// -> Int 表示将返回Int类型的值
let result = square(number: 8)
print(result) // 64
```

## 参数标签

每一个函数的形式参数都包含形式参数标签和形式参数名两部分

-   形式参数标签用在调用函数的时候
-   形式参数名用在函数的实现当中
-   在调用函数的时候，每一个形式参数前边都会有一个形式参数标签
-   默认情况下，形式参数使用它们的形式参数名作为形式参数标签
-   如果不想要形式参数标签，可以在形式参数名称前加上`_`

```swift
//这里的info1和info2就是形式参数标签
//name和age是形式参数名称
func personalInfo(info1 name : String, info2 age : Int) { //在函数的实现中使用形式参数名称 print("姓名：(name)，年龄：(age)")
}
//在函数调用的时候使用形式参数标签
personalInfo(info1: "norman", info2: 23)

//下面是默认写法
//此时，name和age既是形式参数标签，也是形式参数名称
func personalInfo(name : String, age : Int) { //在函数内部实现的时候，name和age是形式参数名称 print("姓名：(name)，年龄：(age)")
}
//在函数调用的时候，name和age是形式参数标签
personalInfo(name: "norman", age: 24)

//如果不想要形式参数标签，可以在形式参数名称前面加 _
func personalInfo(_ name : String, _ age : Int) { print("姓名：(name)，年龄：(age)")
}
//在函数调用的时候，没有形式参数标签
personalInfo("norman", 24)
```

## 默认参数

swift 允许设置参数默认值，如：

```swift
func greet(_ person: String, nicely: Bool = true) {
    if nicely == true {
        print("Hello, \(person)!")
    } else {
        print("Oh no, it's \(person) again...")
    }
}

// 调用
greet("Taylor")
greet("Taylor", nicely: false)
```

## 变量参数

当参数不确定，或者参数有多个，在类型后使用`...`，swift 会将传入的值转换为数组，因此可以在函数内部使用循环语句处理。如：

```swift
func square(numbers: Int...) {
    for number in numbers {
        print("\(number) squared is \(number * number)")
    }
}

square(numbers: 1, 2, 3, 4, 5)
```

## io 参数

一般默认在函数中定义的参数都是常量参数，也就是这个参数你只可以查询使用，不能改变它的值。

如果想要声明一个变量参数，可以在参数定义前加 inout 关键字，这样就可以改变这个参数的值了。

比如，如果你想将一个数字翻倍——即直接更改值，而不是返回一个新的值——你可以写一个这样的函数：

```swift
func doubleInPlace(number: inout Int) {
    number *= 2
}

var myNum = 10
doubleInPlace(number: &myNum)
```

## 函数总结

-   函数允许我们重复使用代码，而不需要重复声明。
-   函数可以接受参数——只需告诉 Swift 每个参数的类型。
-   函数可以返回值，同样，您只需指定要返回的类型。如果您想返回一些内容，可以使用元组。
-   可以在内部和外部对参数使用不同的名称，也可以完全忽略外部名称。
-   参数可以具有默认值，这有助于在通常使用特定值时编写更少的代码。
-   可变参数函数接受零个或多个特定参数，Swift 将输入转换为数组。
-   函数可以抛出错误，但必须使用 try 和 handle errors 来调用它们。
-   可以使用 inout 来更改函数内部的变量，但通常最好是返回一个新值。
