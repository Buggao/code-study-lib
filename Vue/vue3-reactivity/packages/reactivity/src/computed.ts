import { isObject } from "@vue/shared";
import { effect } from "./effect";

class ComputedRefImpl {
  public effect: any;
  public _value: any;
  constructor(public getter: any, public setter: any) {
    this.effect = effect(getter, {lazy: true, schedular: (effect:any) => {
      console.log("123");
    }})
  }

  get value() {
    this._value = this.effect();
    return this._value
  }
  set value(newValue) {
    this.setter(newValue)
  }
}

export function computed(getterOrOptions: any) {
  let getter, setter;
  if(isObject(getterOrOptions)) {
    getter = getterOrOptions.get
    setter = getterOrOptions.set
  } else {
    getter = getterOrOptions
    setter = () => { console.warn("computer don`t have setter.")}
  }
  return new ComputedRefImpl(getter, setter)
}