<template>
  <div class="adoption-container">
    <h1>認養頁面</h1>
    <p>這裡是貓咪認養媒合資訊與推薦。</p>

    <div class="adoption-list">
      <Card class="adoption-card" v-for="cat in cats" :key="cat.id">
        <template #header>
          <img :src="cat.image" alt="Cat photo" class="cat-photo" />
        </template>
        <template #title>
          <h3>{{ cat.name }}</h3>
        </template>
        <template #content>
          <Button label="我要認養" severity="warning" rounded @click="viewCatDetail(cat.id)" />
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
import orangeCat from '@/assets/images/orange-cat.jpg'
import blackCat from '@/assets/images/black-cat.jpg' // 👈 加入黑貓
import grayCat from '@/assets/images/gray-cat.jpg'   // 👈 加入灰貓

const router = useRouter()
const cats = ref([
  { id: 1, name: '小橘', description: '? 歲，性格溫和且親人，已結紮，是可愛的母貓', image: orangeCat },
  { id: 2, name: '阿灰', description: '1 歲，活潑好動，喜歡互動', image: grayCat },
  { id: 3, name: '小黑', description: '3 歲，內向怕生，需要耐心陪伴', image: blackCat }
])

const viewCatDetail = (catId) => {
  router.push(`/adoption/${catId}`)
}
</script>

<style scoped>
.adoption-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.adoption-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.cat-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}

.cat-photo:hover {
  transform: scale(1.15);
}

.adoption-card {
  padding: 1rem;
  text-align: center;
  background-color: #fff5e6; /* 溫馨米色背景 */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  color: #333; /* 深色文字 */
}

.adoption-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.adoption-card h3 {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

/* 深色模式 */
.dark .adoption-card {
  background-color: #7ea58a; /* 深色但柔和背景，取代黑色 */
  color: #eee; /* 淺色文字 */
}

.dark .adoption-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>
