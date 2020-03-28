import searchAPI from '@/api/search-api'

const state = {
  results: null
}

const getters = {
  searchResults: state => {
    return (state.results) ? state.results.hits.hits : null
  }
}

const actions = {
  async search ({ commit }, query) {
    const response = await searchAPI.search(query)
    commit('SET_RESULTS', response.data)
  }
}

const mutations = {
  SET_RESULTS (state, results) {
    state.results = results
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
