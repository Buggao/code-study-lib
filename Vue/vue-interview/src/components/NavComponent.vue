<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();


let questionList = [
  {
    questionName: "Vue组件通信的方式有哪些？",
    pageName: "/communication"
  },
  {
    questionName: "v-if和v-for那个优先级更高？",
    pageName: "/vifandvfor"
  },
  {
    questionName: "Vue的声明周期和每个声明周期做的事情？",
    pageName: "/vuelifetime"
  },
  {
    questionName: "vue双向绑定和原理",
    pageName: "/vmodel"
  },
]

function handleNavItemClick(routerName) {
  router.push({ path: routerName });
}


</script>

<template>
  <div class="h-screen w-80 bg-zinc-900 p-8">
    <div v-for="(question,index) in questionList" class="nav-component cursor-pointer mt-5">
      <div 
        class="question-item hover:font-black hover:text-purple-800"
        @click="handleNavItemClick(question.pageName)">
        {{index + 1}}、{{ question.questionName }}
      </div>
    </div>
  </div>
</template>
