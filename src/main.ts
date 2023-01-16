import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/tools/normalize.css'
import ElementPlus from '@/tools/element-plus'

const app = createApp(App).use(store).use(router)
app.use(ElementPlus)
app.mount('#app')
