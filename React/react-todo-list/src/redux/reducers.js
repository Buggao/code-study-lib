import { ADD, DELETE, EDIT } from "./actionType";

const defaultState = {
  list: [
    {
      content: "看React视频",
      status: false
    },
    {
      content: "复习Vue",
      status: false
    },
    {
      content: "学习TS",
      status: false
    },
    {
      content: "背40个单词",
      status: true
    },
  ]
}

/**
 * 涉及todo的纯函数（传入固定的值，就会执行固定的操作，不会有副作用
 * 
 * @param {state} 仓库数据 
 * @param {action}  描述对象
 * 
 */
export function todoReducer(state=defaultState, action){
  switch(action.type) {
    case ADD: {
      const arr = [...state.list]
      arr.push({content: action.data, status: false})
      return {list : arr}
    }
    case EDIT: {
      const arr = [...state.list]
      arr[action.index].status = !arr[action.index].status 
      return {list : arr}
    }
    case DELETE: {
      const arr = [...state.list]
      arr.splice(action.index, 1)
      return {list : arr}
    }
    default: return state
  } 
};