import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './JS/rem'
import './assets/css/reset.css'

createApp(App).use(store).use(router).mount('#app')
