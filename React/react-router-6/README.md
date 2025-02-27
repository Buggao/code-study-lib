# React-Router-6 学习

如何使用react router

## 初始化react router
  npm install react-router-dom
  import { BrowserRouter, Routes, Route } from "react-router-dom";

  ```
<BrowserRouter>
  <App />
</BrowserRouter>
  ```
路由的初始化有很多种方式，简单来讲分为两类：函数式和组件式。组件式有几种写法（待学习），这次主要使用函数式。
函数式只需要引入一个组件 RouterProvider 该组件接收一个属性 router，将配置好的router传递给该组件。

react的router有物种类型（BrowserRouter、HashRouter、MemoryRouter、NativeRouter、 StaticRouter）
每种路由有对应的适用范围，在pc端最适合的是BrowserRouter。
所以引入 CreateBrowserRouter 来创建路由对象并配置路由。

配置路由有几个属性 path element children 还有一些很重要的属性例如loader，Error等属性，但暂时还不需要。

```
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "list",
        element: <BookList />
      },
      {
        path: "notes",
        element: <ReadingNotes />
      }
    ]
  }
])
```
配置好路由就可以直接通过 <a/>标签进行跳转，但存在缺陷 a标签会引起浏览刷新。

<a href="/login">Login</a> 因为点击a标签浏览器会发送一个资源请求，并重新加载页面。

React Router 提供了 Link 组件，该组件不会引起浏览器刷新。
<Link className="w-32" to="/notes">Reading Notes</Link>

react router 也提供了一种跳转的方式适合通过点击函数跳转 navigate

```
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
const handleItemClick = () => {
    navigate(`/bookDetail`);
};
```
## 传递参数
### 使用useNavigate传递参数

      navigate(`/bookDetail`, {state: {bookName: name, bookAuthor: author} });
  
在目标页面中通过使用useLocation获取参数

import { useLocation } from "react-router-dom";
  const location = useLocation();
  const {state } = location

navigate() 也可以传递一个负数，表示向后退几个页面。如果并没有这多页面时会没有效果

可以使用navigate 或 to的时候添加动态参数的方式，url携带参数有两种方式
一种为直接在url后拼接参数 /bookDetail/1
另一种为url后拼接？并携带参数  /bookDetail？name=bookName&author=bookAuthor
也可以两种都存在的形式
如果需要动态路由就需要对 router的配置进行改动
      {
        path: "bookDetail/:bookId",
        element: <BookDetail />,
      },
但添加动态路由后 如果不传参数就会无法匹配，同时动态参数可以携带多个。
"bookDetail/:bookId/:index"
如果使用动态路由，在目标页面就可以使用useParams获取参数
import { useParams } from "react-router-dom";
const params = useParams();
 传递的所有参数都会被params接收。
 如果想要使用？拼接参数 就需要使用useSearchParams

 执行useSearchParams() 返回两个值，一个为类数组对象SearchParams，另外一个为setParams的函数
 如果想要取用 就使用钩子函数返回的第一个值的get方法获取。
  setParams的作用是可以去修改导航栏中的url的值，类似于修改location的作用。
  
      <button onClick={() => setParams({bookName: `${bookName}（已读）`})}>修改图书名字</button>

  也可也添加新的参数，但是新增参数会替换掉原来的参数
  例如：
  bookDetail/6?bookName=禅与摩托车维修艺术&bookAuthor=Martin%20Fowler
  执行 setParams({bookName: `${bookName}（已读）`, readedTiem: "2022-10-04"}) 后变为
  bookDetail/6?bookName=禅与摩托车维修艺术（已读）&readedTiem=2022-10-04
  且url会的路由会更新一次。


# 什么是fiber架构


# 数据路由
在传统的路由模式中，路由跳转到加载流程是这样的：
  点击跳转 =》 路由匹配 =》 匹配到的组件的生命周期 =》 调取数据接口 =》 渲染页面

但数据路由的方式节省了几步

  点击跳转 =》路由匹配
              调用接口 =》 组件生命周期 =》 渲染页面 
  
但数据路由的匹配和调用接口是同步进行的。
              


