<template>
  <div id="home">
    <div class="said-bar">
      <div>
        <img :src="user.photoURL" alt="" class="user-icon">
      </div>
    </div>
    <div class="task-list">
      <FAB
        icon="add"
        style="color: #FFF"
        rippleColor="rgba(255, 255, 255, 0.2)"
        hoverColor="#ab003c"
        backgroundColor="#f50057"
      />
    </div>
    <div class="animation-area">
      <h1>ここにアニメーションを表示</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import FAB from '@/components/FloatingActionButton.vue';
  // @ is an alias to /src
  @Component({
    components: {
      FAB,
    },
    computed: {
      ...mapState([
        'user',
      ]),
    },
  })
export default class HomeView extends Vue {}
</script>

<style scoped lang="stylus">
  #home
    background-color #F2CFBB
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

  .animation-area
    grid-row 1 / 2
    grid-column 3 / 4
    display flex
    justify-content center
    align-items center
    background-color #A480F2

</style>
