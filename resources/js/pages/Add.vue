<template>
  <div>
    <Header />
    <section class="my-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form class="card" @submit.prevent="add">
              <h3 class="card-header bg-light">Ajouter une réalisation</h3>
              <div class="card-body">
                <div class="form-group">
                  <input
                    type="text"
                    class="custom-form-control"
                    name="name"
                    placeholder="Nom"
                    v-model="formData.name"
                  />
                  <p class="text-danger"></p>
                </div>
                <div class="form-group">
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
                  <div class="mt-4" v-if="imagePreview">
                    <img
                      :src="imagePreview"
                      class="figure-img img-fluid rounded"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <b-form-tags
                    input-id="tags-pills"
                    v-model="formData.tags"
                    tag-variant="dark"
                    size="md"
                    separator=" "
                    add-button-variant="dark"
                    class="custom-form-control"
                    placeholder="Tags"
                  ></b-form-tags>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="custom-form-control"
                    name="github_link"
                    placeholder="GitHub"
                    v-model="formData.github_link"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="custom-form-control"
                    name="live_link"
                    placeholder="Live"
                    v-model="formData.live_link"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <button class="btn btn-dark custom-border-btn">
                        Ajouter
                      </button>
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
  name: "Add",
  components: {
    Header,
  },
  data() {
    return {
      formData: {
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
     * Ajout d'une réalisation
     */
    add() {
      let formData = new FormData();
      formData.append("name", this.formData.name);
      formData.append("description", this.formData.description);
      formData.append("image", this.formData.image);
      formData.append("tags", this.formData.tags);
      formData.append("github_link", this.formData.github_link);
      formData.append("live_link", this.formData.live_link);
      formData.append("user_id", this.formData.user_id);
      axios.post("/api/add", formData).then((res) => {
        if (res.data.status_code === 200) {
          this.$notify.success({
            msg: "Votre réalisation a bien été ajoutée",
          });
          this.$store.dispatch("setRealisations", res.data);
          this.$router.push("/dashboard");
        }
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
  computed: {},
};
</script>

<style>
</style>