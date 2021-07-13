import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Profile',
		component: () => import('@/views/Profile/index.vue'),
  },
  {
    path: '/search',
    name: 'Search',
		component: () => import('@/views/Search/index.vue'),
  },
]

// const router = new VueRouter({
//   routes
// })

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
