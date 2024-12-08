import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './index.css'
import 'virtual:uno.css'
import App from './App'

createRoot(document.getElementById('root')).render( 
  <ConfigProvider locale={zhCN} >
    <App />
  </ConfigProvider>
)
