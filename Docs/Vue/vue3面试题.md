# 答题套路

给出结论 =》 给出原因（为什么这样做，为什么不能这样做） =》结合实践 =》 结合源码，深度挖掘问题。 

## v-if和v-for能不能在同一个组件上使用？

### 给出结论

因为vue的指令中v-if比v-for有更高的优先级；如果v-if取用v-for中的值，那么会存在取不到值的错误。

### 说出细节

在源码编译的时候v-if是更优先处理的

### 场景

## Vue的生命周期

### 基础概念

生命周期钩子是vue3实例创建时经历的一系列初始化步骤。在实例化一个组件时经历了下面这几个阶段：

- `setup`

- `beforeCreate`

- `Created`

- `beforeMount`

- `mounted`

- `beforeUpdate`

- `updated`

- `beforeUnMount`

- `unMounted`

vue3如果使用组合式API，setup会在所有选项式API前调用，并且在setup中会完成数据初始化的工作，所以就不再有`created`和`beforeCreate`两个API。vue会判断`setup`中定义的数据，

除了创建组件的生命周期外，还有keep-alive组件的一对生命周期，以及当vue错误处理`onErrorCaptured`的钩子，还有调试用的`onRenderTriggered()`和ssr服务端渲染的钩子`onServerPrefetch() `

### 场景

初始化任务放到beforeCreate中

created中放入一些获取接口数组中

mounted可以获取子组件信息（一个父子组件的生命周期执行是什么样的？）

## Vue双向绑定

双向绑定的概念

带来的好处

在哪些地方使用

使用细节、vue3变化

表单绑定的特殊处理、组件的中的使用方式

原理

## vue如何扩展一个组件？

