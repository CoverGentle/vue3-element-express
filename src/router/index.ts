// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {createRouter,createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/layout',
    meta: {
      title: '首页'
    },
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layoutView.vue'),
    children: [
      {
        path:'/layout',
        redirect:'/home',
        meta: {
          title: '首页'
        },
      },
      {
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/home.vue')
      },
      {
        path: '/setting',
        meta: {
          title: '系统设置'
        },
        component: () => import('@/views/setting/setting.vue')
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// router.beforeEach((to,from,next)=>{
//   if(typeof (to.meta?.title) === 'string'){
//     document.title = to.meta?.title
//   }
//   if(to.path === "/login"){
//     next()
//   }else{
//     if(localStorage.getItem('token')){
//       next()
//     }else{
//       next("/login")
//     }
//   }
// })


export default router
