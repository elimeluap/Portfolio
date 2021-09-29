let mutations = {
  /**
   * Hydrate les réalisations
   * Tri des réalisations par ordre décroissant
   */
  SET_REALISATIONS(state, data) {
    data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    state.realisations = data;
  },

  /**
   * Hydrate les tags
   */
  SET_TAGS(state, data) {
    state.tags = data;
  },

  /**
   * Hydrate les infos de l'utilisateur
   */
  LOGIN_USER(state, data) {
    state.token = data.token;
    state.user = data.user;
  },

  /**
   * Réinitialise les infos de l'utilisateur
   */
  LOGOUT_USER(state) {
    state.token = null;
    state.user = null;
  },
};

export default mutations;
