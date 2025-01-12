<script setup>
const emit = defineEmits([ 'update:dateMsg'])

const number = defineModel({default: 10})
const [dateMsg, dateMsgModifiers ]= defineModel("dateMsg")
function handleClick() { 
  let _sendDate = new Date()
    // console.log(dateMsgModifiers.formateDate)
  if(dateMsgModifiers.formateDate) {
    let _Date = _sendDate.toLocaleDateString("zh-CN", {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    let _second = _sendDate.toLocaleTimeString("zh-CN", {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    _sendDate = _Date + " " + _second
  }
  dateMsg.value = _sendDate

}
</script>

<template>
  <div class="m-2 p-8 border-dotted border-2 border-sky-500">
    <h4>v-model</h4>
    <div>父组件传来的值为： {{ modelValue }}</div>
    <p>父组件的值加1</p>
    <button @click="() => number++">modelValue+1</button>
    <p>父组件的msg值为 {{ dateMsg }}</p>
    <button @click="handleClick">更改dateMsg的值</button>
  </div>
</template>