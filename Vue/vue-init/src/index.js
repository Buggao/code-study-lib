/**
 * 在vue2中 不通处理模块使用function的方式集合
 * 而在es6中所有的方法都推荐写在class内,
 * 不推荐混合使用prototype的形式.
 * 所以vue2依然使用构造函数的方式
*/

import initMixin from "./init";

function Vueact(options) {
  this._init(options);
}

/**
 * 为了方便维护，每个属性都使用单独文件，
 * 这里通过initMixin讲init函数挂载至Vueact上
*/ 
initMixin(Vueact);

export default Vueact