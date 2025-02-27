import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'
import App from './App.jsx'

import store from "./redux/store.js"
const rooter = createRoot(document.getElementById('root'))

function rander() {
  rooter.render(
    <StrictMode>
      <App store={store} />
    </StrictMode>,
  )
  
}
rander()
// 订阅仓库 每次数据改变时触发
store.subscribe(rander)