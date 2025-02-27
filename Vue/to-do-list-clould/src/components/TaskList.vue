<script setup lang="ts">
import TaskItem from "./TaskItem.vue"
  defineProps({
    todoList: Array<any>
  })
</script>

<template>
  <section class="task-list-container">
    <TaskItem v-for="item in todoList" :key="item.id" :task-item="item"/>
  </section>
</template>

<style>
.task-list-container {
  margin-bottom: 2em;
}
</style>