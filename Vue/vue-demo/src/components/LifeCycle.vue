<template>
  <div>value {{ demo1 }}</div>
</template>

<script setup>
import { onErrorCaptured } from 'vue';
onErrorCaptured((...args) => {console.log("error is", args)})
</script>