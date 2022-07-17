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
    tasks: [
      {
        key: '1',
        title: 'これはタスク1です',
        memo: 'これはタスク1の詳細です',
        term: '2022-07-6',
        done: false,
      },
      {
        key: '2',
        title: 'これはタスク2です',
        memo: 'これはタスク2の詳細です',
        term: '2022-07-14',
        done: false,
      },
      {
        key: '3',
        title: 'これはタスク3です',
        memo: 'これはタスク3の詳細です',
        term: '2022-07-20',
        done: false,
      },
    ],
    isSignIn: false,
    isDialogOpen: false,
    todoCreateFields: {
      key: '',
      title: '',
      memo: '',
      term: '',
      validate: true,
    },
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_IS_SIGN_IN: (state, isSignIn) => {
      state.isSignIn = isSignIn;
    },
    SET_IS_DIALOG_OPEN: (state, isOpen) => {
      state.isDialogOpen = isOpen;
    },
    // *-- group作成用fieldのset --*
    SET_TODO_CREATE_FIELDS_KEY: (state, key) => {
      state.todoCreateFields.key = key;
    },
    SET_TODO_CREATE_FIELDS_TITLE: (state, title) => {
      state.todoCreateFields.title = title;
    },
    SET_TODO_CREATE_FIELDS_MEMO: (state, memo) => {
      state.todoCreateFields.memo = memo;
    },
    SET_TODO_CREATE_FIELDS_TERM: (state, term) => {
      state.todoCreateFields.term = term;
    },
    SET_TODO_CREATE_FIELDS_VALIDATE: (state, validate) => {
      state.todoCreateFields.validate = validate;
    },
    // *-- end --*
  },
  actions: {
    todoFieldsClear: (context) => {
      context.commit('SET_TODO_CREATE_FIELDS_KEY', '');
      context.commit('SET_TODO_CREATE_FIELDS_TITLE', '');
      context.commit('SET_TODO_CREATE_FIELDS_MEMO', '');
      context.commit('SET_TODO_CREATE_FIELDS_TERM', '');
      context.commit('SET_TODO_CREATE_FIELDS_VALIDATE', true);
    },
    signIn: (context, router) => {
      firebase.auth().languageCode = 'ja';
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        context.commit('SET_USER', result.user);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        router.push('/', () => {});
      }).catch((error) => { console.log(error); });
    },
    todoCreate: (context) => {
      if (context.state.todoCreateFields.title !== '' && context.state.todoCreateFields.term !== '') {
        const data = {
          key: '4',
          title: context.state.todoCreateFields.title,
          memo: context.state.todoCreateFields.memo,
          term: context.state.todoCreateFields.term,
          done: false,
        };
        context.state.tasks.push(data);
        context.commit('SET_IS_DIALOG_OPEN', false);
        context.dispatch('todoFieldsClear').then();
      } else {
        context.commit('SET_TODO_CREATE_FIELDS_VALIDATE', false);
      }
    },
    todoSubmit: (context) => {
      if (context.state.todoCreateFields.key === '') {
        context.dispatch('todoCreate').then();
      }
    },
  },
  modules: {
  },
});
