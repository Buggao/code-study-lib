<script setup>
import { watchEffect } from 'vue'
import CustomClass from '../../custom/custom-class.js'

// const props = defineProps({
//   msg: {
//     default: function(rawProps) {
//       return "default msg"
//     }
//   },
//   reactiveData:String | Date,
//   isBoolean: [String, Boolean],
//   customClassOne: CustomClass,
//   stateInfo: {
//     validator(value, props) {
//       return true
//     }
//   }
// })

watchEffect(() => {
  // 在 3.5 之前只运行一次
  // 在 3.5+ 中在 "foo" prop 变化时重新执行
  // console.log(props.reactiveData)
})
</script>

<template>
  <div class="m-2 p-8 border-dotted border-2 border-sky-500">
    <div class="pl-8">父组件传来的值为：
      <span>{{ msg }}</span>
      <span>{{ reactiveData }}</span>
    </div>
    <div>
      <span>直接使用msg: {{ msg }}</span></div>
    <div>
      <h3>传递布尔值</h3>
      <div class="pl-8">
        <p>父组件传递一个为true的porps可以直接写属性名</p>
        <p>父组件不传递一个非必填的boolean属性props，该值为{{ isBoolean }}</p>
        <p>也可也在difineProps中通过声明{default: undefined} 的方式进行更改</p>
      </div>
    </div>
    <div>
      <h3>传递对象</h3>
      <div class="pl-8">
        <p>传递对象时可以不用添加变量名 直接使用v-bind对象</p>
        <p>自定义类校验</p>
        <p class="pl-8">{{ customClassOne }}</p> 
      </div>
    </div>
    <div>
      <h3>props校验</h3>
      <p>校验stateInfo：{{ stateInfo }}</p>
    </div>
  </div>
</template>

<style>

</style>