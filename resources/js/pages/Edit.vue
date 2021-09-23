<template>
  <div>
    <Header />
    <section class="my-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form class="card" @submit.prevent="edit">
              <h3 class="card-header bg-light">Editer une réalisation</h3>
              <div class="card-body">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Nom"
                    v-model="formData.name"
                  />
                  <p class="text-danger"></p>
                </div>
                <div class="form-group">
                  <!--<textarea
                    class="form-control"
                    name="description"
                    placeholder="Description"
                    cols="60"
                    rows="5"
                    v-model="formData.description"
                  ></textarea>-->
                  <editor
                    name="description"
                    placeholder="Description"
                    theme="snow"
                    :options="options"
                    v-model="formData.description"
                  ></editor>
                </div>
                <div class="form-group">
                  <input
                    type="file"
                    class="form-control-file"
                    name="image"
                    @change="imageHandling"
                  />
                  <div class="mt-4">
                    <img
                      v-if="!imagePreview"
                      :src="`assets/images/realisations/${realisation.image}`"
                      class="figure-img img-fluid rounded"
                    />
                    <img
                      v-if="imagePreview"
                      :src="imagePreview"
                      class="figure-img img-fluid rounded"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <b-form-tags
                    v-model="formData.tags"
                    tag-variant="primary"
                    size="md"
                    separator=" "
                    placeholder="Tags"
                  ></b-form-tags>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="github_link"
                    placeholder="GitHub"
                    v-model="formData.github_link"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="live_link"
                    placeholder="Live"
                    v-model="formData.live_link"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <button class="btn btn-primary">Editer</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/auth/Header";

export default {
  name: "Edit",
  components: {
    Header,
  },
  data() {
    return {
      formData: {
        id: this.$route.params.id,
        name: "",
        description: "",
        image: null,
        tags: [],
        github_link: "",
        live_link: "",
        user_id: this.$store.state.user.id,
      },
      options: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
          ],
        },
      },
      imagePreview: null,
    };
  },
  methods: {
    /**
     * Edition d'une réalisation
     */
    edit() {
      let formData = new FormData();
      formData.append("id", this.formData.id);
      formData.append("name", this.formData.name);
      formData.append("description", this.formData.description);
      formData.append("image", this.formData.image);
      formData.append("tags", this.formData.tags);
      formData.append("github_link", this.formData.github_link);
      formData.append("live_link", this.formData.live_link);
      formData.append("user_id", this.formData.user_id);
      axios
        .post("/api/edit", formData)
        .then((res) => {
          if (res.data.status_code === 200) {
            this.$notify.success({
              msg: "Votre réalisation a bien été modifiée",
            });
            this.$store.dispatch("setRealisations", res.data);
            this.$router.push("/dashboard");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    /**
     * Gestion de l'upload de l'image et de sa preview
     */
    imageHandling(e) {
      this.formData.image = e.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(this.formData.image);
      reader.onload = (e) => {
        this.imagePreview = e.target.result;
      };
    },
  },
  computed: {
    /**
     * Permet d'obtenir les infos de la réalisation qu'on consulte
     */
    realisation() {
      let id = this.$route.params.id;
      return this.$store.getters.getRealisationById(id);
    },
    /**
     * Permet d'obtenir un tableau d'objets contenant les tags de la réalisation qu'on consulte
     */
    realisationTags() {
      let id = this.$route.params.id;
      return this.$store.getters.getTagsByRealisation(id);
    },
    /**
     * Permet d'afficher correctement les tags (un par un)
     */
    realisationTagsCorrectlyDisplayed() {
      let tagItems = [];
      for (let i = 0; i < this.realisationTags[0].length; i++) {
        if (!tagItems.includes(this.realisationTags[0][i].name)) {
          tagItems.push(this.realisationTags[0][i].name);
        }
      }
      return tagItems;
    },
  },
  /**
   * Hydratation des données de la réalisation à la création de l'instance de Vue
   */
  created() {
    this.formData.name = this.realisation.name;
    this.formData.description = this.realisation.description;
    this.formData.image = this.realisation.image;
    this.formData.tags = this.realisationTagsCorrectlyDisplayed;
    this.formData.github_link = this.realisation.github_link;
    this.formData.live_link = this.realisation.live_link;
  },
};
</script>

<style>
</style>