---
date: "2021-04-04"
title: "复杂类型"
tags: swift
description:
---

Swift 中复杂类型包括：

-   Array
-   Set
-   Tuple
-   Dictionary
-   Enums

### Array

> Swift 数组允许您存储相同类型的值，可以使用该值在数组中的位置来检索这些值。Swift 会强制检测元素类型，如果类型不同，会报错。

```swift
// 创建数组
var firstArray = ["hello","hello","world"]
var secondArray = ["swift","niubility"]

// 获取数组第一个元素
print(firstArray[0]) // hello

//添加数组
firstArray.append("manon")
firstArray+=["icu"]

// 循环数组
for item in firstArray{
	print(item) //hell hello world manon icu
}

// 修改数组元素
firstArray[0] = "swift"

// 合并数组
firstArray+secondArray

// 计算数组元素的个数
firstArray.count

// 判断数组是否为空
firstArray.isEmpty

// 删除数组元素
firstArray.remove(at: 0)
```

### Set

> 集合是用来存储类型相同且没有确定顺序的唯一的值，不允许插入已存在的值

```swift
// 创建集合
let firstSet = Set(["hello","world","manon","icu","swift"])
let secondSet = Set(["just","do","it"])

// 访问集合
for item in firstSet{
	print(item) //"hello","world","manon","icu","swift"
}

// 判断是否为空
firstSet.isEmpty // false

// 计算集合的长度
firstSet.count //5

// 判断是否包含某个元素
firstSet.contains("manon") //true

// 向集合添加元素
firstSet.insert("funny")

// 删除集合的元素
firstSet.remove("manon")

// 合并集合
firstSet.union(secondSet)
```

### Tuple

> Swift 中的 tuple 允许存储不同类型的固定数量的值。创建元组后，不能从该元组中添加或删除值。

```swift
// 创建tuple
let firstTuple = (name: "manon", level: 9000, Nationality: "china")

// 访问tuple
firstTuple.name // manon
```

### Dictionary

> Swift 字典用来存储无序的相同类型数据的集合，Swift 字典会强制检测元素的类型，如果类型不同则会报错。
> Swift 字典每个值（value）都关联唯一的键（key），键作为字典中的这个值数据的标识符。
> 和数组中的数据项不同，字典中的数据项并没有具体顺序。我们在需要通过标识符（键）访问数据的时候使用字典，这种方法很大程度上和我们在现实世界中使用字典查字义的方法一样。
> Swift 字典的 key 没有类型限制可以是整型或字符串，但必须是唯一的。

```swift
// 创建字典
let firstDictionary = ["Gintama" : "Sakata Gintoki", "Haikyuu" : "Shoyo Hinata"]

// 访问字典
firstDictionary["Gintama"] // Sakata Gintoki

// 修改字典
firstDictionary.updateValue("manon",forKey:Gintama)
// 或
firstDictionary["Gintama"] = "manon"

// 删除字典元素
firstDictionary.removeValue("Gintama")

// 遍历字典
for (key,value) in firstDictionary{
	print("字典 key \(key) -  字典 value \(value)")
}

// 计算字典长度
firstDictionary.count

// 判断字典是否为空
firstDictionary.isEmpty
```

### Enums

> 根据 Swift 文档枚举的定义，它是“一组相关值的公共类型，使您能够在代码中以类型安全的方式处理这些值”。可以把它看作是一种特别用于 switch/conditions 的变量类型。

```swift
// 创建Enums
enum enumname {
   // 枚举定义放在这里
}

// 实例

import Cocoa

enum DaysofaWeek {
    case Sunday
    case Monday
    case TUESDAY
    case WEDNESDAY
    case THURSDAY
    case FRIDAY
    case Saturday
}

var weekDay = DaysofaWeek.THURSDAY
weekDay = .THURSDAY
switch weekDay{
	case .Sunday:
		print("星期天")
	case .Monday:
		print("星期一")
	case .TUESDAY:
		print("星期二")
	case .WEDNESDAY:
		print("星期三")
	case .THURSDAY:
		print("星期四")
	case .FRIDAY:
		print("星期五")
	case .Saturday:
		print("星期六")
}
```
