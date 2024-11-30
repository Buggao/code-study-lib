import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './index.css'
import 'virtual:uno.css'
import App from './App.jsx'

import { BrowerRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowerRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowerRouter>
  </StrictMode>,
)
