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
  <nav>
    <RouterLink to="/user/123" class="mr-2">Go to user1</RouterLink>
    <RouterLink to="/user/456" class="mr-2">Go to user2</RouterLink>
    <RouterLink to="/home">to home</RouterLink>
  </nav>
  <div class="w-100 h-100 border-solid border-amber-5">
    <RouterView />

  </div>
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
