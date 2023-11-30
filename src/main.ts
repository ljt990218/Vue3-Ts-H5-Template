import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'

import router from "./router";
import i18n from './lang/index'

import '@/assets/css/reset.css'
import '@/assets/css/index.css'
import 'vant/lib/index.css';
import 'amfe-flexible'

const pinia = createPinia()
pinia.use(piniaPluginPersist)

createApp(App).use(router).use(pinia).use(i18n).mount('#app')
