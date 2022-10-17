<template>
  <div id="home">
    <div class="said-bar">
      <div>
        <img :src="user.photoURL" alt="" class="user-icon">
      </div>
    </div>
    <div class="task-list">
      <template v-for="item in tasks">
        <Task
          :key="item.key"
          :keyNumber="item.key"
          :title="item.title"
          :memo="item.memo"
          :term="item.term"
          :done="item.done"
          @update-action="dialogEditOpen"
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
        style="color: #FFF"
        rippleColor="rgba(255, 255, 255, 0.2)"
        hoverColor="#8350f2"
        backgroundColor="#A480F2"
        @click-action="dialogOpen"
      />
    </div>
    <div class="animation-area">
      <ConfettiAnimation
        v-if="isAnimation"
      />
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
  // @ is an alias to /src
  @Component({
    components: {
      FAB,
      TodoDialogForm,
      Task,
      Alert,
      ConfettiAnimation,
    },
    computed: {
      ...mapState([
        'user',
        'tasks',
        'todoCreateFields',
        'isDialogOpen',
        'alertId',
        'isAnimation',
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
    box-shadow rgb(0 0 0 / 20%) 0px 2px 1px -1px,
      rgb(0 0 0 / 14%) 0px 1px 1px 0px,
      rgb(0 0 0 / 12%) 0px 1px 3px 0px

  .user-icon
    border-radius 50%
    padding 4px

  .task-list
    grid-row 1 / 2
    grid-column 2 / 3
    z-index 90
    position relative
    overflow auto

  .animation-area
    grid-row 1 / 2
    grid-column 3 / 4
    /*display flex*/
    /*justify-content center*/
    /*align-items center*/
    background-color #303030

</style>
