import { createStore } from 'vuex'
import menu from './modules/menu'

export default createStore({
  state: {
    windowWidth: 0,
    selectedItem: 'about'
  },
  mutations: {
    setWindowWidth(state, value) {
      state.windowWidth = value
    },
    setSelectedItem(state, value) {
      state.selectedItem = value
    }
  },
  actions: {
  },
  getters: {
    getWindowWidth(state) {
      return state.windowWidth
    },
    getSelectedItem(state) {
      return state.selectedItem
    }
  },
  modules: {
    menu
  }
})
