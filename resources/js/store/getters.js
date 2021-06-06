let getters = {
  /**
   * Return toutes les réalisations
   */
  getRealisations(state) {
    return state.realisations;
  },

  /**
   * Return une réalisation en fonction de son id
   */
  getRealisationById(state) {
    return function(id) {
      return state.realisations.find((realisation) => realisation.id === id);
    };
  },

  /**
   * Return les réalisations d'un utilisateur donné
   */
  getRealisationsByUser(state) {
    return function(id) {
      return state.realisations.filter(
        (realisation) => realisation.user_id === id
      );
    };
  },

  /**
   * Return les infos de l'utilisateur
   */
  getUserInfos(state) {
    return state.user;
  },
};

export default getters;
