import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contents',
    component: () => import(/* webpackChunkName: "containts" */ '../components/contents.vue'),
    children: [
      {
        // /user/:id/profile がマッチした時に
        // UserProfile は User の <router-view> 内部で描画されます
        path: '',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:  Home
        // component:User
      },
      {
        // /user/:id/profile がマッチした時に
        // UserProfile は User の <router-view> 内部で描画されます
        path: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:  () => import(/* webpackChunkName: "views" */ '../views/About.vue')
        // component:User
      },
      {
        // /user/:id/posts がマッチした時に
        // UserPosts は User の <router-view> 内部で描画されます
        path: 'access',
        name: 'Access',
        // route level code-splitting
        // this generates a separate chunk (views.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "views" */ '../views/Access.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/access',
    name: 'Access',
    // route level code-splitting
    // this generates a separate chunk (views.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "views" */ '../views/Access.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (views.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "views" */ '../views/Menu.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (views.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "views" */ '../views/Contact.vue')
  },
  {
    path: '/result',
    name: 'Result',
    // route level code-splitting
    // this generates a separate chunk (views.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "views" */ '../views/Result.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
