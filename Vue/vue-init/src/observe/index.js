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

    Object.defineProperty(data, "__observe__", {
      value: this,
      enumerable: false
    })

    if(Array.isArray(data)) {
      data.__proto__ = rebuildArrayPrototype
      // 将监听的数据也变成响应式的
      this.observeArray(data);
    } else {
      //遍历data的数据
      this.walk(data)
    }
  }
  // 数组的监听响应式
  observeArray(data) {
    data.forEach(item => observe(item))
  }
  // 对象遍历监听
  walk(data) {
    //不使用for in是为了避免访问到原型上的数据
    const keys = Object.keys(data)
    keys.forEach(key => {
      defineReactive(data, key, data[key])
    })
  }
}

/**
 * 使用defineproperty 绑定set get方法，实现监听
 */
function defineReactive(data, key, value) {
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
  // 如果被代理也直接返回
  if(data.__observe__) return
  new Observe(data)
}

