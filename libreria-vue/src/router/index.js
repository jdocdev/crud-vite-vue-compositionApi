import { createRouter, createWebHistory } from 'vue-router'
import HomeBookstoreView from '@/views/HomeBookstoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeBookstoreView
    },
    
    {
      path: '/createbook',
      name: 'createbook',
      component: () => import('../views/CreateBookstoreView.vue')
    },
    {
      path: '/editbook/:id',
      name: 'editbook',
      component: () => import('../views/EditBookstoreView.vue')
    }

  ]
})

export default router
