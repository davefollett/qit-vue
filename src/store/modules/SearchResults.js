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
  search ({ commit }, query) {
    searchAPI.search(query)
      .then(response => {
        commit('SET_RESULTS', response.data)
      })
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
