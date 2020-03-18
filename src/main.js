import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/rem'
import axios from "axios"

// import VConsole from 'vconsole/dist/vconsole.min.js'
// let vConsole = new VConsole()
// export default vConsole
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

