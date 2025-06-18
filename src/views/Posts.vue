<template>
  <div class="posts-container">
    <div class="post-header">
      <h1>貼文區</h1>
      <Button
        label="我要發文"
        icon="pi pi-plus"
        class="create-button"
        @click="goToCreate"
      />
    </div>

    <p>這裡會展示貓咪互動社群平台的最新貼文。</p>

    <div class="posts-list">
      <Card class="post-card" v-for="post in posts" :key="post.id">
        <template #title>{{ post.title }}</template>
        <template #content>
          <p>{{ post.content }}</p>
          <Button
            label="查看詳情"
            icon="pi pi-eye"
            class="p-button-text"
            @click="viewDetails(post.route)"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import Button from 'primevue/button'

const router = useRouter()

// 帖文資料
const posts = ref([
  { id: 1, title: '貓咪小知識分享', content: '分享貓咪日常照顧小技巧～', route: '/posts/knowledge' },
  { id: 2, title: '新成員報到！', content: '今天社群有 3 位新朋友加入～', route: '/posts/arrival' },
  { id: 3, title: '貓咪日記', content: '今天小花睡了一整天，超可愛！', route: '/posts/diary' }
])

const viewDetails = (route) => {
  if (route) {
    router.push(route)
  } else {
    console.log('尚未有詳細頁面')
  }
}

const goToCreate = () => {
  router.push('/posts/create')
}
</script>

<style scoped>
.posts-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.create-button {
  background-color: #4caf50;
  color: #fff;
  border: none;
}

.posts-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.post-card {
  padding: 1rem;
}

/* 暗黑模式下的卡片樣式 */
.dark .post-card {
  background: linear-gradient(135deg, #5d5d5d, #777777);
  color: #eee;
}
</style>
