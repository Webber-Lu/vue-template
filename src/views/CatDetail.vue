<template>
  <div class="cat-detail-container">
    <h1>{{ cat.name }}</h1>
    <img :src="cat.image" alt="Cat photo" class="cat-photo" />
    <div class="cat-info">
      <p>{{ cat.description }}</p>
      <p>年齡：{{ cat.age }}</p>
      <p>性別：{{ cat.gender }}</p>
      <p>個性：{{ cat.personality }}</p>
      <p>地點：{{ cat.location }}</p>
    </div>

    <div class="button-group">
      <Button
        label="返回上一頁"
        icon="pi pi-arrow-left"
        class="back-button"
        @click="goBack"
      />
      <Button
        label="填寫表單"
        icon="pi pi-check"
        severity="success"
        class="form-button"
        @click="goToAdoptionForm"
      />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'
import orangeCat from '@/assets/images/orange-cat.jpg'
import grayCat from '@/assets/images/gray-cat.jpg'
import blackCat from '@/assets/images/black-cat.jpg'

const route = useRoute()
const router = useRouter()

const catId = parseInt(route.params.id, 10)
const cat = ref({})

onMounted(() => {
  const catsData = [
    {
      id: 1,
      name: '橘橘',
      description: '性格溫和且親人，已結紮，是可愛的母貓',
      age: '約 6 歲',
      gender: '母',
      personality: '溫和、親人',
      location: '中壢',
      image: orangeCat
    },
    {
      id: 2,
      name: '阿灰',
      description: '活潑好動，喜歡互動',
      age: '約 3 歲',
      gender: '公',
      personality: '活潑、外向',
      location: '中壢',
      image: grayCat
    },
    {
      id: 3,
      name: '小黑',
      description: '內向怕生，需要耐心陪伴',
      age: '約 2 歲',
      gender: '公',
      personality: '內向、膽小',
      location: '中壢',
      image: blackCat
    }
  ]

  cat.value = catsData.find(c => c.id === catId)
})

const goToAdoptionForm = () => {
  router.push(`/adoption/${catId}/form`)
}

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.cat-detail-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
}

.cat-photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin: 1rem auto;
  display: block;
}

.cat-info {
  text-align: left;
  margin-top: 1rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.button-group :deep(.p-button) {
  min-width: 130px;
}

.back-button {
  background-color: #607d8b;
  color: white;
  border: none;
}

.back-button:hover {
  background-color: #455a64;
}

.dark .cat-info {
  background: #4b5d50;
  color: #eee;
}
</style>
