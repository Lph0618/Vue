import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',component: index},
  { //这里是懒加载，暂时不要问，明天讲
    path: '/details/:lid',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
  },
  { //这里是懒加载，暂时不要问，明天讲
    path: '/products/:kw',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
