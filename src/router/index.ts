import { createRouter, createWebHistory } from 'vue-router';
import LoginVue from '@/views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginVue
    }
  ]
})

export default router
