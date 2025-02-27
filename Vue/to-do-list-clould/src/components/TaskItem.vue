<script setup lang="ts">
import { inject } from 'vue';
defineProps({
  taskItem: Object
})
const deleteTask = inject("deleteTask")
</script>

<template>
  <div class="task-item">
    <input type="checkbox" v-model="taskItem.completed" />
    <div :class="[{ 'completed': taskItem.completed }, 'task-content']">{{ taskItem.name }}</div>
    <button class="delete-btn" @click="deleteTask(taskItem.id)">删除</button>
  </div>
</template>

<style>
.task-item {
  width: 100%;
  margin: 0.6em 0;
  padding: .6em 1.2em;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;

}
.task-content {
  padding-left: 1em;
  text-align: left;
  flex: 1;
}
.delete-btn {
  opacity: 0;
  padding: 0.3em 0.6em;
}
.task-item:hover .delete-btn{
  background-color: #e8532a;
  display: block;
  opacity: 100;
}

</style>