import Vue from 'vue';
import Router from 'vue-router';

// Chargement des composants des différentes routes
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

// Création du routing
Vue.use(Router);
export default new Router({
  /*mode: 'history',
  hash: false,*/
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});
