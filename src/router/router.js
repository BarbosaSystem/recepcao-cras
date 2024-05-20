import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  {
      path: "/historico",
      component: historicoView,
      meta: { title: "Histórico de Atendimentos" },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
