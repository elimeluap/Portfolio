import Vue from 'vue';
import Router from 'vue-router';

import store from './store/index';

// Chargement des composants des différentes routes
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';

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
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next();
        } else {
          next('/login');
        }
      },
    },
  ],
});
