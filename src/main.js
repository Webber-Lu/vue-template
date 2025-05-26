// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevuel/themes/aura'

// 建立 Pinia 實例
const pinia = createPinia()

// 建立 App 實例
const app = createApp(App)

// 註冊 PrimeVue（含主題）
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

// 註冊其他 plugin
app.use(router)
app.use(pinia)

app.mount('#app')