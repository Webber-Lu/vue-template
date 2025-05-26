<!-- src/App.vue -->
<script setup>
import { useRouter, useRoute } from 'vue-router'
<<<<<<< HEAD
import { watch } from 'vue'
=======
import { watch, ref } from 'vue'
import Menubar from 'primevue/menubar';
>>>>>>> 3a350fe089462ad99160dbc29e89dbbaa2085d77

const router = useRouter()
const route = useRoute()

// 監聽路由變化，更新頁面標題
watch(
  () => route.meta.title,
  (newTitle) => {
    if (newTitle) {
      document.title = `${newTitle} - 我的網站`
    }
  },
  { immediate: true }
)
<<<<<<< HEAD
</script>

<template>
  <div id="app">
    <!-- 導航欄 -->
    <nav class="navbar">
      <div class="nav-brand">
        <RouterLink to="/" class="brand-link">我的網站</RouterLink>
      </div>

      <ul class="nav-menu">
        <li>
          <!-- RouterLink 自動添加 active class -->
          <RouterLink to="/" class="nav-link">首頁</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="nav-link">關於</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="nav-link">聯絡</RouterLink>
        </li>
      </ul>
    </nav>
=======

// Menubar 項目設置
const items = ref([
  {
    label: '首頁',
    icon: 'pi pi-home',
    command: () => router.push('/')
  },
  {
    label: '關於',
    icon: 'pi pi-info-circle',
    command: () => router.push('/about')
  },
  {
    label: '聯絡',
    icon: 'pi pi-envelope',
    command: () => router.push('/contact')
  }
]);
</script>

<template>  <div id="app">
    <!-- PrimeVue Menubar 導航欄 -->
    <div class="card">
      <Menubar :model="items" class="mb-4">
        <template #start>
          <RouterLink to="/" class="brand-link mr-4">我的網站</RouterLink>
        </template>
      </Menubar>
    </div>
>>>>>>> 3a350fe089462ad99160dbc29e89dbbaa2085d77

    <!-- 路由出口：顯示匹配的組件 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
<<<<<<< HEAD
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}

.nav-brand .brand-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #34495e;
}

/* Vue Router 自動添加的活躍狀態 class */
.nav-link.router-link-active {
  background-color: #3498db;
  color: white;
=======
.brand-link {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

.card {
  padding: 0;
  margin: 0;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mr-4 {
  margin-right: 1rem;
>>>>>>> 3a350fe089462ad99160dbc29e89dbbaa2085d77
}

.main-content {
  padding: 2rem;
  min-height: calc(100vh - 80px);
}
</style>