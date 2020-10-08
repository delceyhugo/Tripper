import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Routes from './router/routes'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
// Css
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
Vue.directive('title', {
  inserted: (el, binding) => document.title = binding.value,
  update: (el, binding) => document.title = binding.value
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
