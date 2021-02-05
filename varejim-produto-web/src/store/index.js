import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: []
  },
  getters: {
    getFilter: state => {
      return state.filters
    }
  },
  mutations: {
    addFilter: (filters, filter) => {
      filters.push(filter)
    },
    removeFilter: (filters, filter) => {
      let idx = filters.findIndex(filter)
      filters = filters.splice(idx, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
