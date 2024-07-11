/**
 * 使用object.create方法 将 数组的原型作为 重写方法的对象 的原型
 * Array原型上有 at、find、fill、forEach、map、pop、push、some、sort、splice这些方法
 * rebuildArrayPrototype是一个以Array的原型为原型的对象
 * 所以可以通过 rebuildArrayPrototype.__proto__ 访问到Array.prototype 
 */

let arrayPrototye = Array.prototype

let rebuildArrayPrototype = Object.create(Array.prototype) 
//需要改写的方法合集
let methods = [
  "pop",
  "push",
  "shift",
  "slice",
  "sort",
  "splice",
  "unshift"
]

//遍历需要改写的方法的合集
methods.forEach(method => {
  //重写方法
  rebuildArrayPrototype[method] = function(...args) {
    arrayPrototye[method].call(this, ...args);
  }
})

export default rebuildArrayPrototype