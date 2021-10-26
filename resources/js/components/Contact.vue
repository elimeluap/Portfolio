<template>
  <!-- Contact -->
  <section class="section-sizing" id="contact">
    <div class="container">
      <h3 class="text-white text-center custom-title">Contact</h3>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="p-4 text-white text-justify">
              <h3 class="px-4 text-white">HEY !</h3>
              <p class="px-4">
                Vous avez une idée, un projet de site web en tête mais vous ne
                savez pas comment vous y prendre ?
              </p>
              <p class="px-4">
                Que vous soyez un particulier, un artiste ou une petite
                entreprise, n’hésitez pas à me contacter à l’aide du formulaire
                ci-contre.
              </p>
              <p class="px-4">
                Ensemble, nous discturerons de votre projet et établirons un
                devis juste et adapté à vos besoins.
              </p>
              <p class="px-4">À bientôt ! 😊</p>
            </div>
          </div>
          <div class="col-md-6">
            <form class="p-4" @submit.prevent="sendContactMail">
              <div class="form-row">
                <div class="form-group col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    placeholder="Nom"
                    v-model="formData.name"
                  />
                </div>
                <div class="form-group col-md-12">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    v-model="formData.email"
                  />
                </div>
                <div class="form-group col-md-12">
                  <textarea
                    rows="5"
                    class="form-control"
                    id="inputMessage"
                    placeholder="Message"
                    v-model="formData.message"
                  ></textarea>
                </div>
              </div>
              <div class="py-5 text-center text-md-left">
                <button type="submit" class="btn btn-primary btn-lg mt-3">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    /**
     * Envoi d'un mail à une adresse définie à partir du formulaire de contact
     */
    sendContactMail() {
      axios
        .post("/api/send-contact-mail", this.formData)
        .then((res) => {
          if (res.data.status_code === 200) {
            this.$notify.success({
              msg: "Votre email a bien été envoyé",
            });
            this.formData.name = "";
            this.formData.email = "";
            this.formData.message = "";
          }
        })
        .catch((error) => {
          if (error.response.status === 500) {
            this.$notify.error({
              msg: "Veuillez remplir tous les champs du formulaire",
            });
          }
        });
    },
  },
  computed: {},
};
</script>

<style></style>
