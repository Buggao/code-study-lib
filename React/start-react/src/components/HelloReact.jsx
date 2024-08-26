import { useState, useEffect } from "react"

export default function HelloReact() {
  let  [number, setNumber] = useState(0);

  useEffect(() => {
    let stopTimer = setTimeout(() => {
      console.log("stopTImer");
    }, 1000)
    return () => {
      clearTimeout(stopTimer)
    }
  });

  const addCount = () => {
    setNumber(number + 1)
  }
  return (
    <>
    <h1>Hello React component.</h1>
    <div style={{display: "flex", flexFlow: "nowrap row"}}>
      <div>count is:</div>
      <div>{number}</div>
      <button onClick={addCount}>add</button>
    </div>
  </>
  )
}