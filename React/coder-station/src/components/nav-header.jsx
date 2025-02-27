import { NavLink } from "react-router-dom"
import HeaderInputSearch from "./header-input-search"
import UserAuth from "./user-auth"
function NavHeader({openLoginModal}) {


  return (
    <div className="nav-header mx-auto max-w-screen-2xl w-fit flex gap-4 flex-row items-center">
      {/* logo */}
      <div className="nav-header-logo w-40 mx-10 basis-40">
        <div className="logo text-blueGray">
          Coder Station
        </div>
      </div>
      {/* 导航 */}
      <div className="nav-header-nagvition mx-auto w-1/3 flex items-center gap-10 text-xl font-bold">
        <NavLink to="">问答</NavLink>
        <NavLink to="/books">书籍</NavLink>
        <NavLink to="/interviews">面试题</NavLink>
        <a href="https://www.bilibili.com/">视频教程</a>
      </div>
      {/* 搜索 */}
      <HeaderInputSearch className="flex-1 mx-10" />
      {/* 登录按钮 */}
      <div className="nav-header-login">
        <UserAuth openLoginModal={openLoginModal} />
      </div>
    </div>
  )
}

export default NavHeader