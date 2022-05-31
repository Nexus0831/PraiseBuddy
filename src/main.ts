import Vue from 'vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import './registerServiceWorker';
import router from './router';
import store from './store';
import config from './config/firebase';
import App from './App.vue';

Vue.config.productionTip = false;
firebase.initializeApp(config);
// const database = firebase.database();
// console.log(database);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('SET_USER', user);
    store.commit('SET_IS_SIGN_IN', true);

    if (router.currentRoute.path === '/login') {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      router.push('/', () => {});
    }
  } else {
    store.commit('SET_IS_SIGN_IN', false);
    if (router.currentRoute.path !== '/login') {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      router.push('/login', () => {});
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
