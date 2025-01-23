import './assets/main.css'
import './assets/css/style.css'                        //在 Vue 中引入 sass 編譯的 CSS
//import SweetAlertPlugin from './plugin/sweatalert2'  //在 Vue 中引入 我自行字義的 sweatalert 全局方法


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//app.use(SweetAlertPlugin);

app.mount('#app')
