---
slug: "/posts/javascript/base/string"
date: "2018-05-09"
title: "String"
path: "/posts/javascript/base/string"
tags: ["js"]
---
## String

### 方法

-   String.fromCharCode() //通过一串 Unicode 创建字符串。
-   String.fromCodePoint() //通过一串 码点 创建字符串。
-   String.raw() //通过模板字符串创建字符串。

### 实例方法

-   charAt(i)
-   charCodeAt(i)
-   codePointAt(i)
-   concat(str)
-   endsWith(str)
-   includes(str)
-   indexOf(str)
-   lastIndexOf(str)
-   localeCompare()
-   match(regex)
-   normalize()
-   padEnd()
-   padStart()
-   repeat()
-   replace(str1, str2)
-   search(str)
-   slice(begin, end)
-   split(separator)
-   startsWith(str)
-   substring()
-   toLocaleLowerCase()
-   toLocaleUpperCase()
-   toLowerCase()
-   toString()
-   toUpperCase()
-   trim()
-   trimEnd()
-   trimStart()
-   valueOf()

### charAt

> 返回指定位置的字符,且返回的字符长度为 1，**_js 没有一种有别于字符串类型的字符数据类型_**

```javascript
string.charAt(index);

"porhub".charAt(0); //'p'
"porhub".charAt(1); //'o'
"porhub".charAt(2); //'r'
```

### charCodeAt

> 返回在指定的位置的字符的 Unicode 编码

**字符串中第一个字符的下标是 0。如果 index 是负数，或大于等于字符串的长度，则 charCodeAt() 返回 NaN。**

```javascript
string.charCodeAt(index);

"porhub".charCodeAt(0); //112
"porhub".charCodeAt(1); //111
"porhub".charCodeAt(2); //114
```

### codePointAt

> ES2015 引入的，用于处理 2 UTF-16 字符的，比如中文，在 ES2015 之前 charCodeAt 只能处理单个字符，处理双字符必须一个个处理然后拼接。

```javascript
string.codePointAt(index);

//ES2015之前
"𠮷".charCodeAt(0).toString(16); //d842
"𠮷".charCodeAt(1).toString(16); //dfb7
("\ud842\udfb7"); //𠮷

//ES2015
"𠮷".codePointAt(0); //20bb7
("\u{20bb7}"); //𠮷
```

### concat

> 类似 Array 的 concat

```javascript
stringObject.concat(stringX,stringX,...,stringX)

"browser".concat("porhub");
```

通常使用 + 拼接来得更方便，或者使用 ES2015 的``字符扩展。

### endWith

> 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。

```javascript
str.endsWith(searchString, position);

"JavaScript".endsWith("Script"); //true
"JavaScript".endsWith("script"); //false
"JavaScript".endsWith("Script", 5); //false
"JavaScript".endsWith("as", 5); //true
```

### includes

> 用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false

```javascript
str.includes(searchString, position);

"JavaScript".includes("Script"); //true
"JavaScript".includes("script"); //false
"JavaScript".includes("nice"); //true
"JavaScript".includes("nice", 3); //false
```

### indexOf

> 用于返回字符串中出现某个字符的初始位置，如果没有找到，返回-1.

```javascript
str.indexOf(searchString, startPosition);

"JavaScript".indexOf("a"); //1
"JavaScript".indexOf("a", 2); //3
```

### lastIndexOf

> 用于返回某个字符最后出现的位置，如果没有，返回-1

```javascript
str.lastIndexOf(searchString, startPosition);

"JavaScript".lastIndexOf("a"); //3
"JavaScript".lastIndexOf("a", 1); //1
```

### padEnd

> 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

```javascript
str.padEnd(targetLength, string);

"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

### padStart

> 用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的

```javascript
str.padStart(targetLength, string);

"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### repeat

> 构造并返回一个包含被连接在一起的指定数量的新字符串。

```javascript
str.repeat(count);

"abc".repeat(-1); // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0); // ""
"abc".repeat(1); // "abc"
"abc".repeat(2); // "abcabc"
"abc".repeat(3.5); // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1 / 0); // RangeError: repeat count must be positive and less than inifinity
```

### slice

> 截取字符串的一部分，并返回一个新的字符串

```javascript
str.slice(startPosition, endPosition);

"abc".slice(0, 1); //a
"abc".slice(0, -1); //ab
```

### split

> 将字符串切割成数组

```javascript
str.split(separator, limit);

"abc".split(); //"[a,b,c]";
"a,b,c".split(",", 1); //[a]
```

### startWith

> 判断字符串是否以给定的字符串开始，返回 true/false

```javascript
str.startsWith(searchString, poistion);

"abc".startsWith("a"); //true
"abc".startsWith("a", 1); //false
```

### substring

> 根据开始索引到结束索引截取字符串

```javascript
str.substring(startPosition, endPosition);

"abc".substring(0, 1); //a
"abc".substring(-1); //abc
```

1. 如果 startPosition 等于 indexEnd，substring 返回一个空字符串。
2. 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
3. 如果任一参数小于 0 或为 NaN，则被当作 0。
4. 如果任一参数大于 stringName.length，则被当作 stringName.length。
5. 如果 startPosition 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。见下面的例子。

### toLocaleLowerCase/toLocaleUpperCase/toUpperCase/toLowerCase

> 将字符串转换成小写/大写

```javascript
str.toLocaleLowerCase() / str.toLocaleUpperCase() / str.toUpperCase() / str.toLowerCase();

"ABC".toLocaleLowerCase(); //abc
"abc".toLocaleUpperCase(); //ABC
```

### toString

> 将\*转换成字符串

```javascript
var x = new String("Hello world");

alert(x.toString()); // 输出 "Hello world"
```

### trim/trimStart/trimEnd

> 移除空白字符/起始位置空白字符/结尾位置空白字符

```javascript
str.trim() / str.trimStart() / str.trimEnd();

"Testing".trim(); //'Testing'
" Testing".trim(); //'Testing'
" Testing ".trim(); //'Testing'
"Testing ".trim(); //'Testing'
```

### valueOf

> 返回 str 的原始值，等同于 String.prototype.toString

```javascript
str.valueOf();

x = new String("Hello world");
alert(x.valueOf()); // Displays "Hello world"
```

### 扩展学习
