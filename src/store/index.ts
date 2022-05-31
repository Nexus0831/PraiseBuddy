import Vue from 'vue';
import Vuex from 'vuex';
// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/database';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      uid: '',
    },
    isSignIn: false,
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_IS_SIGN_IN: (state, isSignIn) => {
      state.isSignIn = isSignIn;
    },
  },
  actions: {
    signIn: (context, router) => {
      firebase.auth().languageCode = 'ja';
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        context.commit('SET_USER', result.user);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        router.push('/', () => {});
      }).catch((error) => { console.log(error); });
    },
  },
  modules: {
  },
});
