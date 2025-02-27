import { createMemoryHistory, createRouter } from "vue-router"

import Home from "./views/home-page.vue"
// import ComponentCommunication from "./views/component-communication.vue"
// import vmodelComponent from "./views/vmodel-component.vue"
// import vifandvfor from "./views/vif-and-vfor.vue"
// import vuelifetime from "./views/vue-life-time.vue"

export let questionList = [
  {
    questionName: "Vue组件通信的方式有哪些？",
    pageName: "/communication",
    comonentName: "component-communication"
  },
  {
    questionName: "v-if和v-for那个优先级更高？",
    pageName: "/vifandvfor",
    comonentName: "vif-and-vfor"
  },
  {
    questionName: "Vue的声明周期和每个声明周期做的事情？",
    pageName: "/vuelifetime",
    comonentName: "vue-life-time"
  },
  {
    questionName: "vue双向绑定和原理",
    pageName: "/vmodel",
    comonentName: "vmodel"
  },
]

const questionRoutes = questionList.map(item => {
  return {
    path: item.pageName,
    name: item.questionName,
    component: () => import(`./views/${item.comonentName}.vue`)
  }
})

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  ...questionRoutes
]

console.log("routes", routes)

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router