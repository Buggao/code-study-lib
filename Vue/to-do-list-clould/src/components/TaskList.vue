<script setup lang="ts">
import TaskItem from "./TaskItem.vue"
  defineProps({
    todoList: Array<any>
  })
</script>

<template>
  <section class="task-list-container">
    <TransitionGroup name="todo-list" tag="div">
      <TaskItem v-for="item in todoList" :key="item.id" :task-item="item"/>
    </TransitionGroup>
  </section>
</template>

<style>
.task-list-container {
  margin-bottom: 2em;
}

.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.5s ease;
}

.todo-list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.todo-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.todo-list-move {
  transition: transform 0.5s ease;
}
</style>