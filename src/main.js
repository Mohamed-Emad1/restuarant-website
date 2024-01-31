import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './normalize/normalize.css';

createApp(App).use(router).mount('#app')
