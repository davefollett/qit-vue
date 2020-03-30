import searchAPI from '@/api/search-api'

const state = {
  results: null,
  totalIndexed: 0,
  mostRecent: null
}

const getters = {
  searchResults: state => {
    return (state.results) ? state.results.hits.hits : null
  },
  totalIndexed: state => {
    return state.totalIndexed
  },
  mostRecent: state => {
    return (state.mostRecent) ? state.mostRecent.hits.hits : null
  }
}

const actions = {
  async search ({ commit }, query) {
    const response = await searchAPI.search(query)
    commit('SET_RESULTS', response.data)
  },
  async totalIndexed ({ commit }) {
    const total = await searchAPI.totalIndexed()
    commit('SET_TOTAL_INDEXED', total)
  },
  async mostRecent ({ commit }, number) {
    const response = await searchAPI.mostRecent(number)
    commit('SET_MOST_RECENT', response.data)
  }
}

const mutations = {
  SET_RESULTS (state, results) {
    state.results = results
  },
  SET_TOTAL_INDEXED (state, total) {
    state.totalIndexed = total
  },
  SET_MOST_RECENT (state, mostRecent) {
    state.mostRecent = mostRecent
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
