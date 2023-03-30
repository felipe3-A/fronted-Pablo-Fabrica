import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dasboard from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/vista1',
    name: 'vista1',
    component: () => import('../views/vistaView.vue')
  },
  {
    path: '/dasboard',
    name: Dasboard,
    component: () => import('../views/DashboardView.vue'),
    children:[
      {
        path:'/HomeView',
        name: HomeView,
        component: () => import('../views/vistaView.vue'),
      }
    ]

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
