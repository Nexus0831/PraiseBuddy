<template>
  <div id="home">
    <div class="said-bar">
      <div>
        <img :src="user.photoURL" alt="" class="user-icon">
      </div>
    </div>
    <div class="task-list">
      <Task :keyNumber="1"/>
      <Task :keyNumber="2"/>
      <Task :keyNumber="3"/>
      <Task :keyNumber="4"/>
      <Task :keyNumber="5"/>
      <Task :keyNumber="6"/>
      <Task :keyNumber="7"/>
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
      <h1>ここにアニメーションを表示</h1>
    </div>
    <transition name="fade">
      <TodoDialogForm
        v-if="isDialogOpen"
        :validate="todoCreateFields.validate"
        @dialog-close="dialogClose"
        :titleValue="titleValue"
        :memoValue="memoValue"
        :termValue="termValue"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import FAB from '@/components/FloatingActionButton.vue';
import TodoDialogForm from '@/components/TodoDialogForm.vue';
import Task from '@/components/Task.vue';
  // @ is an alias to /src
  @Component({
    components: {
      FAB,
      TodoDialogForm,
      Task,
    },
    computed: {
      ...mapState([
        'user',
        'todoCreateFields',
        'isDialogOpen',
      ]),
    },
  })
export default class HomeView extends Vue {
  titleValue = '';

  memoValue = '';

  termValue = '';

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

  .task-list
    grid-row 1 / 2
    grid-column 2 / 3
    z-index 90
    position relative
    overflow auto

  .animation-area
    grid-row 1 / 2
    grid-column 3 / 4
    display flex
    justify-content center
    align-items center
    background-color #A480F2

</style>
