import { createApp } from 'vue';
import './style.css';
import store from './store/store.js';
import router from './router/router.js';
import App from './App.vue';

import { MeuPlugin } from './javascript/plugin.js';

/* Components */
import modalChangeLog from './components/modalChangeLog.vue'
import HeaderBar from './layout/headerBar.vue';
import ContentBar from './layout/contentBar.vue';
import SideBar from './layout/sideBar.vue';


createApp(App)
.component('modal-changelog', modalChangeLog)
.component('ContentBar', ContentBar)
.component('SideBar', SideBar)
.component('HeaderBar', HeaderBar)
.use(MeuPlugin)
.use(store)
.use(router)
.mount('#app');
