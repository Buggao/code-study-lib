import { createMemoryHistory, createRouter } from 'vue-router'

import User from './router-components/User.vue'
import Home from './router-components/Home.vue'

const routes = [
  {
    path: "/",
    redirect: "/user/999"
  },
  { 
    path: '/user/:id',
    name: 'User',
    component: User 
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router