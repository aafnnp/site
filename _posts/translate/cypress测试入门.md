---
date: "2020-05-20"
title: "Cypress入门"
tags: translate
---

![XBcHdy](https://cdn.jsdelivr.net/gh/funnypan/pics@master/uPic/XBcHdy.jpg)

Cypress包含测试网站所必须的所有组件，可以快速编写测试用例。

## 下载源码

``` shell
git clone github.com/ahfarmer/emoji-search
#安装依赖
cd emoji-search && npm install
#启动项目
npm run start
#访问http://localhost:3000
```

![65rXws](https://cdn.jsdelivr.net/gh/funnypan/pics@master/uPic/65rXws.jpg)

## 安装Cypress

``` shell
#安装
npm install cypress —save-dev

#启动
npx cypress open
#或者
./node_modules/.bin/cypress open
#或者
$(npm bin)/cypress open
```
以上命令将会在项目根目录创建```cypress```文件夹，如下：
![09GuGd](https://cdn.jsdelivr.net/gh/funnypan/pics@master/uPic/09GuGd.jpg)

## 创建测试用例

默认情况下，所有测试都存储在```cypress/integration```文件夹中，该文件夹在第一次```Cypress```启动时自动创建。
在此示例中，我们将编写一个测试，该测试将：

检查输入单词```lollipop```后是否在页面上仅显示一个结果

检查标题类的标签是否包含正确的文本

首先在```cypress/integration```目录中创建一个```sample_spec.js```文件：

该文件应包含以下代码：

``` javascript
describe('Sample test', () => {
    it('Search lollipop emoji', () => {
        cy.visit('http://localhost:3000/') // launch project website
        cy.get('input').type('lollipop') // enter 'lollipop' in search 
        cy.get('.component-emoji-result-row').should('have.length', 1) // check if only 1 result is returned 
        cy.contains('Lollipop').should('have.class', 'title') // check if returned element contains 'title' class
    })
})
```

你将会看到这样的窗口：

![ZabqgO](https://cdn.jsdelivr.net/gh/funnypan/pics@master/uPic/ZabqgO.jpg)

单击```sample_spec.js```后，将打开一个带有搜索引擎实例的窗口，您可以在其中实时预览执行的测试。
结果应如下所示（请记住，带有示例性网站的项目应该正在运行）：

![3NotH3](https://cdn.jsdelivr.net/gh/funnypan/pics@master/uPic/3NotH3.jpg)