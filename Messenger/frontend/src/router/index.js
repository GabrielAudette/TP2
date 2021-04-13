import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../pages/Login'
import Chat from '../pages/Chat'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/chat/:username',
    name: 'Chat',
    component: Chat
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
