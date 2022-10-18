<template>
  <div class="completion-root">
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
    <div class="text-animation">
      <span>C</span>
      <span>o</span>
      <span>m</span>
      <span>p</span>
      <span>l</span>
      <span>e</span>
      <span>t</span>
      <span>e</span>
      <span>!</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CompletionAnimation extends Vue {}
</script>

<style lang="stylus" scoped>
  .completion-root
    position relative
    width 100%
    height 100%
    overflow hidden
    display flex
    align-items center
    justify-content center
    flex-direction column

    .check-mark-animation
      display flex
      width 100%
      height 50%
      align-items center
      justify-content center
      animation pulse .5s ease-in-out 1s forwards

      .check-mark
        display flex
        align-items center
        justify-content center
        transform translate(40px) rotate(0.02turn) scale(2)

        .one
          height 60px
          width 20px
          /*transform translate(-20px, 20px) rotate(0.35turn)*/
          transform translate(-41px, 20px) rotate(-55deg)

          .one-line
            display inline-block
            width 100%
            height 100%
            background-color #4CAF50
            opacity 0
            transform-origin top
            animation oneLine .5s ease-in-out forwards

        .two
          width 20px
          height 100px
          transform rotate(0.6turn)
          position absolute

          .two-line
            display inline-block
            width 100%
            height 100%
            background-color #4CAF50
            opacity 0
            transform-origin top
            animation oneLine .5s ease-in-out forwards
            animation-delay .5s

    .text-animation
      /*animation heartBeat 2s ease-in-out infinite*/
      /*animation-delay 2s*/

      span
        color #4CAF50
        /*-webkit-text-stroke 2px #FFFFFF*/
        font-size 72px
        font-weight 500
        display inline-block
        opacity 0
        transform translate(-300px, 0) scale(0)
        animation sideSlide .5s ease-in forwards

      span:nth-of-type(1)
        animation-delay 1.5s
      span:nth-of-type(2)
        animation-delay 1.55s
      span:nth-of-type(3)
        animation-delay 1.6s
      span:nth-of-type(4)
        animation-delay 1.65s
      span:nth-of-type(5)
        animation-delay 1.7s
      span:nth-of-type(6)
        animation-delay 1.75s
      span:nth-of-type(7)
        animation-delay 1.8s
      span:nth-of-type(8)
        animation-delay 1.85s
      span:nth-of-type(9)
        animation-delay 1.9s

    @keyframes oneLine
      0%
        transform scaleY(0)
        opacity 1
      100%
        transform scaleY(1)
        opacity 1
        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
          0px 24px 38px 3px rgba(0, 0, 0, 0.14),
          0px 9px 46px 8px rgba(0, 0, 0, 0.12);

    @keyframes pulse
      0%
        transform scale3d(1, 1, 1)

      50%
        transform scale3d(1.5, 1.5, 1.5)

      100%
        transform scale3d(1, 1, 1)

    @keyframes heartBeat
      0%
        transform scale(1)
      14%
        transform scale(1.3)
      28%
        transform scale(1)
      42%
        transform scale(1.3)
      70%
        transform scale(1)

    @keyframes sideSlide
      60%
        transform translate(20px, 0) scale(1)
        color #4CAF50
      80%
        transform translate(20px, 0) scale(1)
        color #4CAF50
      99%
        transform translate(0) scale(1.2)
        color #FFEB3B
      100%
        transform translate(0) scale(1)
        opacity 1
        color #4CAF50
</style>
