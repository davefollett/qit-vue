import Vue from 'vue'
import Vuex from 'vuex'
import SearchResults from './modules/SearchResults'
import Queue from './modules/Queue'

Vue.use(Vuex)

const store = new Vuex.Store({
// export default new Vuex.Store({
  modules: {
    Queue,
    SearchResults
  }
})

store.subscribe((mutation, state) => {
  console.log(mutation)
})

export default store
