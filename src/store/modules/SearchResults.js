const axios = require('axios')

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
    const token = Buffer.from(`${process.env.VUE_APP_ELASTIC_USERNAME}:${process.env.VUE_APP_ELASTIC_PASSWORD}`, 'utf8').toString('base64')
    const URL = `${process.env.VUE_APP_CORS_WRAPPER}/${process.env.VUE_APP_BASE_ELASTIC_URL}`
      .replace('{searchTerm}', query)
      .replace('{maxResults}', process.env.VUE_APP_MAX_RESULTS)
    axios
      .get(URL, {
        headers: {
          Authorization: `Basic ${token}`
        }
      })
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
