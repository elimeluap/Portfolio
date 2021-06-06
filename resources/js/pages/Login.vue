<template>
  <section class="custom-form-container">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form class="card" @submit.prevent="loginUser">
            <h3 class="card-header bg-primary text-secondary">Connexion</h3>
            <div class="card-body">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                  v-model="formData.email"
                />
                <p class="text-danger"></p>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Mot de passe"
                  v-model="formData.password"
                />
                <p class="text-danger"></p>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <button class="btn btn-primary">Se connecter</button>
                  </div>
                </div>
                <div class="col-md-6 text-right">
                  <router-link :to="{ name: 'register' }"
                    >Créer un compte</router-link
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    /**
     * Connexion de l'utilisateur
     * Réception des données de l'API
     * Mise à jour du state du store
     * Stockage des informations dans le sessionStorage
     * Redirection vers le composant Dashboard
     */
    loginUser() {
      axios.get("/sanctum/csrf-cookie").then((res) => {
        axios
          .post("/api/login", this.formData)
          .then((res) => {
            if (res.data.status_code === 200) {
              this.$notify.success({
                msg: "Vous êtes connecté",
              });
              this.$store.dispatch("loginUser", res.data);
              let logInfos = JSON.stringify(res.data);
              sessionStorage.setItem("user", logInfos);
              this.$router.push({ name: "dashboard" });
            } else if (res.data.status_code === 400) {
              this.$notify.error({
                msg: "Une erreur s'est produite. Veuillez réessayer.",
              });
            } else if (res.data.status_code === 500) {
              this.$notify.error({
                msg: "Une erreur s'est produite. Veuillez vérifier vos identifiants.",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
  computed: {},
};
</script>

<style>
</style>
