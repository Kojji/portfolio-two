import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { createI18n } from 'vue-i18n'
import messages from '/src/assets/i18n'
import detectLanguage from "/src/assets/languageDetect"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faGithub, faInstagram, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faWhatsapp, faGithub, faInstagram, faLinkedin, faCodepen)

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
app.provide('$t', app.config.globalProperties.$t)
app.provide('$store', app.config.globalProperties.$store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
