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
      return state.realisations.find(realisation => realisation.id === id);
    };
  },

  /**
   * Return les réalisations d'un utilisateur donné
   */
  getRealisationsByUser(state) {
    return function(id) {
      return state.realisations.filter(
        realisation => realisation.user_id === id
      );
    };
  },

  /**
   * Return les tags d'une réalisation donnée
   */
  getTagsByRealisation(state) {
    return function(id) {
      return state.realisations.map(realisation => {
        return realisation.tags.filter(tag => tag.pivot.realisation_id === id);
      });
    };
  },

  /**
   * Return tous les tags
   */
  getTags(state) {
    return state.tags;
  },

  /**
   * Return les infos de l'utilisateur
   */
  getUserInfos(state) {
    return state.user;
  },
};

export default getters;
