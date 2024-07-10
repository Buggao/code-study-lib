/**
 * 因为vue中不同属性在不同文件中，
 * 而在es6中所有的方法都推荐在class中完成,
 * 不推荐使用prototype的形式.
 * 所以vue2依然使用构造函数的方式
*/

import initMixin from "./init";

function Vueact(options) {
  this._init(options);
}

//为了方便维护，每个属性都使用单独文件，这里通过initMixin讲init函数挂载至Vueact上，因此可以使用
initMixin(Vueact);

export default Vueact