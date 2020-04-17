import searchAPI from '@/api/search-api'

const state = {
  episodes: null,
  totalIndexed: 0,
  mostRecent: null
}

const getters = {
  episodes: state => {
    return (state.episodes) ? state.episodes.hits.hits : null
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
    commit('SET_EPISODES', response.data)
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
  SET_EPISODES (state, episodes) {
    state.episodes = episodes
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
