import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index';

// Chargement des composants des différentes routes
const Homepage = () => import('./pages/Homepage');
const Login = () => import('./pages/Login');
const Register = () => import('./pages/Register');
const Dashboard = () => import('./pages/Dashboard');
const Add = () => import('./pages/Add');
const Edit = () => import('./pages/Edit');

// Création du routing
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: '/',
  fallback: true,
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
    /* {
      path: '/register',
      name: 'register',
      component: Register,
    }, */
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
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
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
