<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs();
const handleClick = () => {
  attrs.car.value += "0"
}
</script>

<template>
  <div class="grandson">
    <h2>我是你儿子，也是你孙子</h2>
    <span>孙子我继承的资产为：</span>
    <button @click="handleClick()">add car</button>
    <div v-for="(item,name) in $attrs" :key="name" >{{name}}: {{ item }}</div>
  </div>
</template>