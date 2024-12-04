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
使用这种方式也可以动态的传递一些参数

      navigate(`/bookDetail`, {state: {bookName: name, bookAuthor: author} });
在目标路由中通过使用useLocation获取参数
import { useLocation } from "react-router-dom";
  const location = useLocation();
  const {state } = location

配置匹配规则
  可以直接使用Route 添加路由
  <Route path="/" element={<Home />} />
  如果想要子路由就使用
  <Route path="/" element={<App />}>
    <Route path="/home" element={<Home />} />
  </Route>
  在Home组件中添加outlet占位
  也可以使用 createBrowserRouter通过配置对象的方式配置路由
  子路由也是使用outlet的方式
路由跳转
  路由跳转有三种方式：
    - a标签 但是a标签会引起浏览器刷新
    - Link标签 通过 import { Link } from "react-router-dom"; 用法与A标签一致 但是不会引起浏览器刷新
    - navigate("tagetName", params) 适合点击跳转，并且可以传递参数
传递参数

  - navigate("tagetName", params)
  - 动态路由
    配置路由时后面添加 :VeriableName 可以把参数传递给对应页面

  useLocation useParams useSearchParams