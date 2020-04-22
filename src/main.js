import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

store.subscribe((mutation, state) => {
  console.log(mutation)
  // console.log(state)
  // console.log(store)
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  beforeCreate () {
    this.$store.commit('Queue/INIT')
  }
}).$mount('#app')
