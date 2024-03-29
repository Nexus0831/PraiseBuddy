import Vue from 'vue';
import Vuex from 'vuex';
import { Task } from '@/interface/interface';
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
    tasks: [],
    isSignIn: false,
    isDialogOpen: false,
    todoCreateFields: {
      key: '',
      title: '',
      memo: '',
      term: '',
      validate: true,
    },
    alertId: '',
    isCompAnimation: false,
    isConfettiAnimation: false,
    isConfettiText: true,
    isTaskSubmitAnimation: false,
    // ↓true
    isClockAnimation: true,
    isCheckedTaskSelect: false,
    isFailureAnimation: false,
  },
  getters: {
    getTask: (state) => (key: string) => state.tasks.filter((e: any) => e.key === key)[0],
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_TASKS: (state, tasks) => {
      state.tasks = tasks;
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
    SET_ALERT_ID: (state, key) => {
      state.alertId = key;
    },
    SET_IS_COMP_ANIMATION: (state, isCompAnimation) => {
      state.isCompAnimation = isCompAnimation;
    },
    SET_IS_CONFETTI_ANIMATION: (state, isConfettiAnimation) => {
      state.isConfettiAnimation = isConfettiAnimation;
    },
    SET_IS_CONFETTI_TEXT: (state, isConfettiText) => {
      state.isConfettiText = isConfettiText;
    },
    SET_IS_TASK_SUBMIT_ANIMATION: (state, isTaskSubmitAnimation) => {
      state.isTaskSubmitAnimation = isTaskSubmitAnimation;
    },
    SET_IS_CLOCK_ANIMATION: (state, isClockAnimation) => {
      state.isClockAnimation = isClockAnimation;
    },
    SET_IS_CHECKED_TASK_SELECT: (state, isCheckedTaskSelect) => {
      state.isCheckedTaskSelect = isCheckedTaskSelect;
    },
    SET_IS_FAILURE_ANIMATION: (state, isFailureAnimation) => {
      state.isFailureAnimation = isFailureAnimation;
    },
  },
  actions: {
    todoRead: (context) => {
      firebase.database().ref(`/users/${context.state.user.uid}/tasks`)
        .once('value').then((snapshot) => {
          const tasks: Record<string, Task>[] = [];

          snapshot.forEach((item: any) => {
            tasks.push({
              key: item.key,
              title: item.val().title,
              memo: item.val().memo,
              term: item.val().term,
              done: item.val().done,
            });
          });

          tasks.sort((a, b) => (a.term > b.term ? 1 : -1));

          context.commit('SET_TASKS', tasks);
        })
        .catch(() => {
          context.commit('SET_TASKS', []);
        });
    },
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
        const data: Record<string, unknown> = {
          title: context.state.todoCreateFields.title,
          memo: context.state.todoCreateFields.memo,
          term: context.state.todoCreateFields.term,
          done: false,
        };

        firebase.database().ref(`/users/${context.state.user.uid}/tasks`).push().update(data)
          .then(() => {
            context.commit('SET_IS_DIALOG_OPEN', false);
            context.dispatch('todoFieldsClear').then();
            context.dispatch('todoRead').then();
            // ここでアニメーションを再生
            context.commit('SET_IS_CLOCK_ANIMATION', false);
            context.commit('SET_IS_TASK_SUBMIT_ANIMATION', true);
            setTimeout(() => {
              context.commit('SET_IS_TASK_SUBMIT_ANIMATION', false);
              context.commit('SET_IS_CLOCK_ANIMATION', true);
            }, 13000);
          });
      } else {
        context.commit('SET_TODO_CREATE_FIELDS_VALIDATE', false);
      }
    },
    todoUpdate: (context, key) => {
      if (context.state.todoCreateFields.title !== '' && context.state.todoCreateFields.term !== '') {
        firebase.database().ref(`/users/${context.state.user.uid}/tasks/${key}`).update({
          title: context.state.todoCreateFields.title,
          memo: context.state.todoCreateFields.memo,
          term: context.state.todoCreateFields.term,
        }).then(() => {
          context.commit('SET_IS_DIALOG_OPEN', false);
          context.dispatch('todoFieldsClear').then();
          context.dispatch('todoRead').then();
        });
      }
    },
    todoSubmit: (context) => {
      if (context.state.todoCreateFields.key === '') {
        context.dispatch('todoCreate').then();
      } else {
        context.dispatch('todoUpdate', context.state.todoCreateFields.key).then();
      }
    },
    todoDelete: (context, key) => {
      firebase.database().ref(`/users/${context.state.user.uid}/tasks/${key}`).remove().then(() => {
        context.dispatch('todoRead').then(() => {
          context.commit('SET_IS_CLOCK_ANIMATION', false);
          context.commit('SET_IS_FAILURE_ANIMATION', true);
          setTimeout(() => {
            context.commit('SET_IS_FAILURE_ANIMATION', false);
            context.commit('SET_IS_CLOCK_ANIMATION', true);
          }, 7000);
        });
      });
    },
    todoCompleted: (context, key) => {
      const isDone = !context.getters.getTask(key).done;

      firebase.database().ref(`/users/${context.state.user.uid}/tasks/${key}`).update({
        done: isDone,
      }).then(() => {
        context.dispatch('todoRead').then();
        // ここでアニメーションを再生
        if (isDone) {
          context.commit('SET_IS_CLOCK_ANIMATION', false);
          context.commit('SET_IS_COMP_ANIMATION', true);
          if (new Date(context.getters.getTask(key).term) < new Date()) {
            // 期限を超えていた場合
            setTimeout(() => {
              context.commit('SET_IS_COMP_ANIMATION', false);
              context.commit('SET_IS_FAILURE_ANIMATION', true);
              context.commit('SET_IS_CONFETTI_TEXT', false);
              context.commit('SET_IS_CONFETTI_ANIMATION', true);
            }, 3500);
          } else {
            setTimeout(() => {
              context.commit('SET_IS_COMP_ANIMATION', false);
              context.commit('SET_IS_CONFETTI_TEXT', true);
              context.commit('SET_IS_CONFETTI_ANIMATION', true);
            }, 3500);
          }
          setTimeout(() => {
            context.commit('SET_IS_CONFETTI_ANIMATION', false);
            context.commit('SET_IS_FAILURE_ANIMATION', false);
            context.commit('SET_IS_CLOCK_ANIMATION', true);
          }, 10000);
        }
      });
    },
  },
  modules: {
  },
});
