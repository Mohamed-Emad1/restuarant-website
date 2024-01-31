import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/indexView.vue';
import loginViewVue from '@/views/loginView.vue';

const routes = [
  {
    path: "/",
    name: "indexView",
    component: indexView,
  },
  {
    path: "/loginViewVue",
    name: "loginViewVue",
    component: loginViewVue,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
