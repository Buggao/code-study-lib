// import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "../css/header.css"

export default function MyHeader() {

  return (
    <header className="h-18 bg-cyan-900 flex justify-between items-center text-xl text-slate-400">
      <div className="ml-1/8 text-slate-300 font-black cursor-pointer header-band">学生管理系统</div>
      <nav className="flex flex-1 h-full items-center ml-8">
        <NavLink to="/home" className="flex h-full items-center menu-item leading-none">主页</NavLink> 
        <NavLink to="/about" className="flex h-full items-center menu-item leading-none">关于我们</NavLink>
      </nav>
      <div className="mr-16 active:(bg-cyan-300 text-slate-700) add-student-btn">
        <button>
          <Link to="/add">添加学生</Link>
        </button>
      </div>
    </header>
  )
}