let actions = {
  /**
   * Action qui lance la mutation SET_REALISATIONS
   */
  setRealisations({ commit }) {
    // Transaction AJAX des réalisations
    axios
      .get('api/realisations')
      .then((response) => commit('SET_REALISATIONS', response.data));
  },

  /**
   * Action qui lance la mutation LOGIN_USER
   */
  loginUser({ commit }, data) {
    commit('LOGIN_USER', data);
  },

  /**
   * Action qui lance la mutation LOGOUT_USER
   */
  logoutUser({ commit }) {
    commit('LOGOUT_USER');
  },
};

export default actions;
