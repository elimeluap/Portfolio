<template>
  <!-- Header -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link :to="{ name: 'dashboard' }" class="navbar-brand"
          >Dashboard</router-link
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
            <li class="nav-item active">
              <router-link :to="{ name: 'homepage' }" class="nav-link"
                >Home</router-link
              >
            </li>
            <li class="nav-item active">
              <a href="#" class="nav-link" @click="logoutUser">Logout</a>
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
    logoutUser() {
      sessionStorage.clear();
      this.$store.dispatch("logoutUser");
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