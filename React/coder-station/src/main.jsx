import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './index.css'
import 'virtual:uno.css'
import App from './App'

import { Provider } from "react-redux"
import store from './store/index'

import { RouterProvider } from "react-router-dom"
import router from './router'

createRoot(document.getElementById('root')).render( 
  <Provider store={store}>
    <ConfigProvider locale={zhCN} >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ConfigProvider>
  </Provider>
)
