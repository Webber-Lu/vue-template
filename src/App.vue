<template>
  <div id="app">
    <!-- PrimeVue Menubar 導航欄 -->
    <div class="card">
      <Menubar :model="items" class="mb-4">
        <!-- 左側 LOGO / 名稱 -->
        <template #start>
          <RouterLink to="/" class="brand-link mr-4">貓咪互動社群平台</RouterLink>
        </template>

        <!-- 右上角暗黑模式切換 -->
        <template #end>
          <Button
            :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
            class="p-button-text"
            @click="toggleDarkMode"
          />
        </template>
      </Menubar>
    </div>

    <!-- 路由內容顯示區 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

const router = useRouter()
const route = useRoute()

// 監聽路由，改變頁面標題
watch(
  () => route.meta.title,
  (newTitle) => {
    if (newTitle) {
      document.title = `${newTitle} - 貓咪互動社群平台`
    }
  },
  { immediate: true }
)

// PrimeVue Menubar 項目
const items = ref([
  {
    label: '首頁',
    icon: 'pi pi-home',
    command: () => router.push('/')
  },
  {
    label: '貼文區',
    icon: 'pi pi-book',
    command: () => router.push('/posts')
  },
  {
    label: '認養頁面',
    icon: 'pi pi-heart',
    command: () => router.push('/adoption')
  },
  {
    label: '聯絡我',
    icon: 'pi pi-envelope',
    command: () => router.push('/contact')
  },
  {
    label: '登入 / 註冊',
    icon: 'pi pi-user',
    command: () => router.push('/auth')
  }
])

// 暗黑模式切換
const isDark = ref(false)
const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<style scoped>
.card {
  padding: 0;
  margin: 0;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.brand-link {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

.main-content {
  padding: 2rem;
  min-height: calc(100vh - 80px);
}

.menubar-custom {
  background-color: #f0c419;
  color: #333;
}

</style>

<!-- 全域樣式：暗黑模式背景 / 文字顏色 -->
<style>
:root {
  --background-color: white;
  --text-color: black;
}

.dark {
  --background-color: #121212;
  --text-color: white;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}
</style>

