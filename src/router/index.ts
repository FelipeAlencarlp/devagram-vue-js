import { useAccessTokenStore } from '@/stores/accessToken';
import LoginVue from '@/views/Login.vue';
import HomeVue from '@/views/Home.vue';
import CadastroVue from '@/views/Cadastro.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue,
      meta: {rotaPrivada : true}
    },
    {
      path: '/',
      name: 'login',
      component: LoginVue,
      props: true
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroVue
    }
  ]
});

router.beforeEach((to, from) => {
  const store = useAccessTokenStore();
  if(to.name !== 'login' && to.meta.rotaPrivada && !store.estaAutenticado) {
    return { name : 'login' }
  } else if (to.name === 'cadastro' && store.estaAutenticado) {
    return { name : 'home' }
  }
});

export default router
