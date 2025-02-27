<script setup>
  import { ref, computed } from 'vue'
  import LifeCycle from './components/LifeCycle.vue';
  const showData = ref("");
  const showList = [
    {name: "Ton", age: 20},
    {name: "Eva", age: 18 },
    {name: "Milk", age: 3}
  ]
  const listLength = computed(() => showList.length)
</script>

<template>
  <h1>vue</h1>
  <input type="text" v-model="showData" placeholder="input name">
  <button @click="showList.push({name: showData, age: 23})">add List</button>
  <div v-for="(item,index) in showList"> {{index }} : {{ item.name }}- {{ item.age }}</div>
  <div>list length: {{ listLength }}</div>
  <LifeCycle/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
