import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
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
app.mount('#app')