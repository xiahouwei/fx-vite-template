import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
