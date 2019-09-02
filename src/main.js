import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from '../node_modules/element-ui'
import components from './components'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.use(Element)
Vue.use(components)
// Vue.use(axios)//全据
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
