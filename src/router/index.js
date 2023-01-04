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
    path: '/carro',
    name: 'carro',
    component: () => import('../views/Carrito.vue'),
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
  {
    path: '/Pedidos',
    name: 'Pedidos',
    component: () => import('../views/Pedidos.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminPane.vue')
  },
  {
    path: '/platillo',
    name: 'Platillo',
    component: () => import('../views/Platillo.vue'),
  },
  {
    path: '/detalles',
    name: 'Detalles',
    component: () => import('../views/DetallesReservaciones.vue'),
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
