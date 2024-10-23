/**
 * patchProps 用于 处理属性 属性要比标签复杂 因为会涉及到diff算法
 */

const patchClass = ( ele, next) => {
  // 首先如果next为null 那么就清空class 无需管其他情况
  if(next === null) {
    next = ''
  }
  ele.className = next
}

const patchStyle = (ele, prev, next) => {
  // 首先要确保next中的属性可以生效
  // 如果 next 为null 清空属性
  if(next === null) {
    ele.removeAttribute("style");
  } else {
    // 对prev中已经存在的进行修改
    if(prev) {
      for(let prevKey in prev) {
        // next 中不存在该style 取空
        //  如果有 且修改 那就放在for循环中进行修改
        if(next[prevKey] === null) {
          ele.style[prevKey] = ""
        }
      }
    }
    for(let key in next) {
      ele.style[key] = next[key]
    }
  }
}


/** patchProps 接收几个参数 元素 属性 原本的值 需要设定的值 */
export const patchProps = (el, key, prev, next) => {
  // 对几个特殊的属性特殊处理
  switch( key ) {
    case "class": 
      // 对class 的处理
      patchClass(el, next);
      break;
    case "style":
      // 对style的处理
      patchStyle(el, prev, next);
      break;
    default:
      // default 匹配是否为事件
      if(/^on[A-Z]/.test(key)) {

      } else {
        // 其他属性
      }
  }
}

