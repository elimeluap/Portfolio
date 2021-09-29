/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from './router.js';
import store from './store/index.js';
import VueNotify from 'vuejs-notify';
import { BootstrapVue } from 'bootstrap-vue';
import '@morioh/v-quill-editor/dist/editor.css';
import Editor from '@morioh/v-quill-editor';

// Plugin Vue pour les notifications
Vue.use(VueNotify, {
  position: 'bottom center',
  closeOnClick: true,
});

// Plugin Vue pour intégrer des composants Bootstrap
Vue.use(BootstrapVue);

// Plugin Vue pour intégrer un éditeur Rich Text
Vue.use(Editor);

const app = new Vue({
  el: '#app',
  router,
  store,
  /**
   * À la création de l'instance de Vue:
   * On vérifie si le sessionStorage contient les informations de l'utilisateur
   * Si c'est le cas, on les récupère et on les sauvegarde dans le state du store
   * On lance l'action qui met à jour les réalisations dans le state du store
   */
  created() {
    if (sessionStorage.getItem('user')) {
      let logInfos = sessionStorage.getItem('user');
      let logInfosJSON = JSON.parse(logInfos);
      this.$store.dispatch('loginUser', logInfosJSON);
    }
    this.$store.dispatch('setRealisations');
    this.$store.dispatch('setTags');
  },
});
