<script setup lang="ts">
import { ref, watch, provide, onMounted } from 'vue'
// 添加类型声明以解决 TypeScript 报错
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
import ToDoFooter from "./components/ToDoFooter.vue"
import axios from 'axios'
import type { Todo } from './types'

const todoList = ref<Todo[]>([])
const getToDoList = async () => {
  try {
    const { data } = await axios.get("https://gyl48cw104.hzh.sealos.run/get-list");
    console.log("response is", data )
    todoList.value = data.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const addToDoItem = async (taskName:string) => {
  try {
    const { data } = await axios.post("https://gyl48cw104.hzh.sealos.run/add-todo", {
      name: taskName,
      isCompleted: false,
      id: randomNumber()
    });
    console.log("response is", data )
    todoList.value.push(data.data)
  } catch (error) {
    console.error('add to do failed', error)
  }
}

const delToDoItem = async (id:number) => {
  try {
    const { data } = await axios.post("https://gyl48cw104.hzh.sealos.run/del-todo", {
      id: id
    });
    console.log("response is", data )
    todoList.value = todoList.value.filter(item => item.id !== id)
  } catch (error) {
    console.error('delete to do failed', error)
  }
}
const randomNumber = () => Math.floor(Math.random() * 100000);
const addTask = (taskName:string) => {
  addToDoItem(taskName);
};

const deleteTask = (id:number) => {
  console.log("id is", id);
  delToDoItem(id);
};

provide("deleteTask", deleteTask);

const clearFinishedTasks = () => {
  todoList.value = todoList.value.filter(item => !item.isCompleted)
};

const selectAll = () => {
  todoList.value.forEach(item => {
    item.isCompleted = !item.isCompleted
  })
};

watch(todoList, (newValue, oldValue) => {
  console.log("todolist changed", "newValue", newValue, "oldValue", oldValue)
}, {deep: true});


onMounted(() => {
  getToDoList();
});
</script>

<template>
  <h1>Today`s To Do List</h1>
  <TaskInput @add-task="addTask" />
  <TaskList :todo-list="todoList"></TaskList>
  <hr />
  <ToDoFooter :todo-list="todoList" @clear-finished-tasks="clearFinishedTasks" @select-all-task="selectAll"/>
</template>


