import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from '../node_modules/element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './style/index.less'
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
