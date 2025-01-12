<script setup>
import { ref, defineProps, defineEmits } from "vue"
const props = defineProps({
  parentMsg: String | Date,
  fixedMsg: String,
})

let childrenMsg = ref(props.fixedMsg)
const otherValiable = defineEmits({
  changeFixedData: null, 
  changeRefData: (value => {
    if(value != "123"){
      return false
    }    
  })
})
function handleRefClick(event) {
  console.log("event e is", event,)
  otherValiable("changeRefData", "子组件改变了refData的值")
}

</script>

<template>
  <div class="m-2 p-8 border-dotted border-2 border-sky-500">
    <div>emits</div>
    <div>我是父组件传来的值：{{ parentMsg }}</div>
    <div>我是父组件传来的值，但不是ref值：{{ childrenMsg }}</div>
    <button @click="handleRefClick">改变ref值</button>
    <button @click="$emit('changeFixedData', '1123')">改变fixed值</button>
  </div>
</template>