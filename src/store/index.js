import Vue from 'vue'
import Vuex from 'vuex'
import SearchResults from './modules/SearchResults'
import Queue from './modules/Queue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Queue,
    SearchResults
  }
})
