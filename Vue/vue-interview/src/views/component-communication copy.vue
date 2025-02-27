<script setup>
import Props from './componentComponents/props.vue';
import Emits from "./componentComponents/emits.vue";
import VModel from './componentComponents/vmodel.vue';
import Attribute from "./componentComponents/attribute.vue";
import Slot from "./componentComponents/slot.vue";
import { ref } from "vue"
import CustomClass from '../custom/custom-class'


const reactiveData = ref("我是动态值")

const customClass1 = new CustomClass("我是自定义类")
const stringData = "我是固定值"

const childNumber = ref(1)

const slotFatherString = ref("我是父组件传递给插槽的内容")
const handleSlotClick = () => {
  slotFatherString.value = "我是父组件传递给插槽的内容, 父组件的函数改变了我"
  console.log("父组件调用子组件的方法")
}
const toSonMsg = ref("hello son!")
</script>

<template>
  <div class="p-8 w-full">
    <div class="info-text">
      <p class="my-2"><i class="high-light-text-purple">Vue</i>的组件传参可以分为Vue2和Vue3两部分</p>
      <p class="my-2">在Vue3中，传参方式有以下几种</p>
      <ol class="my-2 pl-8">
        <li>props</li>
      </ol>
      <section class="m-b-8">
        <h1>通过props给子组件传值</h1>
        <p class="my-4">父组件中ref变量 reactiveData 为：{{ reactiveData }}</p>
        <button @click="reactiveData = `现在的时间是${new Date().toJSON()}`">改变reactiveData</button>
        <button @click="toSonMsg = `hello son again.`">改变msg</button>
        <Props 
          :msg = "toSonMsg"
          :reactive-data="reactiveData" 
          :custom-class-one="customClass1"
          is-boolean
          state-info="error" />
        <div>
          <div>父组件中响应式的值为： {{ reactiveData }}</div>
          <div>父组件中固定值为： {{ stringData }}</div>
        </div>
        <Emits 
          :parent-msg="reactiveData" 
          :fixed-msg="stringData" 
          @change-ref-data="(value) => reactiveData=value"
          @change-fixed-data="(value) => stringData=value"
          />
        <div>父组件传递给V-Model的值为{{ childNumber }}</div>
        <VModel 
          v-model.number="childNumber"
          v-model:date-msg.formateDate="reactiveData"
        />  
        <Attribute
          style="color: #85e89d"
          @click="() => console.log('父组件attribute回调函数')"
          data-test="测试数据" 
          :msg="reactiveData"
        />
        <Slot>
          <template v-slot:US>
            <div>I am slot content that sended by father component.</div>
          </template>
          <div>{{ slotFatherString }}</div>
          <button @click="handleSlotClick">调用父组件的方法</button>
        </Slot>
      </section>
    </div>
  </div>
</template>

<style>

</style>