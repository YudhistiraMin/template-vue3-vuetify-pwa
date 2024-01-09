import { createStore } from 'vuex'

const store = createStore({
  state: {
    auth_user: null,
    token: '',
    authenticated: false,
    user: {},
  },
  getters: {
    // user: state => state.auth_user
  },
  mutations: {
    SET_TOKEN(state, accessToken) {
      state.token = accessToken
      state.authenticated = true
    },
    SET_USER(state, accessUser) {
      console.log('isi staate', state);
      console.log('isi access', accessUser);
      state.user = accessUser
    },
  },
  actions: {
  },
  modules: {
  }
});

export default store;