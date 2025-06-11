<template>
  <div class="form-container">
    <h1>認養申請表</h1>
    <p>請填寫以下資訊，完成您的認養申請。</p>

    <form @submit.prevent="submitForm" class="adoption-form">
      <div class="form-group">
        <label for="name">名字</label>
        <input id="name" v-model="form.name" type="text" required />
      </div>
      <div class="form-group">
        <label for="gender">性別</label>
        <input id="gender" v-model="form.gender" type="text" required />
      </div>
      <div class="form-group">
        <label for="phone">聯絡電話</label>
        <input id="phone" v-model="form.phone" type="tel" required />
      </div>
      <div class="form-group">
        <label for="address">地址</label>
        <input id="address" v-model="form.address" type="text" required />
      </div>
      <div class="form-group">
        <label for="city">城市</label>
        <input id="city" v-model="form.city" type="text" required />
      </div>
      <div class="form-group">
        <label for="motivation">認養動機</label>
        <Editor v-model="form.motivation" editorStyle="height: 200px" />
      </div>

      <button type="submit" class="submit-btn">送出申請</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Editor from 'primevue/editor'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'

const form = ref({
  name: '',
  gender: '',
  phone: '',
  address: '',
  city: '',
  motivation: ''
})

const submitForm = async () => {
  console.log('送出表單：', form.value)
  try {
    await addDoc(collection(db, 'adoptionForms'), form.value)
    alert('申請已送出！')
    form.value = { name: '', gender: '', phone: '', address: '', city: '', motivation: '' }
  } catch (error) {
    console.error('送出失敗:', error)
    alert('送出失敗，請稍後再試！')
  }
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 2rem auto;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-container h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-container p {
  text-align: center;
  margin-bottom: 2rem;
}

.adoption-form .form-group {
  margin-bottom: 1rem;
}

.adoption-form label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.adoption-form input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.submit-btn {
  display: block;
  width: 100%;
  background-color: #3eaf7c;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #359569;
}

:root.dark .form-container {
  background: #1e1e1e;
  color: #eee;
}

:root.dark .adoption-form input,
:root.dark .p-editor-container {
  background: #333;
  color: #eee;
  border-color: #555;
}

:root.dark .p-editor-container {
  border-radius: 6px;
}

:root.dark .submit-btn {
  background-color: #5aa37a;
}

:root.dark .submit-btn:hover {
  background-color: #478c64;
}
</style>
