import Vue from 'vue'

function save (state) {
  localStorage.setItem('qit-q', JSON.stringify(state))
}

function load () {
  return JSON.parse(localStorage.getItem('qit-q'))
}

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
  },
  async clear ({ commit }) {
    commit('CLEAR_QUEUE')
  }
}

const mutations = {
  INIT (state) {
    const local = load()
    if (local) {
      Vue.set(state, 'queue', local.queue)
    }
  },
  // Vue's reactivity system can't detect key/property additions, use Vue.set() to fix it.
  ADD (state, episode) {
    Vue.set(state.queue, episode._id, episode)
    save(state)
  },
  // Vue's reactivity system can't detect key/property removals, use Vue.delete() to fix it.
  REMOVE (state, episode) {
    Vue.delete(state.queue, episode._id)
    save(state)
  },
  CLEAR_QUEUE (state) {
    state.queue = {}
    save(state)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
