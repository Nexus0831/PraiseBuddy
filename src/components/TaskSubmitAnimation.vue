<template>
  <div class="task-submit-root">
    <div class="first-animation">
      <div class="good-animation-container">
        <div class="good-animation">
          <div class="good">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256px"
              height="256px"
              viewBox="0 0 512 512"
            >
              <path
                d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3
                  11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48
                  21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3
                  19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2
                  6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3
                  1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19
                  0-37.5-5.6-53.3-16.1l-38.5-25.7C176
                  420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7
                  36-75l7.4-5.9c26.5-21.2 44.6-51
                  51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32
                  192H96c17.7 0 32 14.3 32 32V448c0
                  17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
              />
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
    <div class="second-animation">
      <div class="flag-run-animation-container">
        <div class="run-animation">
          <svg
            class="run"
            xmlns="http://www.w3.org/2000/svg"
            width="96px"
            height="96px"
            viewBox="0 0 448 512"
          >
            <path
              d="M336 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM141.7
              175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L153.6 254c-9.3 28 1.7 58.8 26.8
              74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5
              39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L254 299l30.9-82.4 5.1 12.3C305
              264.7 339.9 288 378.7 288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H378.7c-12.9
              0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31
              0-60.8 12.3-82.7 34.3L73.4 153.4c-12.5 12.5-12.5 32.8 0
              45.3s32.8 12.5 45.3 0l23.1-23.1zM107.2 352H48c-17.7 0-32 14.3-32 32s14.3 32 32
              32h69.6c19 0 36.2-11.2 43.9-28.5L173 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L107.2 352z"
            />
          </svg>
        </div>
        <div class="flag-animation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128px"
            height="128px"
            viewBox="0 0 512 512"
          >
            <path
              d="M64 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32C0 14.3 14.3 0 32 0S64 14.3 64
              32zm40.8 302.8c-3 .9-6 1.7-8.8 2.6V13.5C121.5 6.4 153 0 184 0c36.5 0 68.3 9.1 95.6
              16.9l1.3 .4C309.4 25.4 333.3 32 360 32c26.8 0 52.9-6.8 73-14.1c9.9-3.6 17.9-7.2
              23.4-9.8c2.7-1.3 4.8-2.4 6.2-3.1c.7-.4 1.1-.6 1.4-.8l.2-.1c9.9-5.6 22.1-5.6 31.9
              .2S512 20.6 512 32V288c0 12.1-6.8 23.2-17.7 28.6L480 288c14.3 28.6 14.3 28.6 14.3
              28.6l0 0 0 0-.1 0-.2 .1-.7 .4c-.6 .3-1.5 .7-2.5 1.2c-2.2 1-5.2 2.4-9 4c-7.7 3.3-18.5
              7.6-31.5 11.9C424.5 342.9 388.8 352 352
              352c-37 0-65.2-9.4-89-17.3l-1-.3c-24-8-43.7-14.4-70-14.4c-27.5 0-60.1 7-87.2 14.8z"
            />
          </svg>
        </div>
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

    .first-animation
      /*animation display .1s ease-in 4s forwards*/
      display none

      .good-animation-container
        display flex
        justify-content center
        align-items center
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
            color #e91e63
            /*-webkit-text-stroke 2px #FFFFFF*/
            font-size 56px
            font-weight bold
            display inline-block
            opacity 0
            transform translate(0, -100px) rotate(360deg) scale(0)
            animation revolveDrop .3s forwards

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

    .second-animation
      .flag-run-animation-container
        display flex
        justify-content flex-end
        align-items flex-end
        width 580px
        fill #e91e63

        .run-animation
          transform-origin center
          animation slideInLeft 1.5s linear forwards
          .run
            animation swing 1.5s linear forwards

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

  @keyframes revolveDrop
    30%
      transform translate(0, -50px) rotate(180deg) scale(1)

    60%
      transform translate(0, 20px) scale(.8) rotate(0deg)

    100%
      transform translate(0) scale(1) rotate(0deg)
      opacity 1

  @keyframes display
    100%
      opacity 0

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

  @keyframes slideInLeft
    0%
      transform translate3d(-400px, 0, 0)
      visibility visible
    100%
      transform translate3d(0, 0, 0)

  @keyframes swing
    10%
    30%
    50%
    70%
    90%
      transform rotate(10deg)
    20%
    40%
    60%
    80%
      transform rotate(-10deg)
    100%
      transform rotate(0deg)
</style>
