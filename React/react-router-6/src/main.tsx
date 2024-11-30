import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root, { loader as rootLoader} from "@/components/root"
import ErrorPage from '@/error-page'
import Contact from '@/components/contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    children: [
      {
        // 注意子路由不要以/开头
        path: "contacts/:uid",
        element: <Contact />,
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
