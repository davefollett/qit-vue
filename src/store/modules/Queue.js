import Vue from 'vue'

const state = {
  queue: { }
}

const getters = {
  queue: state => {
    return state.queue
  },
  isQueued: (state) => (episode) => {
    return Object.prototype.hasOwnProperty.call(state.queue, episode._id)
  },
  length: state => {
    return Object.keys(state.queue).length
  }
}

const actions = {
  async add ({ commit }, episode) {
    commit('ADD', episode)
  },
  async remove ({ commit }, episode) {
    commit('REMOVE', episode)
  }
}

const mutations = {
  INIT (state) {
    // Read from storage and store it into state.queue
    // localStorage.setItem('key', JSON.stringify(myObj))
    // state.queue = JSON.parse(localStorage.getItem('qit-q'))
  },
  // Vue's reactivity system can't detect key/property additions, use Vue.set() to fix it.
  ADD (state, episode) {
    Vue.set(state.queue, episode._id, episode)
  },
  // Vue's reactivity system can't detect key/property removals, use Vue.delete() to fix it.
  REMOVE (state, episode) {
    Vue.delete(state.queue, episode._id)
  },
  CLEAR_QUEUE (state) {
    state.queue = {}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
