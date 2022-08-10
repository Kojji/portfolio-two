import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { createI18n } from 'vue-i18n'
import messages from '/src/assets/i18n'
import detectLanguage from "/src/assets/languageDetect"

const i18n = createI18n({
  locale: detectLanguage() == 'pt' ? 'pt' : 'en', // set locale
  // locale: 'pt',
  fallbackLocale: 'en', // set fallback locale
  // fallbackLocale: 'pt', // set fallback locale
  messages, // set locale messages
})

createApp(App).use(i18n).use(store).use(router).mount('#app')
