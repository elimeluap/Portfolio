<template>
  <div>
    <Header />
    <About />
    <!-- Works -->
    <section class="py-4 works" id="works">
      <div class="container">
        <h3 class="my-4 text-center">Réalisations</h3>
        <div
          class="
            d-flex
            flex-column flex-md-row flex-wrap
            justify-content-md-center
            align-items-center align-items-md-start
            mb-4
          "
        >
          <button
            v-if="tags.length"
            class="btn btn-primary mr-0 mr-md-1 mb-1 mb-md-0"
            @click="tagRealisations = []"
          >
            Afficher tout
          </button>
          <div v-for="tag in tags" :key="tag.id">
            <button
              class="btn btn-primary mr-0 mr-md-1 mb-1 mb-md-0"
              @click="filterAction(tag.realisations)"
            >
              {{ tag.name }}
            </button>
          </div>
        </div>
        <div
          class="
            d-flex
            flex-column flex-md-row flex-wrap
            justify-content-md-center
            align-items-center align-items-md-start
            overflow-hidden
          "
        >
          <div v-for="realisation in realisationsByTag" :key="realisation.id">
            <div class="card mb-4 mr-md-4" style="width: 18rem">
              <a :href="realisation.live_link" target="_blank">
                <img
                  class="card-img-top"
                  :src="`assets/images/realisations/${realisation.image}`"
                  :alt="`Screen ${realisation.name}`"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">{{ realisation.name }}</h5>
                <p class="card-text" v-html="realisation.description">
                  {{ realisation.description }}
                </p>
              </div>
              <!--<ul class="list-group list-group-flush">
                <li class="list-group-item">JavaScript</li>
                <li class="list-group-item">Vue.js</li>
                <li class="list-group-item">Laravel</li>
              </ul>-->
              <div class="card-body">
                <a
                  v-if="realisation.github_link !== null"
                  :href="realisation.github_link"
                  target="_blank"
                  class="card-link"
                  >GitHub</a
                >
                <a
                  v-if="realisation.live_link !== null"
                  :href="realisation.live_link"
                  target="_blank"
                  class="card-link"
                  >Live</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "Homepage",
  components: {
    Header,
    About,
    Contact,
    Footer,
  },
  data() {
    return {
      tagRealisations: [],
    };
  },
  methods: {
    filterAction(obj) {
      this.tagRealisations = obj;
    },
  },
  computed: {
    /**
     * Permet d'obtenir toutes les réalisations
     */
    realisations() {
      return this.$store.getters.getRealisations;
    },
    /**
     * Permet d'obtenir tous les tags
     */
    tags() {
      return this.$store.getters.getTags;
    },
    /**
     * Permet d'obtenir toutes les réalisations d'un tag donné
     */
    realisationsByTag() {
      if (this.tagRealisations.length) {
        return this.tagRealisations;
      } else {
        return this.realisations;
      }
    },
  },
};
</script>

<style></style>
