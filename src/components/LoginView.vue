<template>
  <div id="login">
    <div class="title">
      Praise Buddy
    </div>
    <ContainedButton
      class="button"
      buttonText="Googleアカウントでログイン"
      style="color: #BF4545"
      rippleColor="rgba(255, 255, 255, 0.5)"
      hoverColor="#d99e7c"
      backgroundColor="#F2CFBB"
      @click-action="signInAction"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContainedButton from '@/components/ContainedButton.vue';

  @Component({
    components: {
      ContainedButton,
    },
  })
export default class Login extends Vue {
  signInAction() {
    this.$store.dispatch('signIn', this.$router).then();
  }
}
</script>

<style lang="stylus" scoped>
  #login
    display flex
    justify-content center
    align-items center
    flex-direction column
    height 100vh
    width 100%
    background-color #BF4545
    .title
      color #F2CFBB
      font-size 128px
      font-weight bold

</style>
