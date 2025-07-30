<script setup>
  import { ref, onBeforeUpdate } from 'vue'
  import SubComponent from './components/SubComponent.vue';
  import OtherSubComponent from './components/OtherSubComponent.vue';
  const value = ref("show title");
  let fatherString = "hello world";
  const component = ref("SubComponent");
  const handleClick = () => {
    console.log("clicled");
    fatherString = "hello vue";
  }
  onBeforeUpdate(() => {
    console.log("updated");
  })
  const deepObject = {
    listenTag: "deep object",
    deepObj: {
      deepValue: "deep value",
      deepArr: [1,3,4,5]
    }
  }
</script>

<template>
  <h1>vue</h1>
  <span>{{ value }}</span>
  <button @click="handleClick">改变string-value</button>
  <button @click="() => component = component == 'SubComponent' ? 'OtherSubComponent' : 'SubComponent'">改变组件</button>
  <SubComponent v-if="component == 'SubComponent'" :string-value="fatherString" :newValue="deepObject" />
  <OtherSubComponent v-else-if="component == 'OtherSubComponent'" :string-value="fatherString" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
