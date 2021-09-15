<template>
  <div>
    <Header />
    <Hero />
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
            overflow-hidden
          "
        >
          <div v-for="realisation in realisations" :key="realisation.id">
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
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "Homepage",
  components: {
    Header,
    Hero,
    About,
    Contact,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    /**
     * Permet d'obtenir toutes les réalisations
     */
    realisations() {
      return this.$store.getters.getRealisations;
    },
  },
};
</script>

<style></style>
