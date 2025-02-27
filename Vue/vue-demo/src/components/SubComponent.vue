<script setup>
  import BaseComponent from './BaseComponent.vue';
  import { useAttrs } from 'vue';
  defineProps({
    child: {
      type: String,
    }
  });
  defineOptions({
    inheritAttrs: false
  });
  const attrs = useAttrs();
  console.log("attrs is", attrs)
</script>

<template>
  <h2>我是你爸，也是你儿子</h2>
  <p>我养儿子花费了{{ child }}</p>
  <p>儿子让我用下你的钱</p>
  <p>用钱买辆车：{{ $attrs.car }}</p>
  <hr />
  <BaseComponent v-bind="$attrs"></BaseComponent>
</template>