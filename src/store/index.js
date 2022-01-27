import { createStore } from 'vuex'

export default createStore({
  state: {
    navOpen: false
  },
  mutations: {
    toggleNav(state){
      state.navOpen = !state.navOpen
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    navOpen(state){
      return state.navOpen
    }
  }
})
