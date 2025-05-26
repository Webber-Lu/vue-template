<<<<<<< HEAD
<template>
    Contact me
</template>
=======
<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

// 取得 store 實例
const counterStore = useCounterStore()
// 解構響應式狀態和 getters（需要使用 storeToRefs）
const { count, history, doubleCount, isEven, historyCount } = storeToRefs(counterStore)
// 解構 actions（不需要 storeToRefs）
const { increment, decrement, incrementBy, reset } = counterStore
</script>

<template>
  <div class="contact-page">
    <h1>Contact Page</h1>
    
    <div class="contact-info">
      <h2>Contact Information</h2>
      <div class="info-card">
        <p><strong>Company:</strong> Vue Template Ltd</p>
        <p><strong>Address:</strong> 123 Vue Street, Frontend City</p>
        <p><strong>Email:</strong> info@vuetemplate.example</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
      </div>
    </div>
    
    <div class="counter-section">
      <h2>Counter Status</h2>
      <div class="counter-info">
        <p><strong>Current Count:</strong> {{ count }}</p>
        <p><strong>Double Count:</strong> {{ doubleCount }}</p>
        <p><strong>Count Type:</strong> {{ isEven ? 'Even number' : 'Odd number' }}</p>
        <p><strong>History Count:</strong> {{ historyCount }} entries</p>
      </div>
      
      <div class="counter-actions">
        <h3>Counter Controls</h3>
        <div class="buttons">
          <button @click="decrement" class="btn-decrease">Decrease</button>
          <button @click="increment" class="btn-increase">Increase</button>
          <button @click="reset" class="btn-reset">Reset</button>
        </div>
      </div>
      
      <div class="counter-history">
        <h3>Recent Activity</h3>
        <ul class="history-list">
          <li v-for="(item, index) in history.slice(-3)" :key="index" class="history-item">
            <span class="action">{{ item.action }}</span> at 
            <span class="time">{{ new Date(item.timestamp).toLocaleTimeString() }}</span> - 
            <span class="value">Value: {{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="feedback-section">
      <h2>Send Us a Message</h2>
      <p>Have questions or feedback about our counter service? Let us know!</p>
      <div class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your email">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <button class="submit-btn">Send Message</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  font-size: 1.8rem;
  color: #3498db;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.contact-info, .counter-section, .feedback-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.info-card p {
  margin-bottom: 0.8rem;
}

.counter-info {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.counter-actions {
  margin-bottom: 1.5rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-decrease, .btn-increase, .btn-reset, .submit-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-decrease {
  background-color: #e74c3c;
  color: white;
}

.btn-increase {
  background-color: #27ae60;
  color: white;
}

.btn-reset {
  background-color: #f39c12;
  color: white;
}

.btn-decrease:hover, .btn-increase:hover, .btn-reset:hover, .submit-btn:hover {
  filter: brightness(1.1);
}

.counter-history {
  margin-top: 1.5rem;
}

.history-list {
  list-style: none;
  padding: 0;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

.history-item {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #eee;
}

.history-item:last-child {
  border-bottom: none;
}

.action {
  font-weight: bold;
  color: #3498db;
}

.time {
  color: #7f8c8d;
}

.value {
  font-weight: 500;
}

.contact-form {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-btn {
  background-color: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  width: 100%;
  font-size: 1rem;
}
</style>

>>>>>>> 3a350fe089462ad99160dbc29e89dbbaa2085d77
