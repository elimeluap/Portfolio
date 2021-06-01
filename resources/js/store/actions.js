let actions = {
  setRealisations({ commit }) {
    // Transaction AJAX
    axios
      .get('api/realisations')
      .then((response) => commit('SET_REALISATIONS', response.data));
  },
};

export default actions;
