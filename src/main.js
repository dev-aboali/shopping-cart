import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.imgur.com/3/'
axios.defaults.headers.common['Authorization'] = 'Client-ID 3306fbd07d1cd74'  

Vue.filter('currency', price => {
        let num = Number(price)
        return '$' + num.toFixed(2)
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
