<script setup>
const message = "默认插槽"
const message1 = "具名插槽"
</script>

<template>
  <div>
    <h4>来插入我！</h4>
    <slot :message1="message" string="第二个变量">
      <p>如果没有默认的传值，就显示我。{{ message }}</p>
    </slot>
    <slot name="has-name" :message="message1"></slot>
  </div>
</template>