import { createStore } from "redux"

// stroe 包含着一个reducer reducer则是包含所用动作的集合
const math = (state = 6, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.num
    case "SQUARE":
      return state * state
    default:
      return state
  }
}

const store = createStore(math)

export default store