import { createApp } from 'vue'
import './assets/scss/style.scss'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue'
import router from './router.js';

createApp(App).use(router).mount('#app');
