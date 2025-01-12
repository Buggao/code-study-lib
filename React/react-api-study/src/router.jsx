import { createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import Hooks from './pages/Hooks'

export const childPages = [
  {
    path:"",
    name: "Hooks", 
    element: <Hooks/>
  }
]


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      ...childPages
    ]
  }
])

export default router