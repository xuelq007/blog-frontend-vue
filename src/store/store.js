import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({

  state: {
    isLogin: false
  },

  getters: {
    getIsLogin (state) {
      return state.isLogin
    }
  },

  actions: {
    setIsLogin ({commit, state}, isLogin) {
      commit('setIsLogin', isLogin)
    }
  },

  mutations: {
    setIsLogin (state, isLogin) {
      state.isLogin = isLogin
    }
  }
})

export default store
