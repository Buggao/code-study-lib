<script setup>
import { ref } from 'vue'
const emits = defineEmits(['addTask']);
const taskName = ref('');
function addNewTask() {
  taskName.value = taskName.value.trim();
  emits('addTask', taskName.value);
}

</script>

<template>
  <section class="task-input-container">
    <input class="task-input" v-model="taskName" type="text" placeholder="请输入任务名称"/>
    <button @click="addNewTask">添加</button>
  </section>
</template>

<style scoped>
  .task-input-container {
    width: 50vw;
    padding: 2em;
    gap: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .task-input {
    flex: 1;
    padding: 6px;
  }
</style>