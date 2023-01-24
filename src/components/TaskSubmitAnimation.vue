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
      <div class="second-text-animation-container">
        <div class="second-text-animation">
          <template v-for="(text, index) in word">
            <span
              class="second-text"
              :style="('animation-delay: ' + (4.5 + (0.05 * index)) + 's')"
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
              :style="('animation-delay: ' + (5.5 + (0.05 * (index + word.length))) + 's')"
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
import famousQuotes from '@/assets/famousQuote';

@Component
export default class TaskSubmitAnimation extends Vue {
private famousQuote = famousQuotes[Math.floor(Math.random() * famousQuotes.length)];

private word = [...this.famousQuote.word];

private person = [...this.famousQuote.person];
}
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
      animation fadeDisplay .2s ease-in 4s forwards
      position absolute

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
      animation popDisplay .1s linear 4.4s forwards
      opacity 0

      .flag-run-animation-container
        display flex
        justify-content flex-end
        align-items flex-end
        width 580px

        &::after
          content ""
          position absolute
          right 0
          border-bottom 6px solid #757575
          width 100%
          height 6px

        .run-animation
          animation slideInLeft 1s linear 4.5s forwards
          transform translate3d(-400px, 0, 0)
          fill #F2CFBB
          .run
            animation swing 1s linear 4.5s forwards
            overflow visible

            path
              animation shine 2s linear 6.5s forwards

        .flag-animation
          fill #BF4545
          animation shakeY 1s linear 5.5s forwards

      .second-text-animation-container
        display flex
        align-items center
        justify-content center
        flex-direction column

        .second-text-animation
          padding 24px

          .second-text
            color #FFEB3B
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
            color #FFEB3B
            font-size 28px
            font-weight bold
            display inline-block
            opacity 0
            animation glow_anime_on 1s ease-out forwards

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

  @keyframes fadeDisplay
    100%
      opacity 0

  @keyframes popDisplay
    100%
      opacity 1

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
      transform translate3d(0, 0, 0)

  @keyframes pikaPika
    from
      filter none
      text-shadow none
    to
      filter brightness(110%)
      text-shadow 0 0 1.75rem #FFEB3B

    10%,
    30%,
    50%,
    70%,
    90%
      filter none
      text-shadow none

    20%,
    40%,
    60%,
    80%
      filter brightness(110%)
      text-shadow 0 0 1.75rem #FFEB3B

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

  @keyframes shine
    from
      filter drop-shadow(0 0 300px #FFEB3B)
    to
      filter drop-shadow(0 0 100px #FFEB3B)

    10%,
    30%,
    50%,
    70%,
    90%
      filter drop-shadow(0 0 100px #FFEB3B)

    20%,
    40%,
    60%,
    80%
      filter drop-shadow(0 0 300px #FFEB3B)

  @keyframes glow_anime_on
    0%
      opacity 0
      text-shadow 0 0 0 #FFEB3B,0 0 0 #FFEB3B
    50%
      opacity 1
      text-shadow 0 0 10px #FFEB3B,0 0 15px #FFEB3B
    100%
      opacity 1
      text-shadow 0 0 0 #FFEB3B,0 0 0 #FFEB3B
</style>
