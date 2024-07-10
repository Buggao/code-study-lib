
import initState from "./state"

export default function initMixin(Vueact) {
  Vueact.prototype._init = function(options) {
    const vm = this
    //vue的特性是可以访问options，所以把配置项添加到对象上，此时vm可以全局访问，因此options也可以全局访问
    vm.$options = options
    
    /**
     * init要做的事情之一：初始化数据
     * 将数据变成响应式的
     * vue的数据源有 props data computer watch 
     * 所以通过判断后 依次处理
     * 当然具体逻辑放入到新的文件中处理
     */  

    //调用数据处理函数
    initState(vm);
  }
}