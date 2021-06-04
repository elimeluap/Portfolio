<template>
  <div>
    <Header />
    <Greetings :name="userInfos.name" />
    <section class="bg-light">
      <div class="container">
        <div class="my-4">
          <router-link :to="{}" class="btn btn-primary btn-small"
            >Ajouter</router-link
          >
        </div>
        <div v-for="realisation in userRealisations" :key="realisation.id">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nom</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Liens</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{{ realisation.name }}</th>
                  <td scope="row">{{ realisation.description }}</td>
                  <td scope="row">
                    <img
                      :src="`assets/images/${realisation.image}`"
                      alt="realisation.name"
                      class="img-fluid w-75"
                    />
                  </td>
                  <td scope="row">
                    <a
                      :href="realisation.github_link"
                      target="_blank"
                      class="d-block mb-4"
                      >GitHub</a
                    >
                    <a :href="realisation.live_link" target="_blank">Live</a>
                  </td>
                  <td scope="row">
                    <router-link :to="{}" class="btn btn-success btn-small mb-2"
                      >Editer</router-link
                    >
                    <router-link :to="{}" class="btn btn-danger btn-small"
                      >Supprimer</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
  methods: {},
  computed: {
    userInfos() {
      return this.$store.getters.getUserInfos;
    },
    userRealisations() {
      let id = this.userInfos.id;
      return this.$store.getters.getUserRealisations(id);
    },
  },
};
</script>

<style>
</style>