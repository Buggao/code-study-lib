import { useState, useCallback } from "react";

let oldFunc = null;
function Hooks() {
  const [value, setValue] = useState({number: 0});
  const addNumber = useCallback(
    () => setValue(previous => ({...previous, number: previous.number + 1})), 
    [value])
  console.log("wtf", oldFunc === addNumber);
  oldFunc = addNumber;
  return (
    <div>
      <h1>Hooks</h1>
      <div>
        <span>hooks: {value.number}</span>
        <button onClick={addNumber}>+</button>
      </div>
    </div>
  );
}

export default Hooks;