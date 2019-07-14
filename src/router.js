import Vue from 'vue'
import Router from 'vue-router'

// import About from '@/views/About.vue'
// import Users from '@/views/Users.vue'
// import EditUser from '@/views/EditUser.vue'

// Динамический роутинг
// const Home = () => import('@/views/Home.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/About.vue')
    },
    {
      path: '/users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/users/:id',
      component: () => import('@/views/EditUser.vue')
    },
    {
      path: '/add',
      component: () => import('@/views/AddUsers.vue')
    }
  ]
})
