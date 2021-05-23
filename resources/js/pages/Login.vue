<template>
  <section class="custom-form-container">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form class="card" v-on:submit.prevent="loginUser">
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
    loginUser() {
      console.log(this.formData);
    },
  },
  computed: {},
};
</script>

<style>
</style>
