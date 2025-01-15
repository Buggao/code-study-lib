<script setup>
const handleSlotClick = () => {
  slotFatherString.value = "我是父组件传递给插槽的内容, 子组件的函数改变了我"
}
</script>

<template>
  <div class="m-2 p-8 border-dotted border-2 border-sky-500" v-bind="$attrs">
    <slot name="US"></slot>
    <slot></slot>
    <div v-if="$slots.default">父组件传递了slot</div>
    <div v-bind="$slots">$slot object</div>
  </div>
</template>