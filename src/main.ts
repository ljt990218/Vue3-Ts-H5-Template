import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'

import router from "./router";
import i18n from './lang/index'

import 'amfe-flexible'
import '@/assets/css/reset.css'
import '@/assets/css/index.css'

// https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#4.-yin-ru-han-shu-zu-jian-de-yang-shi
// Toast
import { showToast } from 'vant';
import 'vant/es/toast/style';
// Dialog
import 'vant/es/dialog/style';

const pinia = createPinia()
pinia.use(piniaPluginPersist)

createApp(App).use(router).use(pinia).use(i18n).mount('#app')
