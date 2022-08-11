import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { createI18n } from 'vue-i18n'
import messages from '/src/assets/i18n'
import detectLanguage from "/src/assets/languageDetect"

const i18n = createI18n({
  legacy: false,
  locale: detectLanguage() == 'pt' ? 'pt' : 'en', // set locale
  // locale: 'pt',
  fallbackLocale: 'en', // set fallback locale
  // fallbackLocale: 'pt', // set fallback locale
  messages, // set locale messages
})

const app = createApp(App).use(i18n).use(store).use(router)
app.provide('$i18n', app.config.globalProperties.$i18n)
app.provide('$store', app.config.globalProperties.$store)
app.mount('#app')