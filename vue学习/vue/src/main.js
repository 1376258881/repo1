import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store  //所有组件都多了一个属性：$store
})
