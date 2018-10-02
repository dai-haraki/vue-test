import users from '@/api/user/users.js'

export default {
  namespaced: true,
  state: {
    keyword: '',
    users: [],
    user: null
  },
  getters: {
    getUsers(state) { // store.getters.get
      console.log('getUsers');
      return state.users;
    },
    getUser(state) {
      console.log('getUser');
      console.log(state.user);
      return state.user;
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
    setUser(state, payload) {
      state.user = payload;
    },
    clear(state) {
      state.users = {},
      state.user = {}
    },
    setKeyword(state, payload) {
      state.keyword = payload;
    }
  },
  actions: { // methodsと同様、api呼び出し
    search({ commit }, id) {
      console.log(id);
      const x = parseInt(id, 10);
      if (isNaN(x)) {
        console.log('nan');
        return;
      }
      const data = users.find(x);
      console.log(data);
      commit('set', [data])
    },
    getById({ commit }, id) {
      console.log('getById: ' + id);
      const x = parseInt(id, 10);
      if (isNaN(x)) {
        console.log('nan');
        return;
      }
      const data = users.find(x);
      commit('setUser', data);
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
