import { createRouter, createWebHistory } from 'vue-router'
import HomeBookstoreView from '@/views/HomeBookstoreView.vue'
import CreateBookstoreView from '@/views/CreateBookstoreView.vue'
import EditBookstoreView from '@/views/EditBookstoreView.vue'

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
      component: CreateBookstoreView
    },
    {
      path: '/editbook/:id',
      name: 'editbook',
      component: EditBookstoreView
    }

  ]
})

export default router
