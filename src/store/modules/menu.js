
const state = {
  selectedItem: 'about'
}

const mutations = {
  setSeletedItem(state, value) {
    state.selectedItem = value
  }
}

const actions = {

}

const getters = {
  getSelectedItem(state) {
    return state.selectedItem
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}