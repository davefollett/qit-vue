import Vue from 'vue'

const state = {
  // queue: new Map()
  queue: { }
}

const getters = {
  queue: state => {
    return state.queue
  },
  isQueued: (state) => (episode) => {
    // if (episode._id === '51C11FE625141D4E5A78D1012B701112') {
    // console.log(episode._id)
    // console.log(state.queue)
    // }
    // return state.queue.has(episode._id)
    return Object.prototype.hasOwnProperty.call(state.queue, episode._id)
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
  ADD (state, episode) {
    // state.queue.set(episode._id, episode)
    Vue.set(state.queue, episode._id, episode)
  },
  REMOVE (state, episode) {
    // state.queue.delete(episode._id)
  },
  CLEAR_QUEUE (state) {
    // state.queue.clear()
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
