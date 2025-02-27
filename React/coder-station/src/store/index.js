import { createStore } from "redux"

const initialState = {
  isLogin: false,
  userInfo: {
    userName: "Ton",
    avatar: "../assets/vincent.png",
    score: "100"
  }
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
    { 
        let loginData = {
            isLogin: true,
            userInfo: action.payload
          }
      return Object.assign(state, loginData) 
    }
    case 'logout':
    { 
      let newLoginData = {
        isLogin: true,
        userInfo: {}
      }
      return Object.assign(state, newLoginData)
    }
    default:
      return state
  }
}

const store = createStore(userReducer)

export default store