<template>
  <div id="home">
    <div class="said-bar">
      <div>
        <img :src="user.photoURL" alt="" class="user-icon" referrerpolicy="no-referrer">
      </div>
      <div
        class="in-checked-task-tab tab"
        :class="{'selected': !isCheckedTaskSelect}"
        @click="inCheckedTaskSelect"
      >
        未完了
      </div>
      <div
        class="checked-task-tab tab"
        :class="{'selected': isCheckedTaskSelect}"
        @click="checkedTaskSelect"
      >
        完了
      </div>
    </div>
    <div class="task-list" :style="{'background-color': isCheckedTaskSelect ? '#A480F2' : '#F2CFBB'}">
      <template v-for="item in tasks">
          <Task
            :key="item.key"
            :keyNumber="item.key"
            :title="item.title"
            :memo="item.memo"
            :term="item.term"
            :done="item.done"
            @update-action="dialogEditOpen"
            v-if="isCheckedTaskSelect === item.done"
          />
          <transition name="alert" :key="item.key">
            <Alert
              :title="`警告！ タスク「${item.title}」を削除しますか？`"
              :message="`この操作は取り消しができず、削除したタスクは復元できません`"
              v-if="alertId === item.key"
              @alert-action="todoDelete(item.key)"
              @alert-close="alertClose"
            />
          </transition>
      </template>
      <FAB
        icon="add"
        :style="{'color': isCheckedTaskSelect ? '#A480F2' : '#F2CFBB'}"
        rippleColor="rgba(255, 255, 255, 0.2)"
        :hoverColor="isCheckedTaskSelect ? '#d99e7c' : '#8350f2'"
        :backgroundColor="isCheckedTaskSelect ? '#F2CFBB' : '#A480F2'"
        @click-action="dialogOpen"
      />
    </div>
    <div class="animation-area">
      <transition name="fade">
        <ClockAnimation
          v-if="isClockAnimation"
        />
        <CompletionAnimation
          v-if="isCompAnimation"
        />
        <ConfettiAnimation
          v-if="isConfettiAnimation"
        />
        <TaskSubmitAnimation
          v-if="isTaskSubmitAnimation"
        />
      </transition>
    </div>
    <transition name="fade">
      <TodoDialogForm
        v-if="isDialogOpen"
        :validate="todoCreateFields.validate"
        @dialog-close="dialogClose"
        :titleValue="titleValue"
        :memoValue="memoValue"
        :termValue="termValue"
        @submit-action="todoSubmit"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';
import FAB from '@/components/FloatingActionButton.vue';
import TodoDialogForm from '@/components/TodoDialogForm.vue';
import Task from '@/components/Task.vue';
import Alert from '@/components/Alert.vue';
import ConfettiAnimation from '@/components/ConfettiAnimation.vue';
import CompletionAnimation from '@/components/CompletionAnimation.vue';
import TaskSubmitAnimation from '@/components/TaskSubmitAnimation.vue';
import ClockAnimation from '@/components/ClockAnimation.vue';
  // @ is an alias to /src
  @Component({
    components: {
      FAB,
      TodoDialogForm,
      Task,
      Alert,
      ConfettiAnimation,
      CompletionAnimation,
      TaskSubmitAnimation,
      ClockAnimation,
    },
    computed: {
      ...mapState([
        'user',
        'tasks',
        'todoCreateFields',
        'isDialogOpen',
        'alertId',
        'isCompAnimation',
        'isConfettiAnimation',
        'isTaskSubmitAnimation',
        'isClockAnimation',
        'isCheckedTaskSelect',
      ]),
    },
    methods: {
      ...mapActions([
        'todoSubmit',
        'todoDelete',
      ]),
    },
  })
export default class HomeView extends Vue {
  titleValue = '';

  memoValue = '';

  termValue = '';

  mounted() {
    this.$store.dispatch('todoRead').then();
    this.$store.watch(
      (state) => state.user.uid,
      () => {
        this.$store.dispatch('todoRead').then();
      },
    );
  }

  dialogEditOpen(key: string) {
    const task = this.$store.getters.getTask(key);
    this.titleValue = task.title;
    this.memoValue = task.memo;
    this.termValue = task.term;
    this.$store.commit('SET_TODO_CREATE_FIELDS_KEY', key);
    this.$store.commit('SET_IS_DIALOG_OPEN', true);
  }

  dialogOpen() {
    this.titleValue = '';
    this.memoValue = '';
    this.termValue = '';
    this.$store.commit('SET_IS_DIALOG_OPEN', true);
  }

  dialogClose() {
    this.$store.commit('SET_IS_DIALOG_OPEN', false);
    this.$store.dispatch('todoFieldsClear');
  }

  alertClose() {
    this.$store.commit('SET_ALERT_ID', '');
  }

  inCheckedTaskSelect() {
    this.$store.commit('SET_IS_CHECKED_TASK_SELECT', false);
  }

  checkedTaskSelect() {
    this.$store.commit('SET_IS_CHECKED_TASK_SELECT', true);
  }
}
</script>

<style scoped lang="stylus">
  #home
    background-color #FFF
    display grid
    grid-template-rows 1fr
    grid-template-columns 64px 1fr 600px
    height 100vh

  .said-bar
    grid-row 1 / 2
    grid-column 1 / 2
    background-color #BF4545
    z-index 100

    .tab
      height 240px
      width 100%
      writing-mode vertical-rl
      display flex
      justify-content center
      align-items center
      font-size 24px
      font-weight bold
      border-radius 20px 0 0 20px
      position relative
      z-index 200
      transition all .2s

      &:hover
        cursor pointer

    .selected
      z-index 300
      box-shadow rgba(0, 0, 0, 60%) -3px 0px 10px 0px

    .in-checked-task-tab
      margin-top 124px
      color #BF4545
      background-color #F2CFBB

      &:hover
        background-color #d99e7c

    .checked-task-tab
      margin-top -32px
      color #F2CFBB
      background-color #a480f2

      &:hover
        background-color #8350f2

  .user-icon
    border-radius 50%
    padding 4px

  .task-list
    grid-row 1 / 2
    grid-column 2 / 3
    z-index 8000
    position relative
    overflow auto
    /*box-shadow rgb(0 0 0 / 20%) 0px 2px 1px -1px,
      rgb(0 0 0 / 14%) 0px 1px 1px 0px,
      rgb(0 0 0 / 12%) 0px 1px 3px 0px
      */

  .animation-area
    grid-row 1 / 2
    grid-column 3 / 4
    /*display flex*/
    /*justify-content center*/
    /*align-items center*/
    background-color #303030

  .fade-enter-active, .fade-leave-active
    will-change opacity
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  .fade-enter, .fade-leave-to
    opacity: 0
</style>
