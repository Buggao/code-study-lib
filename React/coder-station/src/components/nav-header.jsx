import { NavLink } from "react-router-dom"
import { Button } from "antd";

function NavHeader() {
  return (
    <div className="nav-header">
      {/* logo */}
      <div className="nav-header-logo">
        <div className="logo"></div>
      </div>
      {/* 导航 */}
      <div className="nav-header-nagvition">
        <NavLink to="/">问答</NavLink>
        <NavLink to="/books">书籍</NavLink>
        <NavLink to="/interviews">面试题</NavLink>
        <a href="https://www.bilibili.com/">视频教程</a>
      </div>
      {/* 搜索 */}
      <div className="nav-header-search">
        <input type="text" placeholder="搜索" />
      </div>
      {/* 登录按钮 */}
      <div className="nav-header-login">
        <Button >登录</Button> 
      </div>
    </div>
  )
}

export default NavHeader