import './assets/style.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import ru from 'element-plus/dist/locale/ru.min.mjs'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
    .use(ElementPlus, {locale: ru})

app.mount('#app')
