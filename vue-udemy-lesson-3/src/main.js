import Vue from 'vue'
import App from './App.vue'



/*
import One from './components/One.vue'
Vue.component('First',One);

Vue.component('Two',() =>{
  import('./components/Two.vue')
})
*/


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
