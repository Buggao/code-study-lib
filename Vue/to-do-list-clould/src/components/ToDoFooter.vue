<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import  { Todo } from '../types/index'

const props = defineProps<{
  todoList: Todo[]
}>()
defineEmits(["clearFinishedTasks", "selectAllTask"])
const finishedTasks = computed(() => props.todoList.filter(todo => todo.completed).length)
const totalTasks = computed(() => props.todoList.length)
const isSelectAll = ref(false)
watch(finishedTasks, newValue => {
  console.log(newValue)
  if(newValue == totalTasks.value) {
    isSelectAll.value = true
  } else {
    isSelectAll.value = false
  }
})
</script>

<template>
  <footer class="to-do-footer">
    <label class="checkbox-box">
      <input type="checkbox" @change="$emit('selectAllTask')" v-model="isSelectAll">
      完成全部
    </label>
    <div class="total-info">
      <span>共{{ totalTasks }}项</span>
      <span>已完成{{ finishedTasks }}项</span>
    </div>
    <div class="clear-finsh-btn">
      <button @click="$emit('clearFinishedTasks')" >删除已完成</button>
    </div>
  </footer>
</template>

<style>
.to-do-footer {
  margin-top: 1em;
  padding: .6em;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.checkbox-box {
  display: flex;
  align-items: center;
  gap: 4px;
}
.total-info {
  margin-left: 1em; 
}
.clear-finsh-btn {
  flex: 1;
  text-align: right;
}
</style>