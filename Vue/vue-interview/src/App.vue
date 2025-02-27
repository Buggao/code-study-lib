<script setup>
import PageNav from './components/page-nav.vue';
</script>

<template>
  <div class="flex w-screen max-h-screen">
    <PageNav/>
    <main class="flex-1 overflow-y-auto p-b-4">
      <router-view />
    </main>
  </div>
</template>
