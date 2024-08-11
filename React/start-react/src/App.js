import './App.css';
import Money from './components/Money';
import { useState } from 'react';

function handleClick(str, e) {
  e.preventDefault()
  console.log("click str is", str)
}

function App() {
  
  const USDToCNYRate = 7.16830;
  const CNYToUSDRate = 0.13950;

  const [USD, setUSD] = useState(0);
  const [CNY, setCNY] = useState(0);
  
  function transformUSDToCNY(value){
    if(parseFloat(value) || value === "" || parseFloat(value) === 0) {
      setCNY( (value * USDToCNYRate).toFixed(2))
      setUSD(value)
    } else {
      return value
    }
  }
  
  function transformCNYToUSD(value) {
    if(parseFloat(value) || value === "" || parseFloat(value) === 0) {
      setCNY(value)
      setUSD((value * CNYToUSDRate).toFixed(2))
    } else {
      return value
    }
  
  }
  const element = (
    // 阿斯顿
  <div className="App">
    <main>
      <h1 onClick={
        (e) => handleClick("I am h1", e)} 
        style={
          {color: "#9fe870", 
          fontWeight: "bolder",
          textShadow: "0px 0px 10px #163300, 0px 0px 20px #163300"
          }
        }
        >美元 ⇄ 人民币
      </h1>
      <Money title="美元" money={USD} transformMoney={transformUSDToCNY}/>
      <Money title="人民币" money={CNY} transformMoney={transformCNYToUSD}/>
    </main>
  </div>);
  return element;
}

export default App;

/**
 * TODO 在类中 属性值为一个函数和一个箭头函数有什么区别
 * 类里面this的指向 自执行函数的this指向
 */