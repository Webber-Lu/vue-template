// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 導入頁面組件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'



// 定義路由規則
const routes = [
  {
    path: '/',              // 路徑
    name: 'Home',           // 路由名稱
    component: Home,        // 對應的組件
    meta: {                 // 路由元資訊
      title: '首頁',
      requiresAuth: false   // 是否需要授權
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '關於我們'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    // 懶載入：只有在需要時才載入組件
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: '聯絡我們'
    }
  }

// 定義路由規則
const routes = [{
        path: '/', // 路徑
        name: 'Home', // 路由名稱
        component: Home, // 對應的組件
        meta: { // 路由元資訊
            title: '首頁',
            requiresAuth: false // 是否需要授權
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: '關於我們'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        // 懶載入：只有在需要時才載入組件
        component: () =>
            import ('@/views/Contact.vue'),
        meta: {
            title: '聯絡我們'
        }
    }

]

// 創建路由實例
const router = createRouter({

  // 使用 HTML5 History API
  history: createWebHistory(),
  routes,

  // 滾動行為設定
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition  // 回到之前的滾動位置
    } else {
      return { top: 0 }     // 滾動到頂部
    }
  }

    // 使用 HTML5 History API
    history: createWebHistory(),
    routes,

    // 滾動行為設定
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition // 回到之前的滾動位置
        } else {
            return { top: 0 } // 滾動到頂部
        }
    }

})

export default router