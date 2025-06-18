<!-- src/views/DiaryPost.vue -->
<template>
  <div class="post-detail">
    <h1>貓咪日記：小花的一天</h1>
    <p>今天小花過得非常悠閒，從早上睡到下午，偶爾翻個身伸個懶腰，真的是貓生一大享受～</p>
    <p>中午還被拍到夢中露出微笑的樣子，實在太可愛了！</p>
    <img :src="sleepyCat" alt="睡覺中的小花" class="cat-photo" />
    <p>你家的貓咪今天做了什麼有趣的事呢？歡迎留言分享唷～</p>
    <Button label="返回貼文區" icon="pi pi-arrow-left" @click="goBack" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import sleepyCat from '@/assets/images/sleepy-cat.jpg'

const router = useRouter()
const goBack = () => router.push('/posts')
</script>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.8;
}

.cat-photo {
  width: 100%;
  max-width: 600px;
  border-radius: 1rem;
  margin: 1rem 0;
}

.dark .post-detail {
  color: #eee;
}
</style>
