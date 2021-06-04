let actions = {
  setRealisations({ commit }) {
    // Transaction AJAX
    axios
      .get('api/realisations')
      .then((response) => commit('SET_REALISATIONS', response.data));
  },
  loginUser({ commit }, data) {
    commit('LOGIN_USER', data);
  },
};

export default actions;
