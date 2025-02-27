import './App.css'
import { Outlet } from "react-router-dom"
import PageHeader from './components/page-header'
function App() {

  return (
    <>
      <header className="page-header">
        <PageHeader/>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
