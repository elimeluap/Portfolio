<template>
  <section class="section-sizing">
    <!-- Header -->
    <header>
      <nav class="navbar navbar-light bg-white">
        <div class="container">
          <div class="social-header">
            <ul class="d-flex justify-content-center align-items-center m-0">
              <li class="mr-4">
                <a href="https://codepen.io/peantoine-dev" target="_blank"
                  ><i class="fab fa-codepen"></i
                ></a>
              </li>
              <li class="mr-4">
                <a href="https://github.com/elimeluap" target="_blank"
                  ><i class="fab fa-github"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/paul-emile-antoine-8628bb128/"
                  target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </li>
            </ul>
          </div>
          <router-link
            :to="{ name: 'homepage' }"
            class="navbar-brand text-primary"
            >PEA</router-link
          >
          <button
            class="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              class="animated-icon1"
              :class="{ open: isOpen }"
              @click="openHamburgerMenu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link nav-link-homepage" href="#realisations"
                  >Réalisations</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-homepage" href="#apropos"
                  >À propos</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-homepage" href="#skills"
                  >Skills et softwares</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-homepage" href="#contact"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <Hero />
  </section>
</template>

<script>
import Hero from "../components/Hero.vue";

export default {
  components: {
    Hero,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openHamburgerMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {},
};
</script>

<style>
</style>
