import { NavLink } from "react-router-dom"
import HeaderInputSearch from "./header-input-search"
import { Button } from "antd"; 
function NavHeader() {


  return (
    <div className="nav-header w-full px-1/6 flex flex-row items-center">
      {/* logo */}
      <div className="nav-header-logo w-40">
        <div className="logo">
          Coder Station
        </div>
      </div>
      {/* 导航 */}
      <div className="nav-header-nagvition mx-10 w-1/4 flex items-center gap-10 text-xl font-bold">
        <NavLink to="">问答</NavLink>
        <NavLink to="/books">书籍</NavLink>
        <NavLink to="/interviews">面试题</NavLink>
        <a href="https://www.bilibili.com/">视频教程</a>
      </div>
      {/* 搜索 */}
      <HeaderInputSearch className="flex-1 mx-10" />
      {/* 登录按钮 */}
      <div className="nav-header-login">
        <Button size="large" type="primary">注册/登录</Button> 
      </div>
    </div>
  )
}

export default NavHeader