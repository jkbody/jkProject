import Vue from 'vue'
import App from './app'
import Vuex from 'vuex'
import store from '@/store/main'

Vue.use(Vuex)
Vue.prototype.$store = store

Vue.config.productionTip = false
const app = new Vue(App)
app.$mount()
