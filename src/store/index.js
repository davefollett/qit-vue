import Vue from 'vue'
import Vuex from 'vuex'
import SearchResults from './modules/SearchResults'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SearchResults
  }
})
