import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/indexView.vue';
import loginViewVue from '@/views/loginView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/Contactv.vue';
import itemsViewVue from '@/views/itemsView.vue';

const routes = [
  {
    path: "/",
    name: "indexView",
    component: indexView,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/loginViewVue",
    name: "loginViewVue",
    component: loginViewVue,
  },
  {
    path: "/itemsViewVue",
    name: "itemsViewVue",
    component: itemsViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
