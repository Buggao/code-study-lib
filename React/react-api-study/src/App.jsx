import { useState } from 'react'
import { Outlet } from "react-router-dom"
import MenuList from "./components/Menu"
import './App.css'

function App() {
  return (
    <main className="app">
      <nav className="menu">
        <MenuList />
      </nav>
      <Outlet/>
    </main>
  )
}

export default App
