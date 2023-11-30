import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '主页'
        },
        component: () => import('../views/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: '主页'
        },
        component: () => import('../views/about.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
