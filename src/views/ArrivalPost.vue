<!-- src/views/ArrivalPost.vue -->
<template>
  <div class="post-detail">
    <h1>新成員報到！</h1>
    <p>今天我們的社群迎來了三位新的貓奴朋友！🎉 歡迎他們加入這個溫暖又療癒的大家庭～</p>
    <ul>
      <li>🐱 小明（飼養兩隻橘貓）</li>
      <li>🐱 阿花（第一次養貓，超興奮！）</li>
      <li>🐱 阿強（喜歡幫貓咪拍照）</li>
    </ul>
    <p>讓我們一起熱情歡迎他們，並多多互動吧～</p>
    <Button label="返回貼文區" icon="pi pi-arrow-left" @click="goBack" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

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

ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.dark .post-detail {
  color: #eee;
}
</style>
