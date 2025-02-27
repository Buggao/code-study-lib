<script setup>
import { useAttrs } from 'vue';

const attr = useAttrs();
console.log("attr", attr)
</script>

<template>
  <div class="m-2 p-8 border-dotted border-2 border-sky-500" v-bind="$attrs">
    attr
    <div v-bind="$slots">has $slots?</div>
  </div>
  <div @click="$attrs.onClick" :style="$attrs.style">attr`s second div</div>
</template>