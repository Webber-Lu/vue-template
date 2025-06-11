<template>
  <div class="contact-page">
    <h1>聯絡我</h1>

    <div class="contact-info">
      <h2>聯絡資訊</h2>
      <div class="info-card">
        <p><strong>學校:</strong> 中原大學</p>
        <p><strong>地址:</strong> 320桃園市中壢區中北路200號</p>
        <p><strong>Email:</strong> 11378033@O365st.cycu.edu.tw</p>
        <p><strong>手機:</strong> 0903580611</p>
        <p><strong>可聯絡時間:</strong> 星期一 至 星期五, 10:00 AM - 5:00 PM</p>
      </div>
    </div>

    <div class="feedback-section">
      <h2>問題與回饋</h2>
      <p>讓我們知道您的疑問或回饋！</p>
      <form @submit.prevent="submitFeedback" class="contact-form">
        <div class="form-group">
          <label for="name">姓名</label>
          <input id="name" v-model="feedback.name" type="text" required placeholder="你的名字" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="feedback.email" type="email" required placeholder="你的Email" />
        </div>
        <div class="form-group">
          <label for="message">留言</label>
          <textarea id="message" v-model="feedback.message" rows="4" required placeholder="你的留言"></textarea>
        </div>
        <button type="submit" class="submit-btn">傳送訊息</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '@/firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const feedback = ref({
  name: '',
  email: '',
  message: ''
})

const submitFeedback = async () => {
  try {
    await addDoc(collection(db, 'contactFeedbacks'), {
      name: feedback.value.name,
      email: feedback.value.email,
      message: feedback.value.message,
      createdAt: serverTimestamp()
    })
    alert('感謝您的回饋！')
    feedback.value = { name: '', email: '', message: '' } // 清空表單
  } catch (error) {
    console.error('送出失敗：', error)
    alert('送出失敗，請稍後再試。')
  }
}
</script>

<style scoped>
/* 原本樣式碼...可依需求美化 */
.contact-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
}
.contact-info {
  margin-bottom: 2rem;
}
.contact-form .form-group {
  margin-bottom: 1rem;
}
.contact-form label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.submit-btn {
  background: #3eaf7c;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.submit-btn:hover {
  background: #359569;
}
</style>
