import { createApp } from 'vue';
import './style.css';
import store from './store/store.js';
import router from './router/router.js';
import App from './App.vue';

import { MeuPlugin } from './javascript/plugin.js';

/* Components */
import modalChangeLog from './components/modalChangeLog.vue'

createApp(App).component('modal-changelog', modalChangeLog).use(MeuPlugin).use(store).use(router).mount('#app');
