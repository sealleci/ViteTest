import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/config/routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
