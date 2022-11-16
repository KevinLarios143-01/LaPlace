import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/departamentos',
    name: 'departamentos',
    component: () => import('../views/Departamentos.vue'),
  },
  {
    path: '/solicitud',
    name: 'solicitud',

    component: () => import('../views/Solicitud.vue'),

  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: () => import('../views/Categoria.vue'),
  },
  {
    path: '/logins',
    name: 'logins',
    component: () => import('../views/loginR.vue'),
  },
   {
    path: '/nombre',
    name: 'nombre',
    component: () => import('../views/nombre.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Catalog.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {
  if(to.name){
    NProgress.start();
  }
  next();
});


router.afterEach(() => {
  NProgress.done();
});

export default router
