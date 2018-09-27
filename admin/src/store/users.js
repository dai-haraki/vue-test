import users from '@/api/user/users.js'

export default {
  namespaced: true,
  state: {
    keyword: '',
    users: []
  },
  getters: {
    get(state) { // store.getters.get
      return state.users;
    },
    getKeyword(state) {
      return state.keyword;
    }
  },
  mutations: {
    set(state, payload) { // store.commit('set', users)
      console.log('mutations');
      state.users = payload;
    },
    clear(state) {
      state.users = {}
    },
    setKeyword(state, payload) {
      state.keyword = payload;
    }
  },
  actions: { // methodsと同様、api呼び出し
    search({ commit }, id) {
      const x = parseInt(id, 10);
      if (isNaN(x)) {
        console.log('nan');
        return;
      }
      const data = users.find(x);
      console.log(data);
      commit('set', [data])
    },
    load({ commit }) { // store.dispatch('load', id)
      console.log('actions');
      const data = [{ id: 1, name: 'set'}];
      console.log(data);
      commit('set', data);
    },
    destroy({ commit }) {
      commit('clear')
    }
  }
}
