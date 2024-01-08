import { createStore } from 'vuex'

const store = createStore({
  state: {
    auth_user: null,
    authenticated: false,
    roles: '',
  },
  getters: {
    user: state => state.auth_user
  },
  mutations: {
    SET_AUTH_USER(state, user) {
      state.auth_user = user;
    },
    CLEAR_AUTH_USER(state) {
      state.auth_user = null;
    }
  },
  actions: {
    async login({ commit }, data) {
      commit('SET_AUTH_USER', data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('access_token', data.access_token);
      window.location = '/';
    },

    async logout({ commit }) {
      await commit('CLEAR_AUTH_USER');
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      window.location = '/login';
    },

    getAccessToken() {
      return localStorage.getItem('access_token');
    },

    async clearCredentials({ commit }) {
      commit('CLEAR_AUTH_USER');
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
    }
  },
  modules: {
  }
});

export default store;