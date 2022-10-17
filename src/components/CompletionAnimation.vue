<template>
  <div class="root">
    <div class="check-mark-animation">
      <div class="check-mark">
        <div class="one">
          <span class="one-line"></span>
        </div>
        <span class="two">
          <span class="two-line"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CompletionAnimation extends Vue {}
</script>

<style lang="stylus" scoped>
  .root
    position relative
    width 100%
    height 100%
    overflow hidden

  .check-mark-animation
    display flex
    height 100%
    width 100%
    align-items center
    justify-content center

    .check-mark
      display flex
      align-items center
      justify-content center
      transform rotate(0.02turn)

      .one
        height 60px
        width 20px
        /*transform translate(-20px, 20px) rotate(0.35turn)*/
        transform translate(-40px, 20px) rotate(-55deg)

        .one-line
          display inline-block
          width 100%
          height 100%
          background-color aquamarine
          opacity 0.5
          transform-origin top
          animation oneLine 1s linear forwards

      .two
        width 20px
        height 100px
        transform rotate(0.6turn)
        position absolute

        .two-line
          display inline-block
          width 100%
          height 100%
          background-color aquamarine
          opacity 0
          transform-origin top
          animation oneLine 1s linear forwards
          animation-delay 1s

    @keyframes oneLine
      0%
        transform scaleY(0)
        opacity 1
      100%
        transform scaleY(1)
        opacity 1
</style>
