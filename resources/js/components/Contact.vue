<template>
  <!-- Contact -->
  <section class="py-4 contact" id="contact">
    <div class="container">
      <h3 class="my-4 text-center">Me contacter</h3>
      <form class="py-4">
        <div class="form-row">
          <div class="form-group col-md-6">
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Nom"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-12">
            <textarea
              rows="5"
              class="form-control"
              id="inputMessage"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div class="mt-2 text-center">
          <button type="submit" class="btn btn-secondary btn-lg">
            Envoyer
          </button>
        </div>
      </form>
      <div class="py-4 mt-4">
        <ul class="d-flex justify-content-center align-items-center m-0">
          <li class="mr-4">
            <a href="https://codepen.io/peantoine-dev" target="_blank"
              ><i class="fab fa-codepen"></i
            ></a>
          </li>
          <li class="mr-4">
            <a href="https://github.com/peantoine-dev" target="_blank"
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
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>
