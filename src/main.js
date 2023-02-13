import { createApp } from 'vue'
// import './style.css'
import "./assets/css/al.style.min.css"
import "./assets/css/layout.k.min.css"
import "./assets/css/fontawesome.css"
import App from './App.vue'
import router from './router'

import './TemplateJS/custom'
import './Axios/axios'

createApp(App).use(router).mount('#app')
