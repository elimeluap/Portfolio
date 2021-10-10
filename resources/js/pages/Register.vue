<template>
  <section class="vh-100 d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form class="card" @submit.prevent="registerUser">
            <h3 class="card-header bg-dark text-white">Créer un compte</h3>
            <div class="card-body">
              <div class="form-group">
                <input
                  type="text"
                  class="custom-form-control"
                  name="name"
                  placeholder="Nom"
                  v-model="formData.name"
                />
                <p class="text-danger"></p>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="custom-form-control"
                  name="email"
                  placeholder="Email"
                  v-model="formData.email"
                />
                <p class="text-danger"></p>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="custom-form-control"
                  name="password"
                  placeholder="Mot de passe"
                  v-model="formData.password"
                />
                <p class="text-danger"></p>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="custom-form-control"
                  name="password_confirmation"
                  placeholder="Confirmer"
                  v-model="formData.password_confirmation"
                />
                <p class="text-danger"></p>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <button class="btn btn-dark custom-border-btn">
                      S'inscrire
                    </button>
                  </div>
                </div>
                <div class="col-md-6 text-right custom-form-link">
                  <router-link :to="{ name: 'login' }"
                    >Se connecter à un compte existant</router-link
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
  name: "Register",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    /**
     * Enregistrement d'un utilisateur
     */
    registerUser() {
      axios.get("/sanctum/csrf-cookie").then((res) => {
        axios
          .post("/api/register", this.formData)
          .then((res) => {
            if (res.data.status_code === 200) {
              this.$notify.success({
                msg: `Votre compte a bien été créé`,
              });
              this.$router.push({ name: "login" });
            } else if (res.data.status_code === 400) {
              this.$notify.error({
                msg: "Une erreur s'est produite. Veuillez vérifier que vous avez bien rempli tous les champs.",
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
