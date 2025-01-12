import PageFooter from '@/components/page-footer';
import NavHeader from '@/components/nav-header';
import './App.css'

import LoginModal from "@/components/login-modal";

import { useState } from "react"
import { Outlet } from 'react-router-dom'

function App() {

  const [ isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <div className="coder-station-app-container">
      <header className="coder-station-app-header">
        <NavHeader openLoginModal={() => setIsOpenLoginModal(true)} />
      </header>
      <main className="coder-station-app-main" >
        <Outlet />
      </main>
      <footer className="coder-station-app-footer">
        <PageFooter />
      </footer>
      <LoginModal isOpen={isOpenLoginModal} closeModal={() => setIsOpenLoginModal(false)} />
    </div>
  )
}

export default App
