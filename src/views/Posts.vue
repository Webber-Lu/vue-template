<template>
  <div class="posts-container">
    <h1>貼文區</h1>
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
            @click="viewDetails(post.id)"
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

// 假設有多篇文章
const posts = ref([
  { id: 1, title: '貓咪小知識分享', content: '分享貓咪日常照顧小技巧～' },
  { id: 2, title: '新成員報到！', content: '今天社群有 3 位新朋友加入～' },
  { id: 3, title: '貓咪日記', content: '今天小花睡了一整天，超可愛！' }
])

// 查看詳情按鈕點擊
const viewDetails = (id) => {
  if (id === 1) {
    router.push('/posts/knowledge')
  } else {
    console.log('尚未有詳細頁面')
  }
}
</script>

<style scoped>
.posts-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
</style>
