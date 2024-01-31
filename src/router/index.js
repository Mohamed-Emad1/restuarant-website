import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/indexView.vue';

const routes = [
  {
    path: "/",
    name: "indexView",
    component: indexView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
