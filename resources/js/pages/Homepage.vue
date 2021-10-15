<template>
  <div>
    <Header />
    <!-- Works -->
    <section class="bg-white section-sizing" id="realisations">
      <div class="container">
        <h3 class="text-center custom-title">Réalisations</h3>
        <div
          class="
            d-flex
            flex-column flex-md-row flex-wrap
            justify-content-md-center
            align-items-center align-items-md-start
          "
        >
          <div v-for="realisation in realisations" :key="realisation.id">
            <div class="card mb-4 mr-md-4" style="width: 18rem">
              <a v-b-modal.modal-lg="modalId(realisation.id)"
                ><img
                  class="card-img-top"
                  :src="`assets/images/realisations/${realisation.image}`"
                  :alt="`Screen ${realisation.name}`"
              /></a>
              <div class="card-body">
                <h5 class="card-title">{{ realisation.name }}</h5>
                <!--<p class="card-text">Lorem ipsum dolor sit amet.</p>-->
                <div class="works-links">
                  <a
                    v-if="realisation.github_link !== null"
                    :href="realisation.github_link"
                    target="_blank"
                    class="btn btn-primary btn-lg"
                    >GitHub</a
                  >
                  <a
                    v-if="realisation.live_link !== null"
                    :href="realisation.live_link"
                    target="_blank"
                    class="btn btn-secondary btn-lg"
                    >Live</a
                  >
                </div>
              </div>
            </div>
            <b-modal
              header-class="border-0"
              body-class="p-0"
              footer-class="justify-content-between border-0"
              :id="'modal' + realisation.id"
              size="lg"
              :title="realisation.name"
              ><img
                class="img-fluid"
                :src="`assets/images/realisations/${realisation.image}`"
                :alt="`Screen ${realisation.name}`"
              />
              <p class="modal-text" v-html="realisation.description">
                {{ realisation.description }}
              </p>
              <template #modal-footer="{ close }">
                <div>
                  <i class="fa fa-tag mr-1"></i>
                  <span
                    v-for="tag in realisation.tags"
                    :key="tag.id"
                    class="badge badge-light mr-1"
                    >{{ tag.name }}</span
                  >
                </div>
                <b-button size="md" variant="dark" @click="close()">
                  Fermer
                </b-button>
              </template>
            </b-modal>
          </div>
        </div>
      </div>
    </section>
    <About />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills.vue";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "Homepage",
  components: {
    Header,
    About,
    Skills,
    Contact,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    modalId(n) {
      return "modal" + n;
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
  },
};
</script>

<style></style>
