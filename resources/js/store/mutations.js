let mutations = {
  SET_REALISATIONS(state, data) {
    state.realisations = data;
  },
  LOGIN_USER(state, data) {
    state.token = data.token;
    state.user = data.user;
  },
};

export default mutations;
