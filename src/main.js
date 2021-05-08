import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

firebase.auth().onAuthStateChanged((user) => {
    if (user) store.commit('setUser')
    else store.commit('removeUser')

    new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app')
});