/* eslint-disable react/prop-types */
import './App.css'
import List from './components/List'
import MyInput from './components/MyInput'
function App(props) {
  return (
    <>
      <div>
        <h1 className="text-teal-200">TO DO LIST</h1>
        <MyInput store={props.store}/>
        <List store={props.store}/>
      </div>
    </>
  )
}

export default App
