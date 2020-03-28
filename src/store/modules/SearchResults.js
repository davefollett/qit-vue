import searchAPI from '@/api/search-api'

const state = {
  results: null,
  totalIndexed: 0,
  lastTen: null
}

const getters = {
  searchResults: state => {
    return (state.results) ? state.results.hits.hits : null
  },
  totalIndexed: state => {
    return state.totalIndexed
  },
  lastTen: state => {
    return (state.lastTen) ? state.lastTen.hits.hits : null
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
  async lastTen ({ commit }) {
    const response = await searchAPI.lastTen()
    commit('SET_LAST_TEN', response.data)
  }
}

const mutations = {
  SET_RESULTS (state, results) {
    state.results = results
  },
  SET_TOTAL_INDEXED (state, total) {
    state.totalIndexed = total
  },
  SET_LAST_TEN (state, lastTen) {
    state.lastTen = lastTen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
