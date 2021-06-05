let mutations = {
  SET_REALISATIONS(state, data) {
    state.realisations = data;
  },
  LOGIN_USER(state, data) {
    state.token = data.token;
    state.user = data.user;
  },
  LOGOUT_USER(state) {
    state.token = null;
    state.user = null;
  },
};

export default mutations;
