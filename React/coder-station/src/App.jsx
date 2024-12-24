import PageFooter from '@/components/page-footer';
import NavHeader from '@/components/nav-header';
import './App.css'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="coder-station-app-container">
      <header className="coder-station-app-header">
        <NavHeader />
      </header>
      <main className="coder-station-app-main" >
        <Outlet />
      </main>
      <footer className="coder-station-app-footer">
        <PageFooter />
      </footer>
    </div>
  )
}

export default App
