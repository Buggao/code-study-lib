(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vueact = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r );
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  /**
   * 使用object.create方法 将 数组的原型作为 重写方法的对象 的原型
   * Array原型上有 at、find、fill、forEach、map、pop、push、some、sort、splice这些方法
   * rebuildArrayPrototype是一个以Array的原型为原型的对象
   * 所以可以通过 rebuildArrayPrototype.__proto__ 访问到Array.prototype 
   */

  var arrayPrototye = Array.prototype;
  var rebuildArrayPrototype = Object.create(Array.prototype);
  //需要改写的方法合集
  var methods = ["pop", "push", "shift", "slice", "sort", "splice", "unshift"];

  //遍历需要改写的方法的合集
  methods.forEach(function (method) {
    //重写方法
    rebuildArrayPrototype[method] = function () {
      var _arrayPrototye$method;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_arrayPrototye$method = arrayPrototye[method]).call.apply(_arrayPrototye$method, [this].concat(args));
    };
  });

  //使用类是为了内聚相关操作
  var Observe = /*#__PURE__*/function () {
    function Observe(data) {
      _classCallCheck(this, Observe);
      if (Array.isArray(data)) {
        data.__proto__ = rebuildArrayPrototype;
      } else {
        //遍历data的数据
        this.walk(data);
      }
    }
    return _createClass(Observe, [{
      key: "walk",
      value: function walk(data) {
        //不使用for in是为了避免访问到原型上的数据
        var keys = Object.keys(data);
        keys.forEach(function (key) {
          defineReactive(key, data, data[key]);
        });
      }
    }]);
  }();
  /**
   * 对象使用defineproperty 重写
   */
  function defineReactive(key, data, value) {
    //对于嵌套对象处理
    observe(value);
    Object.defineProperty(data, key, {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        if (newValue !== value) {
          //如果重新赋值对象
          observe(newValue);
          value = newValue;
        }
      }
    });
  }
  function observe(data) {
    // 只有对象进入下一层
    if (_typeof(data) !== "object" || data === null) return;
    new Observe(data);
  }

  function initState(vm) {
    //读取配置信息
    var options = vm.$options;

    //判断vue包含的数据类型·
    if (options.data) {
      initData(vm);
    }
  }

  //处理data类型
  function initData(vm) {
    var data = vm.$options.data;
    //如果 data是函数则拿函数的返回值，如果是object，直接使用
    data = typeof data === "function" ? data.call(vm) : data;
    //调用产生响应式的函数
    observe(data);
  }

  function initMixin(Vueact) {
    Vueact.prototype._init = function (options) {
      var vm = this;
      //vue的特性是可以访问options，所以把配置项添加到对象上，此时vm可以全局访问，因此options也可以全局访问
      vm.$options = options;

      /**
       * init要做的事情之一：初始化数据
       * 将数据变成响应式的
       * vue的数据源有 props data computer watch 
       * 所以通过判断后 依次处理
       * 当然具体逻辑放入到新的文件中处理
       */

      //调用数据处理函数
      initState(vm);
    };
  }

  /**
   * 因为vue中不同属性在不同文件中，
   * 而在es6中所有的方法都推荐在class中完成,
   * 不推荐使用prototype的形式.
   * 所以vue2依然使用构造函数的方式
  */

  function Vueact(options) {
    this._init(options);
  }

  //为了方便维护，每个属性都使用单独文件，这里通过initMixin讲init函数挂载至Vueact上，因此可以使用
  initMixin(Vueact);

  return Vueact;

}));
//# sourceMappingURL=vue.js.map
