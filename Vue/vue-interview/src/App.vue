<script setup>
import NavComponent from './components/NavComponent.vue';
</script>

<template>
  <div class="flex w-screen">
    <NavComponent/>
    <main class="flex-1 flex place-content-center">
      <router-view />
    </main>
  </div>
</template>
