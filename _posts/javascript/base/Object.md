---
date: '2018-05-12'
title: 'Object'
tags: javascript
---

## Object

> 任何非原始类型的值（字符串，数字，布尔值，符号，null 或未定义）都是对象，数组和函数也不例外。

## 内置属性

1. Object.length=1
2. Object.prototype

## 静态方法

1. Object.assign() **_ES2015_** //通过复制一个或多个对象来创建一个新的对象。
2. Object.create() //使用指定的原型对象和属性创建一个新对象。
3. Object.defineProperty() //给对象添加一个属性并指定该属性的配置。
4. Object.defineProperties() //给对象添加多个属性并分别指定它们的配置。
5. Object.entries() **_ES2017_** //返回给定对象自身可枚举属性的 [key, value] 数组。
6. Object.freeze() //冻结对象：其他代码不能删除或更改任何属性。
7. Object.getOwnPropertyDescriptor() //返回对象指定的属性配置。
8. Object.getOwnPropertyNames() //返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
9. Object.getOwnPropertySymbols() //返回一个数组，它包含了指定对象自身所有的符号属性。
10. Object.getPrototypeOf() //返回指定对象的原型对象。
11. Object.is() **_ES2015_** //比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。
12. Object.isExtensible() //判断对象是否可扩展。
13. Object.isFrozen() //判断对象是否已经冻结。
14. Object.isSealed() //判断对象是否已经密封。
15. Object.keys() //返回一个包含所有给定对象自身可枚举属性名称的数组。
16. Object.preventExtensions() //防止对象的任何扩展。
17. Object.seal() //防止其他代码删除对象的属性。
18. Object.setPrototypeOf() **_ES2015_** //设置对象的原型（即内部 [[Prototype]] 属性）。
19. Object.values() //返回给定对象自身可枚举值的数组。

## Object 实例和 Object 原型对象

> JavaScript 中的所有对象都来自 Object；所有对象从 Object.prototype 继承方法和属性，尽管它们可能被覆盖。

```javascript
Object.prototype.constructor; //特定的函数，用于创建一个对象的原型。
```

## 实例方法

1. Object.prototype.hasOwnProperty() //返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。
2. Object.prototype.isPrototypeOf() //返回一个布尔值，表示指定的对象是否在本对象的原型链中。
3. Object.prototype.propertyIsEnumerable() //判断指定属性是否可枚举，内部属性设置参见 ECMAScript [[Enumerable]] attribute 。
4. Object.prototype.toLocaleString() //直接调用 toString()方法。
5. Object.prototype.toString() //返回对象的字符串表示。
6. Object.prototype.valueOf() //返回指定对象的原始值。

## 创建对象

```javascript
const person = {};
typeof person; //object
```

### 使用 Object 全局函数

```javascript
const person = Object();
typeof person; //object
```

### 使用 Object 构造器

```javascript
const person = new Object();
typeof person; //object
```

### 使用 Object.create()

```javascript
const car = Object.create();
```

```javascript
const person = {
	age: 36,
	name: 'funny',
	speak: () => {
		//speak
	},
};

const person = Object({
	age: 36,
	name: 'funny',
	speak: () => {
		//speak
	},
});

const person = new Object({
	age: 36,
	name: 'funny',
	speak: () => {
		//speak
	},
});
```

### Object.assign

```javascript
const copied = Object.assign({}, target1, target2, ...target);
```

> Object.assign-将一个或多个对象的所有可枚举属性复制到另一个对象中。浅拷贝，复制对象引用而非对象本身。

```javascript
const original = {
	name: 'Fiesta',
	car: {
		color: 'blue',
	},
};
const copied = Object.assign({}, original);

original.name = 'Focus';
original.car.color = 'yellow';

copied.name; //Fiesta
copied.car.color; //yellow
```

### Object.create

```javascript
const newObject = Object.create(prototype);

const newObject = Object.create(prototype, newProperties);
```

> 使用指定原型创建新的对象，可以指定第二个参数来向对象添加新属性

```javascript
const animal = {};
const dog = Object.create(animal);

const animal = {};
const dog = Object.create(animal, {
	breed: {
		value: 'Siberian Husky',
	},
});
console.log(dog.breed); //'Siberian Husky'
```

### Object.defineProperty

> 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象

```javascript
const dog = {};
Object.defineProperty(dog, 'breed', {
	value: 'Siberian Husky',
});
console.log(dog.breed); //'Siberian Husky'
```

扩展：[vue 原理之-神奇的 Object.defineProperty]("https://zhuanlan.zhihu.com/p/29066270")

### Object.defineProperties

> 直接在一个对象上定义新的属性或修改现有属性，并返回该对象

```javascript
const dog = {};
Object.defineProperties(dog, {
	breed: {
		value: 'Siberian Husky',
	},
});
console.log(dog.breed); //'Siberian Husky'
```

### Object.entries()

> ES2017,返回自身可枚举属性的键值对数组

```javascript
const person = { name: 'Fred', age: 87 };
Object.entries(person); // [['name', 'Fred'], ['age', 87]]

const people = ['Fred', 'Tony'];
Object.entries(people); // [['0', 'Fred'], ['1', 'Tony']]
```

### Object.freeze()

> 冻结对象，冻结后不能再添加或修改

```javascript
const dog = {};
dog.breed = 'Siberian Husky';
const myDog = Object.freeze(dog);

Object.isFrozen(dog); //true
Object.isFrozen(myDog); //true
dog === myDog; //true

dog.name = 'Roger'; //TypeError: 无法添加name属性，dog是不可扩展的
```

