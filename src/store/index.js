import { createStore } from 'vuex'
import login from './modules/login'

export default createStore({
  state: {
    windowWidth: 0
  },
  mutations: {
    setWindowWidth(state, value) {
      state.windowWidth = value
    }
  },
  actions: {
  },
  getters: {
    getWindowWidth(state) {
      return state.windowWidth
    }
  },
  modules: {
    login
  }
})
