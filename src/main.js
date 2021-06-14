import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router ,//ดึงค่า router จาก index.js มาใช้
  render: h => h(App),
}).$mount('#app')
