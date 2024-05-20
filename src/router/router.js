import { createMemoryHistory, createRouter } from 'vue-router';
import historicoView from '../views/historico.vue'
const routes = [
  {
      path: "/",
      component: historicoView,
      meta: { title: "Histórico de Atendimentos" },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
