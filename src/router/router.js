import { createRouter, createWebHistory } from 'vue-router';
import adminLayout from '../layout/adminLayout.vue'
const routes = [
  {
    path: "/",
    component: adminLayout,
    name: "default",
    meta:{requiresAuth: true },
    children: [
      {
        path: "/atendimento",
        component: () => import('../views/atendimento.vue'),
        name:"atendimento",
        meta: { title: "Central de Atendimentos", requiresAuth: true },
    },
    {
        path: "/historico",
        component: () => import('../views/historico.vue'),
        name:"historico",
        meta: { title: "Histórico de Atendimentos", requiresAuth: true },
    },
    {
        path: "/dashboard",
        component: () => import('../views/dashboard.vue'),
        name:"dashboard",
        meta: { title: "Dashboard", requiresAuth: true },
    },
     /* { path: '/atendimento', component: atendimentoView, meta: { title: "Fila de Espera", sideBar:true, requiresAuth: true , accessLevel: ['USUARIO', 'ADMINISTRADOR', 'SYSADMIN'], visible: true }},
      { path: '/historico', component: historicoView, meta: { title: "Histórico", sideBar:true, requiresAuth: true, accessLevel: ['USUARIO', 'ADMINISTRADOR', 'SYSADMIN'], visible: true  }},
      { path: "/teste", component: testeView,  meta: { title: "Teste", requiresAuth: true, sideBar:true, accessLevel: ['SYSADMIN'], visible: false}},
      { path: "/profile", component: profileView,  meta: { title: "Meus dados", requiresAuth: true, accessLevel: ['USUARIO', 'ADMINISTRADOR', 'SYSADMIN'], visible: true  }},
      { path: "/usuarios", component: usuarioView,  meta: { title: "Usuários", requiresAuth: true, sideBar:true, accessLevel: ['ADMINISTRADOR', 'SYSADMIN'], visible: true }},
      { path: '/unidade', component: unidadeView, name:"unidade", meta: { title: "Unidades", sideBar:true, requiresAuth: true, accessLevel: ['ADMINISTRADOR', 'SYSADMIN'], visible: true }},
      { path: '/seguranca', component: segurancaView, name:"seguranca", meta: { title: "Config. do Sistema", sideBar:true, requiresAuth: true, accessLevel: ['SYSADMIN'], visible: true }},
      {  path: '/unidade/:id', component: unidadeDetailView, name: 'unidadeView', meta:{ title: "Detalhes", requiresAuth: true, accessLevel: ['SYSADMIN']} }, */
      
    ],
  },
  
  {
    path: "/login",
    component: () => import('../views/login.vue'),
    name:"login",
    meta: { title: "Bem vindo" },
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