### Object.getOwnPropertyDescriptor()

> 返回自由属性描述符

```javascript
const dog = {};
Object.defineProperties(dog, {
	breed: {
		value: 'Siberian Husky',
	},
});
Object.getOwnPropertyDescriptor(dog, 'breed');
/*
{
  value: 'Siberian Husky',
  writable: false,
  enumerable: false,
  configurable: false
}
*/
```

### Object.getOwnPropertyNames()

> 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组

```javascript
const dog = {};
dog.breed = 'Siberian Husky';
dog.name = 'Roger';

Object.getOwnPropertyNames(dog); //[ 'breed', 'name' ]
```

### Object.getOwnPropertySymbols()

> 返回一个给定对象自身的所有 Symbol 属性的数

```javascript
const dog = {};
const r = Symbol('Roger');
const s = Symbol('Syd');
dog[r] = {
	name: 'Roger',
	age: 6,
};
dog[s] = {
	name: 'Syd',
	age: 5,
};

Object.getOwnPropertySymbols(dog); //[ Symbol(Roger), Symbol(Syd) ]
```

### Object.getPrototypeOf()

> 返回指定对象的原型（内部[[Prototype]]属性的

```javascript
const animal = {};
const dog = Object.create(animal);
const prot = Object.getPrototypeOf(dog);

animal === prot; //true

//如果对象没有原型，将返回null
Object.prototype; //{}
Object.getPrototypeOf(Object.prototype); //null
```

### Object.is()

> 判断两个值是否相等

-   两个值都是 undefined
-   两个值都是 null
-   两个值都是 true 或者都是 false
-   两个值是由相同个数的字符按照相同的顺序组成的字符串
-   两个值指向同一个对象
-   两个值都是数字并且
    -   都是正零 +0
    -   都是负零 -0
    -   都是 NaN
    -   都是除零和 NaN 外的其它同一个数字

```javascript
Object.is(a, b);
```

### Object.isExtensible()

> 判断一个对象是否是可扩展的，返回布尔值。任何对象都是可扩展，除非使用了 Object.freeze()、Object.seal()、Object.preventExtensions()

### Object.isFrozen()

> 判断一个对象是否被冻结，返回布尔值

```javascript
const dog = {};
dog.breed = 'Siberian Husky';
const myDog = Object.freeze(dog);
Object.isFrozen(dog); //true
Object.isFrozen(myDog); //true
dog === myDog; //true
```

### Object.isSealed()

> 判断一个对象是否被密封，返回布尔值

```javascript
const dog = {};
dog.breed = 'Siberian Husky';
const myDog = Object.seal(dog);
Object.isSealed(dog); //true
Object.isSealed(myDog); //true
dog === myDog; //true
```

### Object.keys()

> 返回对象的自身可枚举属性组成的数组

```javascript
const car = {
	color: 'Blue',
	brand: 'Ford',
	model: 'Fiesta',
};

Object.keys(car); //[ 'color', 'brand', 'model' ]
```

### Object.preventExtensions()

> 阻止对象扩展，但可以删除属性

```javascript
const dog = {};
dog.breed = 'Siberian Husky';
Object.preventExtensions(dog);

dog.name = 'Roger'; //TypeError: Cannot add property name, object is not extensible

delete dog.name;
dog; //{ breed: 'Siberian Husky' }
```

### Object.seal()

> 与 Object.freeze（）类似，但不会使属性不可写。仅阻止添加或删除属性。与 Object.preventExtensions（）类似，但也不允许删除属性：

```javascript
const dog = {};
dog.breed = 'Siberian Husky';
Object.seal(dog);
dog.breed = 'Pug';
dog.name = 'Roger'; //TypeError: Cannot add property name, object is not extensible
```

### Object.values()

> 对象自身的所有可枚举属性值的数组

```javascript
const person = { name: 'Fred', age: 87 };
Object.values(person); // ['Fred', 87]

const people = ['Fred', 'Tony'];
Object.values(people); // ['Fred', 'Tony']
```

### Object.hasOwnProperty()

> 判断对象自身是否有某个值，返回布尔值

```javascript
const person = { name: 'Fred', age: 87 };
person.hasOwnProperty('name'); //true
person.hasOwnProperty('job'); //false
```

### Object.isPrototypeOf()

> 测试一个对象是否存在于另一个对象的原型链上

```javascript
const Animal = {
	isAnimal: true,
};

const Mammal = Object.create(Animal);
Mammal.isMammal = true;

Animal.isPrototypeOf(Mammal); //true

const dog = Object.create(Animal);
Object.setPrototypeOf(dog, Mammal);

Animal.isPrototypeOf(dog); //true
Mammal.isPrototypeOf(dog); //true
```

### Object.propertyIsEnumerable()

> 判断对象的属性是否可枚举，返回布尔值

```javascript
const person = { name: 'Fred' };

Object.defineProperty(person, 'age', {
	value: 87,
	enumerable: false,
});

person.propertyIsEnumerable('name'); //true
person.propertyIsEnumerable('age'); //false
```

### Object.toLocaleString()

```javascript
const person = { name: 'Fred' };
person.toLocaleString(); //[object Object]
```

### Object.toString()

```javascript
const person = { name: 'Fred' };
person.toString(); //[object Object]
```

### Object.valueOf()

> 返回指定对象的原始值

```javascript
const person = { name: 'Fred' };
person.valueOf(); //{ name: 'Fred' }
```
