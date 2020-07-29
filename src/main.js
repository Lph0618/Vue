import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入axios文件对象
import axios from 'axios'
// 配置axios基础路径
axios.defaults.baseURL="http://xzserver.applinzi.com"
// 最后将配置好路径的axios放进Vue的原型对象中饭
Vue.prototype.axios=axios

// 引入全局组件对象
import myHeader from './components/myHeader.vue'

Vue.config.productionTip = false

// 将全局组件对象转换成全局组件
Vue.component("my-header",myHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
