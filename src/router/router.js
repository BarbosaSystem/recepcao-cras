import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import historicoView from '../views/historico.vue'
const routes = [
  {
      path: "/",
      component: historicoView,
      name:"home",
      meta: { title: "Central de Atendimentos" },
  },
  {
    path: "/historico",
    component: historicoView,
    name:"historico",
    meta: { title: "Histórico de Atendimentos" },
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
