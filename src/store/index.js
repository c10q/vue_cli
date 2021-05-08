import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: '테스트 상태',
    user: null
  },
  mutations: {
    setUser(state) {
      state.user = firebase.auth().currentUser.email
    },
    removeUser(state) {
      state.user = null
    }
  },
  actions: {
  },
  modules: {
  }
})
