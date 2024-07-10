# 什么是Rollup
rollup是一个打包js的工具，专门用来打包js的。通过rollup.config.js文件进行配置

## 使用rollup

在package文件中添加命令 `rollup -c -w` 使用rollup，-c的意思是使用根目录下的rollup-config文件，-w的意思是跟踪文件的变化自动打包。

## rollup的优点

使用rollup可以自动的将es6+的语法打包成支持node 浏览器的代码，且会添加全局变量。并带有tree-sharking的功能。

