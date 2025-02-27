<script setup>
import { questionList } from "../router"
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
function handleNavItemClick(routerName) {
  router.push({ path: routerName});
}


</script>

<template>
  <div class="h-screen w-80 bg-zinc-900 p-8 overflow-hidden">
    <div v-for="(question,index) in questionList" class="nav-component cursor-pointer mt-5">
      <div 
        class="question-item hover:font-black hover:text-purple-800"
        @click="handleNavItemClick(question.pageName)">
        {{index + 1}}、{{ question.questionName }}
      </div>
    </div>
  </div>
</template>
