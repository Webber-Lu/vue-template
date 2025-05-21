<!-- src/App.vue -->
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { watch, ref } from 'vue'
import Menubar from 'primevue/menubar';

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

    <!-- 路由出口：顯示匹配的組件 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
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
}

.main-content {
  padding: 2rem;
  min-height: calc(100vh - 80px);
}
</style>