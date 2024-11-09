import { createMemoryHistory, createRouter } from "vue-router"

import Home from "./views/home-page.vue"
import ComponentCommunication from "./views/component-communication.vue"

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
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router