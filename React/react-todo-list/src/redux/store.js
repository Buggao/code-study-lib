// 从redux中引入 创建store函数 
import { createStore } from "redux";

// 引入纯函数
import { todoReducer } from "./reducers";

// 创建store
const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;