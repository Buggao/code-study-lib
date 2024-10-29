/* eslint-disable react/prop-types */
import { useState } from 'react';
import { addAction } from '../redux/actions';

function MyInput(props) {
  let [inputValue, setInputValue] = useState("");
  function clickHandle() {
    props.store.dispatch(addAction(inputValue));
    setInputValue("");
  }
  return (
    <div className="flex mt-10">
      <input 
        className="mr-3 w-60" 
        type="text"
        placeholder="请输入代办事项"
        value={ inputValue }
        onChange={(e) => setInputValue(e.target.value)}/>
      <button 
        className="py-2.5 px-5"
        onClick={clickHandle}>
        添加
      </button>
    </div>
  );
}

export default MyInput;