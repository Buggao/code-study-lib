# React-Router-6 学习
 react-router的两个函数：createBrowserRouter和RouterProvider。
 RouterProvider 取代了之前react的组件式路由，也有其他的好处，RouterProvider接收一个参数，这个参数就是createBrowserRouter所返回的路由信息。
 而 createBrowserRouter 创建一个路由匹配信息，包含路由的路径和组件。
 createBrowserRouter是一个对象数组，与vue-router类似，结构如：
 ```
 [{
  path: "",
  Element: "",
  ErrorElement: "",
  children: [{
    ...
  }]
 },
 {
  ...
 }
 ]
 ```

其中Element可以为一个JSX也可以为一个React组件，ErrorElement为错误页面，children为子路由。对于动态路由则为：加参数的形式，例如： {path:"/:id"}，其中:id为动态参数。

路由还有另外一个组件 Link 用于替代A标签，好处是不会触发浏览器的刷新，实现无感更新。