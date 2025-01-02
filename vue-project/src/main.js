import './assets/main.css'
import './assets/css/style.css'  //在 Vue 中引入 sass 編譯的 CSS

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
