import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      token: '',
      isAuthenticated: false,
      group: null
    }
    
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.user.token = localStorage.getItem('token')
        state.user.isAuthenticated = true
      } else {
        state.user.token = ''
        state.user.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.user.token = token
      state.user.isAuthenticated = true
    },
    setGroup(state, group) {
      state.user.group = group;
    },
    removeToken(state) {
      state.user.token = ''
      state.user.isAuthenticated = false
    }
  },
  actions: {
    user_group(context) {
      axios.get('courses/user_group/')
      .then(response => {
          this.group = response.data.group;
          context.commit('setAuthentication', true);
          context.commit('setGroup', group);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  modules: {
  }
})