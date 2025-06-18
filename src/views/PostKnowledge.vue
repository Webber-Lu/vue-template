<template>
  <div class="knowledge-container">
    <h1>貓咪小知識分享</h1>
    <p>這篇文章將分享一些照顧貓咪的實用技巧，讓你的毛小孩更健康快樂！</p>

    <div class="knowledge-content">
      <h2>基本照護要點</h2>
      <ul>
        <li>定期清潔貓砂盆，保持衛生。</li>
        <li>提供新鮮飲水與適量的飼料。</li>
        <li>與貓咪互動，建立良好關係。</li>
      </ul>

      <h2>健康注意事項</h2>
      <p>定期帶貓咪看獸醫，預防疾病。觀察牠的飲食和活動狀態，及早發現異常。</p>
    </div>

    <Button label="返回貼文區" icon="pi pi-arrow-left" @click="goBack" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const router = useRouter()
const goBack = () => {
  router.push('/posts')
}
</script>

<style scoped>
.knowledge-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.knowledge-content {
  margin-top: 1rem;
  line-height: 1.6;
}
</style>
