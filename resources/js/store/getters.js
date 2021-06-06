let getters = {
  getRealisations(state) {
    return state.realisations;
  },
  getRealisationById(state) {
    return function(id) {
      return state.realisations.find((realisation) => realisation.id === id);
    };
  },
  getUserInfos(state) {
    return state.user;
  },
  getUserRealisations(state) {
    return function(id) {
      return state.realisations.filter(
        (realisation) => realisation.user_id === id
      );
    };
  },
};

export default getters;
