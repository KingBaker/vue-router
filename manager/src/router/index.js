import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import { generateRouter } from '@/libs/utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!store.state.hasAuth) {
    await store.dispatch('setUserRouters')
    const newRoutes = generateRouter(store.state.userRouters)
    console.log(newRoutes)
    router.addRoutes(newRoutes)
    next({ path: to.path })
  } else {
    next()
  }
})

export default router
