<!-- src/views/UserProfile.vue -->
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const user = ref(null)
const loading = ref(false)

// 獲取用戶資料
const fetchUser = async (userId) => {
  loading.value = true
  try {
    // 模擬 API 呼叫
    await new Promise(resolve => setTimeout(resolve, 1000))
    user.value = {
      id: userId,
      name: `用戶 ${userId}`,
      email: `user${userId}@example.com`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`
    }
  } catch (error) {
    console.error('獲取用戶資料失敗:', error)
  } finally {
    loading.value = false
  }
}

// 監聽路由參數變化
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchUser(newId)
    }
  },
  { immediate: true }
)

// 導航到其他用戶
const goToUser = (userId) => {
  router.push(`/user/${userId}`)
}

onMounted(() => {
  console.log('路由參數:', route.params)
  console.log('查詢參數:', route.query)
})
</script>

<template>
  <div class="user-profile">
    <h1>用戶資料</h1>

    <!-- 載入狀態 -->
    <div v-if="loading" class="loading">
      載入中...
    </div>

    <!-- 用戶資料 -->
    <div v-else-if="user" class="user-card">
      <img :src="user.avatar" :alt="user.name" class="avatar">
      <div class="user-info">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <p>用戶ID: {{ user.id }}</p>
      </div>
    </div>

    <!-- 導航到其他用戶 -->
    <div class="user-navigation">
      <h3>瀏覽其他用戶</h3>
      <button
        v-for="id in [1, 2, 3, 4, 5]"
        :key="id"
        @click="goToUser(id)"
        :class="{ active: route.params.id == id }"
        class="user-btn"
      >
        用戶 {{ id }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: 0 auto;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.user-navigation {
  margin-top: 2rem;
}

.user-btn {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 4px;
  cursor: pointer;
}

.user-btn.active {
  background: #3498db;
  color: white;
}
</style>