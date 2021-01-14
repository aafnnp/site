---
date: "2021-01-14"
title: "21个用于日常开发的有用JavaScript片段"
tags: translate
---

1. 输入值数字化

``` javascript
const checkMyValueType = (event) => {
  console.log(typeof event.target.value) // string
  console.log(typeof event.target.valueAsNumber) // number
}
<input type="number" onkeyup="checkMyValueType(event)" />
```
2. 复制输入框值到粘贴板

``` javascript
function copyToClipboard(inputID){
    navigator.clipboard.writeText(document.querySelector(inputID).value);
}
```

3. 检查窗口是否可见

``` javascript
const isBrowserTabInView = () => document.hidden;
isBrowserTabInView(); // returns true or false depending if tab is in view / focus
```
4. 布尔值取反
``` javascript
let myBool = false;
myBool = !myBool;
console.log(myBool); // true
myBool = !myBool;
console.log(myBool); // false
```
5. 检查值是否是偶数
``` javascript
const isEven = num => num % 2 === 0;
console.log(isEven(2)) // true
console.log(isEven(3)) // false
```
6. 检查日期是否是工作日
``` javascript
const isWeekday = d => d.getDay() % 6 !== 0;
console.log(isWeekday(new Date(2021, 0, 11))); // true (Monday)
console.log(isWeekday(new Date(2021, 0, 10))); // false (Sunday)
```
7. 日期加减
``` javascript
const addDaysToDate = (date, n) => {
  date.setDate(date.getDate() + n);
  return date.toISOString().split('T')[0];
};
addDaysToDate('2021-0-10', 10); // "2021-01-20"
addDaysToDate('2021-0-10', -10); // '2020-12-31'
```
8. 获取时分秒
``` javascript
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// "17:30:00"
console.log(timeFromDate(new Date(2021, 0, 10, 5, 56, 44)));
// "05:56:44"
```
9. 计算两个日期之间的工作日数
``` javascript
const countWeekDaysBetween = (startDate, endDate) =>
  Array
    .from({ length: (endDate - startDate) / (1000 * 3600 * 24) })
    .reduce(count => {
      if (startDate.getDay() % 6 !== 0) {
        count++;
      }
     startDate = new Date(startDate.setDate(startDate.getDate() + 1));
      return count;
    }, 0);
countWeekDaysBetween(new Date(2021, 0, 10), new Date(2021, 0, 20)); // 7
countWeekDaysBetween(new Date(2021, 1, 10), new Date(2021, 2, 18)); // 26
```
10. 检查localstorage是否可用
``` javascript
const isLocalStorageEnabled = () => {
  try {
    const key = `__storage__test`;
    window.localStorage.setItem(key, null);
    window.localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};
isLocalStorageEnabled(); // true, if localStorage is accessible
```
11. 计算函数等花费时间
``` javascript
 startTime = performance.now();
anyMethodOrCode();
const endTime = performance.now();
console.log(endTime - startTime + " milliseconds."); // (Time in milliseconds)
```
12. 捕获右键点击
``` javascript
window.oncontextmenu = () => {
  console.log('right click');
}
```
13. 只触发一次事件
``` javascript
const myButton = document.getElementById("myBtn");
const myClickFunction = () => {
  console.log('this click will only get called once')
}
myButton.addEventListener('click', myClickHandler, {
  once: true,
});
```
14. 滚动到顶部
``` javascript
const scrollToTopOfDocument = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
scrollToTopOfDocument();
```
15. 检查字符串是否大写
``` javascript
const isUpperCase = str => str === str.toUpperCase();
console.log(isUpperCase("string")); // false
console.log(isUpperCase("STRING")); // true
console.log(isUpperCase("5TR1NG")); // true
```
16. 检查元素是否处于focus状态
``` javascript
const elementIsInFocus = el => (el === document.activeElement);
elementIsInFocus(anyElement)// returns true if in focus, false if not in focus
```
17. 查找数组间不同元素
``` javascript
const differenceInArrays = (array1, array2) =>  {  
    const set = new Set(array2);  
    return array1.filter(x => !set.has(x));
}; 
differenceInArrays(["apple", "orange", "banana"], ["apple", "orange", "mango"]); // ["banana"]
differenceInArrays([10, 12, 5], [66, 10, 6]); // [12, 5]
```
18. 移除事件监听
``` javascript
const removeEventOffElement = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
const testFunction = () => console.log('My function has been called');
document.body.addEventListener('click', testFunction);
// Call remove method
removeEventOffElement(document.body, 'click', fn); 
```
19. 随机生成HEX值
``` javascript
const generateRandomColour = () =>   "#" + Math.floor(Math.random()*16777215).toString(16);
//EXAMPLE
document.getElementsByTagName("body")[0].style.color = generateRandomColour();
```
20. 查找第一个定义的非空参数
``` javascript
const getFirstValidValue = (...values) => values.find(v => ![undefined, null].includes(v));
console.log(getFirstValidValue(null, undefined, 'Hey', null); // 'Hey'
```
21. 元素外部监听事件
``` javascript
const onClickOutsideElement = (element, callback) => {
  document.addEventListener('click', e => {
    if (!element.contains(e.target)) callback();
  });
};
onClickOutside('#some-element', () => console.log('Hey you missed'));
// Will log "Hey you missed" everytime a click that was not "some-element" was clicked
``` 

## 总结
有时开发人员会发现自己在一次又一次地创建相同的东西，希望上面的一些代码片段可以在在开发中重用。
最新的JavaScript特性和浏览器api是很重要的。