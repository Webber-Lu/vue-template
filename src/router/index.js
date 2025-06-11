// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 頁面組件
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Posts from '@/views/Posts.vue'
import Adoption from '@/views/Adoption.vue'
import Auth from '@/views/Auth.vue'
import PostKnowledge from '@/views/PostKnowledge.vue' // 👈 新增「貓咪小知識分享詳細頁」
import Editor from 'primevue/editor';


// 路由規則
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁',
      requiresAuth: false
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta: {
      title: '貼文區'
    }
  },
  {
    path: '/posts/knowledge',     // 👈 新增詳細頁路由
    name: 'PostKnowledge',
    component: PostKnowledge,
    meta: {
      title: '貓咪小知識分享'
    }
  },
  {
    path: '/adoption',
    name: 'Adoption',
    component: Adoption,
    meta: {
      title: '認養媒合頁面'
    }
  },
  {
  path: '/adoption/:id',
  name: 'CatDetail',
  component: () => import('@/views/CatDetail.vue'),
  meta: { title: '貓咪詳細資訊' }
  },
  {
  path: '/adoption/:id/form',
  name: 'AdoptionForm',
  component: () => import('@/views/AdoptionForm.vue'),
  meta: { title: '認養申請表' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: '聯絡我們'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      title: '登入 / 註冊'
    }
  }
]

// 建立路由實例
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
