import { createMemoryHistory, createRouter } from "vue-router"

import Home from "./views/home-page.vue"
import ComponentCommunication from "./views/component-communication.vue"
import vmodelComponent from "./views/vmodel-component.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/communication",
    name: "ComponentCommunication",
    component: ComponentCommunication
  },
  {
    path: "/vmodel",
    name: "vmodel",
    component: vmodelComponent
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router