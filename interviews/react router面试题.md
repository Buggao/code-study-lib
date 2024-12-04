# react router面试题

## 什么是单页面应用

单页面就是只有一个index.html，通过url或域名向服务器发送请求时只会返回一个html。与之相对的就是多页面应用，通过访问不同的url地址，就会请求不同的html文件。

## react router有几种路由模式？

1. browser router 用于浏览器中的路由模式，对路由进行全匹配
2. Hash router 与browser router的用途类似，但进行url匹配时需加上 #
3. memory router在nodejs中是没有window.history 对象的，所以没办法记录上一个路由，下一个路由，而在进行单元测试时需要这些内容就需要memory router
4. native router 用于安卓 ios react native开发时的路由
5. static router 用于服务端渲染的静态路由