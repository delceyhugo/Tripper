import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
