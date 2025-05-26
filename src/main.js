// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
<<<<<<< HEAD
import router from './router' // ✅ 加這行，指定你的 router/index.js


// 創建 Pinia 實例
const pinia = createPinia()

const app = createApp(App)

// 使用 Pinia
app.use(pinia)
app.use(router)
=======
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router);
app.use(pinia);
>>>>>>> 3a350fe089462ad99160dbc29e89dbbaa2085d77
app.mount('#app')