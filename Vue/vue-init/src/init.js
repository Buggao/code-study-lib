
import initState from "./state";
import compileFunction from "./compiler/index"

export default function initMixin(Vueact) {
  Vueact.prototype._init = function(options) {
    const vm = this;
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
    if(vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
  // 挂载函数
  Vueact.prototype.$mount = function(el) {
    const options = this.$options
    const elDom = document.querySelector(el)
    /**
     * 如果有rander 则使用rander的内容
     * 如果有template 则直接使用template
     * 两个都无 则使用 el
     */
    if(!options.rander) {
      let template = options.template
      if(!template) {
        template = elDom.outerHTML
      }
      const render = compileFunction(template)
      options.render = render
    }
  }
}