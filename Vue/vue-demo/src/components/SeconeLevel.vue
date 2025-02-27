<script setup>
import { inject } from 'vue';
const {fatherMsg, updateFatherMsg} = inject('fatherData')
const virtualData = inject('virtualData', () => "waoh", true);
</script>

<template>
  <div>
    <h4>我是第二级组件</h4>
    <p>父组件注入的值为： {{ fatherMsg }}</p>
    <button @click="updateFatherMsg(`我是子组件${Date.now()}`)">更改父组件的值</button>
  <p>虚拟的值为： {{ virtualData }}</p>
  </div>
</template>