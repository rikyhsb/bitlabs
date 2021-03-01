import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    table: false,
    alert: false,
    loading: false
  },
  getters: {
    showTable: (state) => {
      return state.table !== false
    },
    showAlert: (state) => {
      return state.alert !== false
    },
    showLoading: (state) => {
      return state.loading !== false
    }
  },
  mutations: {
    SET_TABLE(state, payload) {
      state.table = payload
    },
    SET_ALERT(state, payload) {
      state.alert = payload
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    }
  },
})
