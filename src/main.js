import { createApp } from 'vue';
import './style.css';
import store from './store/store.js';
import router from './router/router.js';
import App from './App.vue';

import { MeuPlugin } from './javascript/plugin.js';


createApp(App).use(MeuPlugin).use(store).use(router).mount('#app');
