<template>
  <div class="section-sizing bg-header">
    <!-- Header -->
    <header class="sticky">
      <nav
        class="navbar navbar-light bg-transparent"
        :class="{ visibleNav: isSticky }"
      >
        <div class="container">
          <div class="social-header">
            <ul class="d-flex justify-content-center align-items-center m-0">
              <li class="mr-4">
                <a
                  href="https://codepen.io/peantoine-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodePen"
                  ><i class="fab fa-codepen"></i
                ></a>
              </li>
              <li class="mr-4">
                <a
                  href="https://github.com/elimeluap"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  ><i class="fab fa-github"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/paul-emile-antoine-8628bb128/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
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
  </div>
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
      isSticky: false,
      scrollPosition: 0,
    };
  },
  methods: {
    openHamburgerMenu() {
      this.isOpen = !this.isOpen;
    },
    handleScroll(event) {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  computed: {},
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
</style>
