import Hello from '@/views/Hello.vue'
import Privet from '@/views/Privet.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        redirect: { name: 'Hello' }
    }, {
        path: '/hello',
        name: 'Hello',
        component: Hello
    }, {
        path: '/privet',
        name: 'Privet',
        component: Privet
    }, {
        path: '/:catchAll(.*)',
        redirect: { name: 'Hello' }
    }
]

export default routes
