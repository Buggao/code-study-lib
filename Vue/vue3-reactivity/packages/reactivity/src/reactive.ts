import { isObject } from "@vue/shared";
import {reactiveHandlers, shallowReactiveHandlers, readonlyHandlers, shallowReadonlyHandlers} from "./baseHandlers"

export function reactive(target:any) {
  return ceateReactiveObject(target, false, reactiveHandlers);
}

// 浅监听 不代理深层次的对象
export function shallowReactive(target: any) {
  return ceateReactiveObject(target, false, shallowReactiveHandlers);
}

// 只读 不能修改
export function readonly(target: any) {
  return ceateReactiveObject(target, true, readonlyHandlers);
}

// 浅只读 只对浅层次的对象限制，深层的对象既不监听又不代理也无限制
export function shallowReadonly(target:any) {
  return ceateReactiveObject(target, true, shallowReadonlyHandlers);
}


// weakMap是一个弱引用 当对象释放后 weakMap就也会释放（垃圾回收）
// 在这里当代理的对象销毁时，对应的map就也会销毁
const reactiveWeakMap = new WeakMap();
const readonlyWeakMap = new WeakMap();
/**
 * 处理不同情况下的函数
 * @param target 代理的目标
 * @param isReadonly 是否只读
 * @param baseHanle 处理函数
 */
function ceateReactiveObject(target: any, isReadonly: boolean, baseHandler: ProxyHandler<any>) {
  // 核心， 类似与柯里化的应用，缩小应用范围
  if(!isObject(target)) return target
  // readonly 使用两套weakMap
  const proxyMap = isReadonly ? reactiveWeakMap : readonlyWeakMap
  // 已经被代理则返回proxy代理对象
  if(proxyMap.has(target)) return target
  const proxy = new Proxy(target, baseHandler);
  proxyMap.set(target, proxy)
  return proxy;
}
