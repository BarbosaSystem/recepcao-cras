import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
      path: "/",
      component: () => import('../views/atendimento.vue'),
      name:"home",
      meta: { title: "Central de Atendimentos" },
  },
  {
    path: "/historico",
    component: () => import('../views/historico.vue'),
    name:"historico",
    meta: { title: "Histórico de Atendimentos" },
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
