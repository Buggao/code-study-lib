<script setup>
defineProps({
  msg: String,
  status: {
    validator(value, props) {
      return ['success', 'loading', 'finiash'].includes(value)
    },
  },
  demoData: String
})
defineEmits({
  changeMsg: (msg) => {
    if(typeof msg == 'boolean') return false
  },
})

const modelMsg= defineModel();
const [studyWords, studyWordsModifiers]= defineModel("studyWords");

console.log("studyWordsModifiers is", studyWordsModifiers );
// console.log("msg is", msg)
const canDo = () => {
  console.log("canDo")
  studyWords.value = `我一定能${Date.now()}`
}
</script>

<template>
  <div class="card">
    <h3>要求：</h3>
    <p>实现一个props和emits的组合，实现数据交互，并添加对应校验</p>
    <p>实现一个v-model，可以使用3.4前的版本和3.4后的版本分别实现并添加校验</p>
  </div>
  <div class="card">
    <div>in helloWorld msg from App:</div>
    <h4>{{ msg }}</h4>
    <h4>{{ status }}</h4>
    <h4>{{ modelMsg }}</h4>
    <h4>{{ demoData }}</h4>
    <h4>{{ studyWords }}</h4>
    <button @click="$emit('changeMsg', 'hello~')">say hello</button>
    <button @click="() => modelMsg = `heiheiheiheihei${Date.now()}`">change model value</button>
    <button @click="canDo">能吗？</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
