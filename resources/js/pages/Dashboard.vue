<template>
  <div>
    <Header />
    <Greetings :name="userInfos.name" />
    <section class="bg-light">
      <div class="container">
        <div class="my-4">
          <router-link
            :to="{ name: 'add' }"
            class="btn btn-dark btn-small custom-border-btn"
            >Ajouter</router-link
          >
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Liens</th>
                <th scope="col">Actions</th>
                <th scope="col">Tags</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="realisation in userRealisations" :key="realisation.id">
                <th scope="row">{{ realisation.name }}</th>
                <td scope="row" v-html="realisation.description">
                  {{ realisation.description }}
                </td>
                <td scope="row">
                  <img
                    :src="`assets/images/realisations/${realisation.image}`"
                    :alt="realisation.name"
                    class="img-fluid w-75"
                  />
                </td>
                <td scope="row" class="custom-form-link">
                  <a
                    :href="realisation.github_link"
                    target="_blank"
                    class="d-block mb-4"
                    >GitHub</a
                  >
                  <a :href="realisation.live_link" target="_blank">Live</a>
                </td>
                <td scope="row">
                  <router-link
                    :to="{ name: 'edit', params: { id: realisation.id } }"
                    class="btn btn-success btn-small mb-2 custom-border-btn"
                    >Editer</router-link
                  >
                  <b-button
                    @click="deleteRealisation(realisation.id)"
                    variant="danger"
                    class="custom-border-btn"
                    >Supprimer</b-button
                  >
                </td>
                <td scope="row">
                  <ul
                    v-for="tag in realisation.tags"
                    :key="tag.id"
                    class="tags-container"
                  >
                    <li>{{ tag.name }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/auth/Header";
import Greetings from "../components/auth/Greetings";

export default {
  name: "Dashboard",
  components: {
    Header,
    Greetings,
  },
  data() {
    return {};
  },
  methods: {
    /**
     * Suppression d'une réalisation
     * Modal box BootstrapVue pour la confirmation de l'action
     */
    deleteRealisation(id) {
      this.$bvModal
        .msgBoxConfirm(
          "Etes-vous sûr de vouloir supprimer cette réalisation ?",
          {
            title: "Supprimer la réalisation",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            cancelVariant: "primary",
            okTitle: "Oui",
            cancelTitle: "Annuler",
            footerClass: "bg-white p-2",
            hideHeaderClose: false,
            centered: true,
          }
        )
        .then((value) => {
          if (value === true) {
            axios
              .post("/api/delete", { id: id })
              .then((res) => {
                if (res.data.status_code === 200) {
                  this.$notify.success({
                    msg: "La réalisation a bien été supprimée",
                  });
                  this.$store.dispatch("setRealisations", res.data);
                }
              })
              .catch((error) => {
                console.log(error.response);
              });
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  computed: {
    /**
     * Permet d'obtenir les informations de l'utilisateur connecté
     */
    userInfos() {
      return this.$store.getters.getUserInfos;
    },
    /**
     * Permet d'obtenir les réalisations de l'utilisateur connecté
     */
    userRealisations() {
      let id = this.userInfos.id;
      return this.$store.getters.getRealisationsByUser(id);
    },
  },
};
</script>

<style>
</style>