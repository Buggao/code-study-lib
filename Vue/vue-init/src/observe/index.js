/**
 * 响应式核心
 * 但目前写法性能差：
 * - 对多层对象进行遍历；
 * - 数组则每一项都会添加get set方法
 * - 且数组长度更新是无法引起监听的
 * 就是一套玩具写法
 * =========》》优化 》》==========
 * 判断数组 重写数组的七个操作方法
 * pop push shift slice sort reserve unshift 
 **/  

import rebuildArrayPrototype from "./array"

//使用类是为了内聚相关操作
class Observe {
  constructor(data) {
    if(Array.isArray(data)) {
      data.__proto__ = rebuildArrayPrototype
    } else {
      //遍历data的数据
      this.walk(data)
    }
  }
  walk(data) {
    //不使用for in是为了避免访问到原型上的数据
    const keys = Object.keys(data)
    keys.forEach(key => {
      defineReactive(key, data, data[key])
    })
  }
}

/**
 * 使用defineproperty 绑定set get方法，实现监听
 */
function defineReactive(key, data, value) {
  //对于嵌套对象处理
  observe(value)
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if(newValue !== value) {
        //如果set的是一个对象，则对这个对象也进行监听
        observe(newValue)
        value = newValue
      }
    }
  })
}

export default function observe(data) {
  // 只有对象才会绑定响应式
  if( typeof data !== "object" || data === null) return 
  new Observe(data)
}

