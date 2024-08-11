import { isChanged, isObject, merge, isArray, isIntegeKey, hasOwn } from "@vue/shared";
import { reactive, readonly } from "./reactive"
import { track, trigger} from "./effect"

// 使用函数柯里化的方式整合一个get和set的创建方式
function createGetter(isReadonly = false, isShallow = false) {
  /**
   * target 原本的对象
   * key 取的属性
   * recevier 代理对象
   */
  return function get(_target: any, _key: any, _recevier: any){
    console.log("用户取值了", _target, _key, _recevier);
    const res = Reflect.get(_target, _key, _recevier)
    // vue内部对跟踪的函数进行的操作
    track(_target, "123get", _key);
    // 如果不是浅代理 且 取值是个对象，则递归
    if( !isShallow && isObject(res)) {
      // 此处为懒递归，只有取值时才递归
      return isReadonly ? readonly(res) : reactive(res);
    }
    return res
  }
}

function createSetter(isShallow = false) {
  return function set(_target: any, _key: any, _value: any, _recevier: any){
    // set有两种情况：1、新增属性；2、修改属性
    console.log("用户设置值了", _target, _key, _value, _recevier);
    let oldValue = _target[_key];
    // 如果旧值 === 新值 则返回 在进行数组操作时 最后更改数组的长度值是不会修改的
    /**
     * 判断是否为数组 且 此时key为一个数值 hadKey = isArray(_target) && isIntegeKey(_key) 
     * 如果不是数组或值不为key，说明是对象或新增数组元素 则执行hasOwn 判断有没有该属性 得知是否为新增
     * 如果是数组，且此时key小于数组的长度 说明也是新增
     */
    let hadKey = isArray(_target) && isIntegeKey(_key) ? Number(_key)<_target.length : hasOwn(_target, _key)
    // 如果设置失败 Reflect返回为false 否则为true 与proxy的set必须返回boolean值相符合
    const res = Reflect.set(_target, _key, _value, _recevier);
    if(hadKey) {
      trigger(_target, "234get567", _key, _value, _recevier)
      console.log("新增")
    }else if(isChanged(oldValue, _value)) {
      console.log("值修改了");
    }
    return res
  }
}


const get = createGetter();
const readonlyGet = createGetter(true);
const shallowGet = createGetter(false,true);
const shallowReadonlyGet = createGetter(true, true);

const set = createSetter();
const shallowSet = createSetter(true);


export const reactiveHandlers = {
  get: get,
  set: set
}

export const shallowReactiveHandlers = {
  get: shallowGet,
  set: shallowSet
}

// radonly 使用get时打印警告
let readonlySet = {
  set(target: any, key: any) {
    console.warn(`Cannot set ${target} on key ${key} failed.`)
    return false
  }
}

export const readonlyHandlers = merge({
  get: readonlyGet
},readonlySet)

export const  shallowReadonlyHandlers = merge({
  get: shallowReadonlyGet,
},readonlySet)