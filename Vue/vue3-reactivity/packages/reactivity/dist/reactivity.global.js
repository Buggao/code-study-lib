var reactivity = (function (exports) {
  'use strict';

  function isObject(value) {
      return typeof value == 'object' && value !== null;
  }
  function isChanged(oldValue, newValue) {
      return newValue !== oldValue;
  }
  let merge = Object.assign;
  let isArray = Array.isArray;
  function isIntegeKey(key) {
      return parseInt(key) + '' == key;
  }
  function hasOwn(target, key) {
      return Object.prototype.hasOwnProperty.call(target, key);
  }

  function effect(fn, options = {}) {
      // TODO 为什么这里有这么return？？
      const effect = createReactiveEffect(fn, options);
      if (!options.lazy) {
          effect();
      }
      return effect;
  }
  const effectStack = [];
  exports.activeEffect = void (0);
  let id = 0;
  function createReactiveEffect(_fn, _options) {
      // 处理effect的多层嵌套,使用数组(栈)的方法来解决
      const _effect = function reactiveEffect() {
          try {
              effectStack.push(_fn);
              exports.activeEffect = _effect;
              return _fn();
          }
          finally {
              effectStack.pop();
              exports.activeEffect = effectStack[effectStack.length - 1];
          }
      };
      _effect.id = id++;
      _effect.__isEffect = true;
      _effect.options = _options;
      _effect.deps = [1];
      return _effect;
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
  function track(target, type, key) {
      // 先判断是否存在activeEffect 如果不存在（在effect之前取值）则只是取值而已
      if (exports.activeEffect === void (0))
          return;
      // 判断是否包含了该对象
      let depsMap = targetMap.get(target);
      if (!depsMap) {
          // 如果不包含 则创建一个 键为该对象 值为一个Map
          targetMap.set(target, (depsMap = new Map()));
      }
      // 判断是否有该属性的依赖
      let dep = depsMap.get(key);
      if (!dep) {
          // 如果没有该属性的依赖，则创建一个 键为该属性 值为一个set
          depsMap.set(key, (dep = new Set()));
      }
      // 判断该set有没有 effect 没有就添加
      if (!dep.has(exports.activeEffect)) {
          dep.add(exports.activeEffect);
      }
      console.log(targetMap);
  }
  function trigger(target, type, key, newValue, oldValue) {
      const depsMap = targetMap.get(target);
      // 如果没有该值 返回
      if (!depsMap)
          return;
      // 创建一个新的set 用于筛选effect（可能多次触发trigget 所以可能会有重复的effect）
      const effectSet = new Set();
      function addEffects(effects) {
          if (effects) {
              effects.forEach((effect) => {
                  effectSet.add(effect);
              });
          }
      }
      // 如果有 值为对象所对应的所有effect关系的 Map 则继续取属性
      addEffects(depsMap.get(key));
      effectSet.forEach((effect) => {
          let hasSchedular = effect.options.schedular;
          if (hasSchedular) {
              hasSchedular(effect);
          }
          else {
              effect();
          }
      });
      console.log("You are in trigger");
  }

  // 使用函数柯里化的方式整合一个get和set的创建方式
  function createGetter(isReadonly = false, isShallow = false) {
      /**
       * target 原本的对象
       * key 取的属性
       * recevier 代理对象
       */
      return function get(_target, _key, _recevier) {
          console.log("用户取值了", _target, _key, _recevier);
          const res = Reflect.get(_target, _key, _recevier);
          // vue内部对跟踪的函数进行的操作
          track(_target, "123get", _key);
          // 如果不是浅代理 且 取值是个对象，则递归
          if (!isShallow && isObject(res)) {
              // 此处为懒递归，只有取值时才递归
              return isReadonly ? readonly(res) : reactive(res);
          }
          return res;
      };
  }
  function createSetter(isShallow = false) {
      return function set(_target, _key, _value, _recevier) {
          // set有两种情况：1、新增属性；2、修改属性
          console.log("用户设置值了", _key, _value);
          let oldValue = _target[_key];
          // 如果旧值 === 新值 则返回 在进行数组操作时 最后更改数组的长度值是不会修改的
          /**
           * 判断是否为数组 且 此时key为一个数值 hadKey = isArray(_target) && isIntegeKey(_key)
           * 如果不是数组或值不为key，说明是对象或新增数组元素 则执行hasOwn 判断有没有该属性 得知是否为新增
           * 如果是数组，且此时key小于数组的长度 说明也是新增
           */
          let hadKey = isArray(_target) && isIntegeKey(_key) ? Number(_key) < _target.length : hasOwn(_target, _key);
          // 如果设置失败 Reflect返回为false 否则为true 与proxy的set必须返回boolean值相符合
          const res = Reflect.set(_target, _key, _value, _recevier);
          if (!hadKey) {
              trigger(_target, "234get567", _key);
              console.log("新增");
          }
          else if (isChanged(oldValue, _value)) {
              trigger(_target, "234get567", _key);
              console.log("值修改了");
          }
          return res;
      };
  }
  const get = createGetter();
  const readonlyGet = createGetter(true);
  const shallowGet = createGetter(false, true);
  const shallowReadonlyGet = createGetter(true, true);
  const set = createSetter();
  const shallowSet = createSetter(true);
  const reactiveHandlers = {
      get: get,
      set: set
  };
  const shallowReactiveHandlers = {
      get: shallowGet,
      set: shallowSet
  };
  // radonly 使用get时打印警告
  let readonlySet = {
      set(target, key) {
          console.warn(`Cannot set ${target} on key ${key} failed.`);
          return false;
      }
  };
  const readonlyHandlers = merge({
      get: readonlyGet
  }, readonlySet);
  const shallowReadonlyHandlers = merge({
      get: shallowReadonlyGet,
  }, readonlySet);

  function reactive(target) {
      return ceateReactiveObject(target, false, reactiveHandlers);
  }
  // 浅监听 不代理深层次的对象
  function shallowReactive(target) {
      return ceateReactiveObject(target, false, shallowReactiveHandlers);
  }
  // 只读 不能修改
  function readonly(target) {
      return ceateReactiveObject(target, true, readonlyHandlers);
  }
  // 浅只读 只对浅层次的对象限制，深层的对象既不监听又不代理也无限制
  function shallowReadonly(target) {
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
  function ceateReactiveObject(target, isReadonly, baseHandler) {
      // 核心， 类似与柯里化的应用，缩小应用范围
      if (!isObject(target))
          return target;
      // readonly 使用两套weakMap
      const proxyMap = isReadonly ? reactiveWeakMap : readonlyWeakMap;
      // 已经被代理则返回proxy代理对象
      if (proxyMap.has(target))
          return target;
      const proxy = new Proxy(target, baseHandler);
      proxyMap.set(target, proxy);
      return proxy;
  }

  function Ref(_value) {
      return createRef(_value);
  }
  function shallowRef(_value) {
      return createRef(_value, true);
  }
  // 非shallow判断是不是对象 如果是对象则直接包裹一层reactive 否则返回该值
  const convert = (_value) => isObject(_value) ? reactive(_value) : _value;
  class RefImpl {
      constructor(rawValue, isShallow) {
          this.rawValue = rawValue;
          this._value = isShallow ? rawValue : convert(rawValue);
      }
      get() {
          track(this, "get", "value");
      }
      set(newValue) {
          trigger(this, "set", "value", newValue, this.rawValue);
      }
  }
  function createRef(_value, isShallow = false) {
      return new RefImpl(_value, isShallow);
  }
  /**
   * 调用时 target 为一个reactive对象 name为key
   */
  class ObjectRefImpl {
      constructor(target, key) {
          this.target = target;
          this.key = key;
      }
      get value() {
          return this.target[this.key];
      }
      set value(newValue) {
          this.target[this.key] = newValue;
      }
  }
  function toRef(target, key) {
      return new ObjectRefImpl(target, key);
  }
  function toRefs(target) {
      const res = Array.isArray(target) ? new Array(target.length) : {};
      for (const key in res) {
          res[key] = toRef(target, key);
      }
  }

  class ComputedRefImpl {
      constructor(getter, setter) {
          this.getter = getter;
          this.setter = setter;
          this.effect = effect(getter, { lazy: true, schedular: (effect) => {
                  console.log("123");
              } });
      }
      get value() {
          this._value = this.effect();
          return this._value;
      }
      set value(newValue) {
          this.setter(newValue);
      }
  }
  function computed(getterOrOptions) {
      let getter, setter;
      if (isObject(getterOrOptions)) {
          getter = getterOrOptions.get;
          setter = getterOrOptions.set;
      }
      else {
          getter = getterOrOptions;
          setter = () => { console.warn("computer don`t have setter."); };
      }
      return new ComputedRefImpl(getter, setter);
  }

  exports.Ref = Ref;
  exports.computed = computed;
  exports.effect = effect;
  exports.reactive = reactive;
  exports.readonly = readonly;
  exports.shallowReactive = shallowReactive;
  exports.shallowReadonly = shallowReadonly;
  exports.shallowRef = shallowRef;
  exports.toRef = toRef;
  exports.toRefs = toRefs;
  exports.track = track;
  exports.trigger = trigger;

  return exports;

})({});
//# sourceMappingURL=reactivity.global.js.map
