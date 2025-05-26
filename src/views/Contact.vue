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

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const { count, history, doubleCount, isEven, historyCount } = storeToRefs(counterStore)
const { increment, decrement, incrementBy, reset } = counterStore
</script>

<style scoped>
/* ...原本的樣式碼不變，保留即可... */
</style>
