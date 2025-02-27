import './App.css'
import store from './store'
import { Provider } from 'react-redux'
import NumberContainer from './number-container'

function App() {
  return (
    <>
      <h1>Redux study</h1>
      <div style={{border: "1px solid #ccc", padding: "20px", borderRadius: "5px"}}>
        <Provider store={store}>
          <NumberContainer />
        </Provider>
      </div>
    </>
  )
}


export default App
