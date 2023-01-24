<template>
  <div class="failure-root">
    <div class="failure-animation">
      <div class="failure-text-animation-container">
        <div class="failure-text-animation">
          <template v-for="(text, index) in word">
            <span
              class="failure-text"
              :style="('animation-delay: ' + (1 + (0.05 * index)) + 's')"
              :key="index"
            >
              {{ text }}
            </span>
          </template>
        </div>
        <div class="person-text-animation">
          <template v-for="(text, index) in person">
            <span
              class="person-text"
              :style="('animation-delay: ' + (1.5 + (0.05 * (index + word.length))) + 's')"
              :key="index"
            >
              {{ text }}
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import failureFamous from '@/assets/failureFamous';

@Component
export default class FailureAnimation extends Vue {
private failureFamous = failureFamous[Math.floor(Math.random() * failureFamous.length)];

private word = [...this.failureFamous.word];

private person = [...this.failureFamous.person];
}
</script>

<style lang="stylus" scoped>
  .failure-root
    position relative
    width 100%
    height 100%
    overflow hidden
    display flex
    align-items center
    justify-content center
    flex-direction column

    .failure-animation
      .failure-text-animation-container
        display flex
        align-items center
        justify-content center
        flex-direction column

        .failure-text-animation
          padding 24px

          .failure-text
            color #2196F3
            /*-webkit-text-stroke 2px #FFFFFF*/
            font-size 36px
            font-weight bold
            display inline-block
            opacity 0
            //transform translate(0, -100px) rotate(360deg) scale(0)
            //animation revolveDrop .3s forwards
            animation glow_anime_on 1s ease-out forwards

        .person-text-animation
          padding 24px
          width 100%
          text-align right

          .person-text
            color #2196F3
            font-size 28px
            font-weight bold
            display inline-block
            opacity 0
            animation glow_anime_on 1s ease-out forwards

  @keyframes glow_anime_on
    0%
      opacity 0
      text-shadow 0 0 0 #2196F3,0 0 0 #2196F3
    50%
      opacity 1
      text-shadow 0 0 10px #2196F3,0 0 15px #2196F3
    100%
      opacity 1
      text-shadow 0 0 0 #2196F3,0 0 0 #2196F3
</style>
