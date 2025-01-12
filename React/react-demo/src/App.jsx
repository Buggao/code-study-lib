import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const delayAdd = (num) => {
    setTimeout(() => {
      setCount(num)
    }, 3000)
  }
  const lazyFunc = () => {
    setTimeout(() => {
      setCount(oldCount => ({count: oldCount+1}))
    }, 2000)
  }
  return (
    <>
      <div> count : {count}</div>
      <button onClick={() => setCount(count+1)}>点击加1</button>
      <button onClick={lazyFunc}>延迟两秒加1</button>
      <button onClick={() => delayAdd(prevCount => prevCount + 1 )}>延迟三秒加1</button>
    </>
  )
}

export default App
