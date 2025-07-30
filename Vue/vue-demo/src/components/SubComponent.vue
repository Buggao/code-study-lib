<script setup>
  import { ref, onBeforeUpdate } from 'vue';
  defineProps({
    child: {
      type: String,
    },
    stringValue: {
      type: String,
    },
    newValue: {
      type: Object,
    }
  });
  defineOptions({
    inheritAttrs: false
  });
  onBeforeUpdate(() => {
    console.log("i am in sub component, i am updated");
  })
</script>

<template>
  <h2>我是子组件</h2>
  <button @click="$emit()">emit deep Value</button>
</template>