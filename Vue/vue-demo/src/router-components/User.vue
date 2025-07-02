<script setup>
import { ref, watch, onBeforeUpdate, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
const showId = ref("");

let timer = null;

const route = useRoute();
showId.value = route.params.id;
watch(() => route.params.id, (id) => {
  console.log("route id is change", id);
  showId.value = id;
})
onBeforeUpdate(() => {
  console.log("user component before update, id is ", showId.value);
})
// 问题：为什么每次组件复用我没有任何UI的渲染和响应式数据的修改，为什么还是会触发beforeUpdate
// 陷阱3，在组件被复用时，定时器也不会被清理，
onMounted(() => {
  timer = setInterval(() => {
    console.log("user component timer is running, id is ", showId.value);
  }, 1000);
  console.log("user component mounted, id is ", showId.value);
})

onBeforeUnmount(() => {
  clearInterval(timer);
  console.log("user component before unmount, id is ", showId.value);
})
</script>

<template>
  <h1>user components</h1>
  <p>id is : {{ showId }}</p>
</template> 