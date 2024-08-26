import { isObject } from "@vue/shared";
import { track, trigger } from "./effect";
import { reactive } from "./reactive";

export function Ref(_value: any) {
  return createRef(_value);
}
export function shallowRef(_value: any) {
  return createRef(_value, true);
}

// 非shallow判断是不是对象 如果是对象则直接包裹一层reactive 否则返回该值
const convert = (_value: any) => isObject(_value) ? reactive(_value) : _value

class RefImpl {
  public _value: any;
  constructor(public rawValue: any, isShallow: boolean) {
    this._value = isShallow ? rawValue : convert(rawValue)
  }
  get(){
    track(this, "get", "value")
  }
  set(newValue: any) {
    trigger(this, "set", "value", newValue, this.rawValue)
  }
}


function createRef(_value: any, isShallow = false) {
  return new RefImpl(_value, isShallow)
}


/**
 * 调用时 target 为一个reactive对象 name为key
 */
class ObjectRefImpl{
  constructor(public target:any, public key: any) {

  }
  get value() {
    return this.target[this.key]
  }
  set value(newValue) {
    this.target[this.key] = newValue
  }
}

export function toRef(target: any, key: any) {
  return new ObjectRefImpl(target, key)
}

export function toRefs(target: any) {
  const res: any = Array.isArray(target) ? new Array(target.length) : {}
  for(const key in res) {
    res[key] = toRef(target, key)
  }
}