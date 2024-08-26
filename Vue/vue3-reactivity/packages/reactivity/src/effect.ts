export function effect(fn:any, options:any = {}) {
  // TODO 为什么这里有这么return？？
  const effect =  createReactiveEffect(fn, options);
  if(!options.lazy) {
    effect();
    
  }
  return effect
}

const effectStack: any[] = [];
export let activeEffect: any = void(0);
let id = 0; 

function createReactiveEffect( _fn: any, _options: any) {
  // 处理effect的多层嵌套,使用数组(栈)的方法来解决
  const _effect = function reactiveEffect() {
    try {
      effectStack.push(_fn);
      activeEffect = _effect;
      return _fn();
    } finally {
      effectStack.pop();
      activeEffect = effectStack[effectStack.length - 1];
    }
  }
  _effect.id = id++;
  _effect.__isEffect = true;
  _effect.options = _options;
  _effect.deps = [1];
  return _effect
}

/**
 * track 的意义就在于effect的收集依赖功能，但是一个响应式对象存在多个effect，同时一个effect也存在多个响应式对象
 * 因此vue设计了一种模式来存储这类数据
 * 最外侧为一个weakMap（避免内存泄漏）
 * weakMap内部 键为所有采集的响应式对象
 *             值为一个Map 包含着属性值和effect的对应关系
 *   该Map的 键为采集响应式对象的属性
 *           值为一个set，set内部包含着所有与该值的effect
 * @param target 目标响应式对象
 * @param type 目前为“get”写死的
 * @param key 目标对象所收集的属性
 * 所以该函数的目的就是将effect按照数据接口放到对应的位置上
 */
let targetMap = new WeakMap;
export function track(target: any, type: any, key: any) {
  // 先判断是否存在activeEffect 如果不存在（在effect之前取值）则只是取值而已
  if( activeEffect === void(0) ) return
  // 判断是否包含了该对象
  let depsMap = targetMap.get(target)
  if( !depsMap ) {
    // 如果不包含 则创建一个 键为该对象 值为一个Map
    targetMap.set(target, (depsMap = new Map()))
  }
  // 判断是否有该属性的依赖
  let dep = depsMap.get(key)
  if( !dep ) {
    // 如果没有该属性的依赖，则创建一个 键为该属性 值为一个set
    depsMap.set(key, (dep = new Set()))
  }
  // 判断该set有没有 effect 没有就添加
  if( !dep.has(activeEffect) ) {
    dep.add(activeEffect);
  }

  console.log(targetMap)

}

export function trigger(target: any, type: any, key: any, newValue:any, oldValue:any) {
  const depsMap = targetMap.get(target)
  // 如果没有该值 返回
  if(!depsMap) return
  // 创建一个新的set 用于筛选effect（可能多次触发trigget 所以可能会有重复的effect）
  const effectSet = new Set();
  function addEffects(effects: any){
    if(effects) {
      effects.forEach( (effect:any) => {
        effectSet.add(effect)
      });
    }
  }
  // 如果有 值为对象所对应的所有effect关系的 Map 则继续取属性
  addEffects(depsMap.get(key));
  effectSet.forEach(
    (effect: any) => {
      let hasSchedular = effect.options.schedular
      if(hasSchedular) {
        hasSchedular(effect);
      } else {
        effect();
      }
    });
  console.log("You are in trigger");
}