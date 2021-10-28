<template>
  <!-- Header -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link :to="{ name: 'dashboard' }" class="navbar-brand"
          >Tableau de bord</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                :to="{ name: 'homepage' }"
                class="nav-link text-white"
                >Accueil</router-link
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-white" @click="logoutUser"
                >Se déconnecter</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * Réinitialisation du session storage et des infos de l'utilisateur dans le state
     */
    logoutUser() {
      sessionStorage.clear();
      axios
        .post("/api/logout", { token: this.$store.state.user.token })
        .then((response) => {
          this.$store.dispatch("logoutUser", response.data);
        });
      if (!sessionStorage.length) {
        this.$notify.success({
          msg: "Vous êtes déconnecté",
        });
        this.$router.push({ name: "login" });
      }
    },
  },
  computed: {},
};
</script>

<style>
</style>