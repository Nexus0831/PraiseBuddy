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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
