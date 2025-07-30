<script setup>
  import { ref, onBeforeUpdate, getCurrentInstance, onUnmounted } from 'vue';
  defineProps({
    stringValue: {
      type: String,
    }
  });
  defineOptions({
    inheritAttrs: false
  });
  const handerDom = ref(null);
  onBeforeUpdate(() => {
    console.log("i am in sub component, i am updated");
  })
  const instance = getCurrentInstance();
  onUnmounted(() => {
    console.log("i am in sub component, i am onUnmounted");
    console.log(getCurrentInstance());
  })
  const handleClick = () => {
    console.log("handleClick get instance", instance);
    console.log("handerDom is", handerDom.value); 
  }
</script>

<template>
  <h2 ref="handerDom">我是另外一个自组件 other sub components</h2>
  <p>father stringValue: {{ stringValue }}</p>
  <!-- 进行执行vonode时，这个函数会放在实例的那个部分，与setup中书写方法一致吗 -->
  <button @click="handleClick">获取当前组件实例</button>
</template>