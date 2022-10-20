<template>
  <div class="task-submit-root">
    <div class="good-animation-container">
      <div class="good-animation">
        <div class="good">
          <svg xmlns="http://www.w3.org/2000/svg" width="256px" height="256px" viewBox="0 0 512 512">
            <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3
            11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48
            21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3
            19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2
            6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3
            1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176
            420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51
            51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0
            17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="text-animation-container">
      <div class="text-animation">
        <span>素</span>
        <span>晴</span>
        <span>ら</span>
        <span>し</span>
        <span>い</span>
        <span>一</span>
        <span>歩</span>
        <span>で</span>
        <span>す</span>
        <span>！</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TaskSubmitAnimation extends Vue {}
</script>

<style lang="stylus" scoped>
  .task-submit-root
    position relative
    width 100%
    height 100%
    overflow hidden
    display flex
    align-items center
    justify-content center
    flex-direction column

    .good-animation-container
      .good-animation
        animation shakeY 1s ease-in forwards

        .good
          fill #e91e63
          transform scale(-1, 1)

    .text-animation-container
      display flex
      align-items center
      justify-content center

      .text-animation
        span
          color #4CAF50
          /*-webkit-text-stroke 2px #FFFFFF*/
          font-size 56px
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
        span:nth-of-type(10)
          animation-delay 1.95s

  @keyframes sideSlide
    60%
      transform translate(20px, 0) scale(1)
      color #e91e63
    80%
      transform translate(20px, 0) scale(1)
      color #e91e63
    99%
      transform translate(0) scale(1.2)
      color #03A9F4
    100%
      transform translate(0) scale(1)
      opacity 1
      color #e91e63

  @keyframes shakeY
    from,
    to
      transform translate3d(0, 0, 0)

    10%,
    30%,
    50%,
    70%,
    90%
      transform translate3d(0, -10px, 0)

    20%,
    40%,
    60%,
    80%
      transform translate3d(0, 10px, 0)
</style>
