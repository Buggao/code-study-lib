import { useState, useRef } from "react"

export default function MyForm() {
  const [inputValue, setInputValue ] = useState("");
  const [numberInputValue, setNumberInputValue] = useState("")
  const [textareaValue, setTextareaValue] = useState("")

  const inputRef = useRef()

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handleNumberInputChange(e) {
    // 获取输入框的当前值
    const inputValue = e.target.value;
    let currentValue;

    // 如果输入值为空字符串，将 currentValue 设置为 null
    if (inputValue === '') {
      currentValue = null;
    } else {
      // 尝试将输入值转换为数字，如果转换成功且不是 NaN，则将 currentValue 设置为转换后的数字
      const parsedValue = parseInt(inputValue, 10);
      currentValue =!isNaN(parsedValue)? parsedValue : numberInputValue;
    }

    setNumberInputValue(currentValue);
  }

  function handleTextareaChange(e) {
    setTextareaValue(e.target.value)
  }
  function submitForm(e) {
    console.log("inputValue is", inputValue);
    console.log(inputRef)
  }
  return (
    <form>
      <div className="form-item">
        <label htmlFor="defalutInput">default input:
          <input 
            ref={inputRef}
            value={inputValue} 
            onChange={handleInputChange}
            placeholder="默认输入框"></input>
        </label>
      </div>
      <div className="form-item">
        <label htmlFor="numberInput">number input:
          <input 
            value={numberInputValue} 
            onChange={handleNumberInputChange}
            placeholder="数字输入框"></input>
        </label> 
      </div>
      <div className="form-item">
        <label htmlFor="textarea">textarea:
          <textarea col="80" rows="5" 
            value={textareaValue}
            onChange={handleTextareaChange}/>
        </label> 
      </div>
      <button type="button" onClick={submitForm}>submit</button>
    </form>
  );
}
