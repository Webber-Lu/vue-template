<!-- src/views/Home.vue -->
<template>
  <div class="home-container">
    <!-- hero 區塊 -->
    <section class="hero-section">
      <h1>🐾 貓咪互動社群平台</h1>
      <p>和全世界的貓咪愛好者一起分享生活，交流心得，探索更多貓咪的世界！</p>
      <Button label="開始探索" icon="pi pi-search" class="explore-btn" @click="goToPosts" />
    </section>

    <!-- 服務卡片區 -->
    <section class="service-section">
      <h2>我們提供了！</h2>
      <div class="service-cards">
        <div class="service-card">
          <i class="pi pi-heart"></i>
          <h3>貓咪認養</h3>
          <p>找到屬於你的毛孩子，讓每個貓咪都有幸福的家。</p>
        </div>
        <div class="service-card">
          <i class="pi pi-comments"></i>
          <h3>交流分享</h3>
          <p>和其他貓奴一起分享貓咪日常，認識更多有趣的夥伴。</p>
        </div>
        <div class="service-card">
          <i class="pi pi-book"></i>
          <h3>貓咪知識庫</h3>
          <p>提供最新的貓咪健康資訊與照護知識，讓你成為更棒的鏟屎官。</p>
        </div>
      </div>
    </section>

    <!-- 呼籲加入區塊 -->
    <section class="join-section">
      <h2>還沒加入嗎？</h2>
      <p>快來註冊，成為貓奴行列的一員！</p>
      <Button label="立即註冊" icon="pi pi-user-plus" class="join-btn" @click="goToAuth" />
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const router = useRouter()
const goToPosts = () => {
  router.push('/posts')
}

const goToAuth = () => {
  router.push('/auth')
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.hero-section h1 {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.hero-section p {
  margin-bottom: 1.5rem;
}

.explore-btn {
  background-color: #4caf50;
  color: #fff;
  border: none;
}

.service-section h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.service-card {
  flex: 1 1 250px;
  background: linear-gradient(135deg, #f7e0e0, #fce5cd);
  color: #333;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.service-card i {
  font-size: 2rem;
  color: #ff7f50;
  margin-bottom: 0.5rem;
}

.service-card h3 {
  margin: 0.5rem 0;
  font-weight: bold;
  font-size: 1.2rem;
}

.service-card p {
  font-size: 0.95rem;
  line-height: 1.4;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.join-section {
  text-align: center;
  margin-top: 3rem;
}

.join-section h2 {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.join-section p {
  margin-bottom: 1rem;
}

.join-btn {
  background-color: #4caf50;
  color: #fff;
  border: none;
}

/* 暗黑模式 */
.dark .hero-section {
  background: linear-gradient(135deg, #444, #666);
  color: #eee;
}

.dark .service-card {
  background: linear-gradient(135deg, #5d5d5d, #777777);
  color: #eee;
}

.dark .service-card i {
  color: #ffd700;
}

.dark .join-section h2,
.dark .join-section p {
  color: #eee;
}
</style>
