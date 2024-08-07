import { createWebHistory, createRouter } from 'vue-router';
import AppHome from "./views/AppHome.vue"; // component

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    }
  ]
})

export default router;