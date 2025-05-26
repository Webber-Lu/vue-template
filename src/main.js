// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // ✅ 加這行，指定你的 router/index.js


// 創建 Pinia 實例
const pinia = createPinia()

const app = createApp(App)

// 使用 Pinia
app.use(pinia)
app.use(router)
app.mount('#app')