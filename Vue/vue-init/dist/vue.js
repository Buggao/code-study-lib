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
      var inserted;
      var __observe__ = this.__observe__;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      switch (method) {
        case "push":
        case "unshift":
          inserted = args;
          break;
        case "splice":
          inserted = args.slice(2);
      }
      if (inserted) {
        __observe__.observeArray(inserted);
      }
      //需要做的是，重新调用这些方法时，也变成响应式的
      console.log("re build array", this);
      // this上保存着 构造方法的实例，所以可以访问
      (_arrayPrototye$method = arrayPrototye[method]).call.apply(_arrayPrototye$method, [this].concat(args));
    };
  });

  //使用类是为了内聚相关操作
  var Observe = /*#__PURE__*/function () {
    function Observe(data) {
      _classCallCheck(this, Observe);
      Object.defineProperty(data, "__observe__", {
        value: this,
        enumerable: false
      });
      if (Array.isArray(data)) {
        data.__proto__ = rebuildArrayPrototype;
        // 将监听的数据也变成响应式的
        this.observeArray(data);
      } else {
        //遍历data的数据
        this.walk(data);
      }
    }
    // 数组的监听响应式
    return _createClass(Observe, [{
      key: "observeArray",
      value: function observeArray(data) {
        data.forEach(function (item) {
          return observe(item);
        });
      }
      // 对象遍历监听
    }, {
      key: "walk",
      value: function walk(data) {
        //不使用for in是为了避免访问到原型上的数据
        var keys = Object.keys(data);
        keys.forEach(function (key) {
          defineReactive(data, key, data[key]);
        });
      }
    }]);
  }();
  /**
   * 使用defineproperty 绑定set get方法，实现监听
   */
  function defineReactive(data, key, value) {
    //对于嵌套对象处理
    observe(value);
    Object.defineProperty(data, key, {
      get: function get() {
        return value;
      },
      set: function set(newValue) {
        if (newValue !== value) {
          //如果set的是一个对象，则对这个对象也进行监听
          observe(newValue);
          value = newValue;
        }
      }
    });
  }
  function observe(data) {
    // 只有对象才会绑定响应式
    if (_typeof(data) !== "object" || data === null) return;
    // 如果被代理也直接返回
    if (data.__observe__) return;
    new Observe(data);
  }

  function initState(vm) {
    //读取配置信息
    var options = vm.$options;

    //判断options中包含的数据, 包含data则调用处理data的函数
    if (options.data) {
      initData(vm);
    }
  }

  //处理data类型
  function initData(vm) {
    var data = vm.$options.data;
    //如果 data是函数则拿函数的返回值，如果是object，直接使用
    data = typeof data === "function" ? data.call(vm) : data;
    // 用户可以直接通过vm.XXX 或者vm._data.XXX直接访问数据
    for (var key in data) {
      proxy(vm, "_data", key);
    }
    //调用产生响应式的函数
    observe(data);
    // 代理options中的data
    function proxy(data, source, key) {
      Object.defineProperty(data, key, {
        get: function get() {
          return data[source][key];
        },
        set: function set(newValue) {
          vm[source][key] = newValue;
        }
      });
    }
  }

  // TODO:正则表达式学习
  // 检测标签 
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z]*";
  // `((?:[a-zA-Z_][\\-\\.0-9_a-zA-Z]*\\:)?[a-zA-Z_][\\-\\.0-9_a-zA-Z]*)`
  var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
  // 检测标签开头
  var startTagOpen = new RegExp("^<".concat(qnameCapture));

  // 负责将模板解析为AST语法树
  function parseHtml(html) {

    //此时要不断循环html 一直截取到html为空
    var _loop = function _loop() {
      // indexOf 返回所需匹配字符的第一个下标 没有则为-1
      var ishtmlEnd = html.indexOf("<");
      // 默认开头为 <div> 所以 isHtmlEnd 应该为 0
      if (ishtmlEnd == '0') {
        parseStartTag(html);
        return 1; // break
      }

      // 解析开始标签
      function parseStartTag(html) {
        // match 按照正则匹配字符串 无匹配结果返回null 有值则返回个包含匹配内容和方法的数组
        var startTagMatches = html.match(startTagOpen);
        if (startTagMatches) {
          ({
            tagName: startTagMatches[1]
          });
        }
        console.log(startTagMatches);
      }
    };
    while (html) {
      if (_loop()) break;
    }
  }
  function compileFunction(template) {
    console.log(template);
    parseHtml(template);
  }

  function initMixin(Vueact) {
    Vueact.prototype._init = function (options) {
      var vm = this;
      /**
       * vue2有一个特性是特性是可以 通过实例的$options访问到配置信息，
       * 所以把配置项添加到对象上
      */

      vm.$options = options;

      /**
       * init要做的事情之一：初始化数据
       * 将数据变成响应式的
       * vue的数据源有 props data computer watch 
       * 所以通过判断后 依次处理
       * 当然具体逻辑放入到新的文件中处理
       */

      //调用处理数据的函数
      initState(vm);

      //将vue options中的模板渲染
      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
    // 挂载函数
    Vueact.prototype.$mount = function (el) {
      var options = this.$options;
      var elDom = document.querySelector(el);
      /**
       * 如果有rander 则使用rander的内容
       * 如果有template 则直接使用template
       * 两个都无 则使用 el
       */
      if (!options.rander) {
        var template = options.template;
        if (!template) {
          template = elDom.outerHTML;
        }
        var render = compileFunction(template);
        options.render = render;
      }
    };
  }

  /**
   * 在vue2中 不通处理模块使用function的方式集合
   * 而在es6中所有的方法都推荐写在class内,
   * 不推荐混合使用prototype的形式.
   * 所以vue2依然使用构造函数的方式
  */

  function Vueact(options) {
    this._init(options);
  }

  /**
   * 为了方便维护，每个属性都使用单独文件，
   * 这里通过initMixin讲init函数挂载至Vueact上
  */
  initMixin(Vueact);

  return Vueact;

}));
//# sourceMappingURL=vue.js.map
