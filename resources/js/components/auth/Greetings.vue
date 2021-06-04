<template>
  <section>
    <div class="jumbotron rounded-0 mb-0">
      <div class="container">
        <h3>Bienvenue, {{ name }}!</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>