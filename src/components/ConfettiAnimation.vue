<template>
  <div class="root">
    <div class="message-animation-container">
      <div class="message-animation">
        <span>C</span>
        <span>o</span>
        <span>n</span>
        <span>g</span>
        <span>r</span>
        <span>a</span>
        <span>t</span>
        <span>u</span>
        <span>l</span>
        <span>a</span>
        <span>t</span>
        <span>i</span>
        <span>o</span>
        <span>n</span>
        <span>s</span>
        <span>!</span>
      </div>
    </div>
    <template v-for="i of 100">
      <div
        class="pieces"
        :key="i"
        :style="{
          marginLeft: `${Math.random() * 100}%`,
          animationDelay: `-${Math.random() * (20 - 10) + 10}s`,
          animationDuration: `${Math.random() * (10 - 5) + 5}s`,
        }"
      >
        <div
          class="piece"
          :style="{animationDuration: `${Math.random() * (4 - 2) + 2}s`}"
        >
          <div
            class="front"
            :style="{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`}"
          ></div>
          <div class="back"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ConfettiAnimation extends Vue {
}
</script>

<style lang="stylus" scoped>
  .root
    position relative
    width 100%
    height 100%
    overflow hidden

  .pieces
    position absolute
    height 100%
    animation fall linear infinite

  .piece
    width 10px
    height 10px
    transform-style: preserve-3d;
    animation piece linear infinite

  .front
    position absolute
    width 100%
    height 100%

  .back
    position absolute
    width 100%
    height 100%
    background-color rgba(255, 255, 255, 0.8)
    backface-visibility hidden

  .message-animation-container
    position absolute
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center

  .message-animation
    animation heartBeat 2s ease-in-out infinite
    animation-delay 2s

    span
      color #FFEB3B
      /*-webkit-text-stroke 2px #FFFFFF*/
      font-size 56px
      font-weight 500
      display inline-block
      opacity 0
      transform translate(200px, -100px) scale(2)
      animation ballDrop .5s ease-in forwards

    span:nth-of-type(2)
      animation-delay .05s
    span:nth-of-type(3)
      animation-delay .1s
    span:nth-of-type(4)
      animation-delay .15s
    span:nth-of-type(5)
      animation-delay .2s
    span:nth-of-type(6)
      animation-delay .25s
    span:nth-of-type(7)
      animation-delay .3s
    span:nth-of-type(8)
      animation-delay .35s
    span:nth-of-type(9)
      animation-delay .4s
    span:nth-of-type(10)
      animation-delay .45s
    span:nth-of-type(11)
      animation-delay .5s
    span:nth-of-type(12)
      animation-delay .55s
    span:nth-of-type(13)
      animation-delay .6s
    span:nth-of-type(14)
      animation-delay .65s
    span:nth-of-type(15)
      animation-delay .7s
    span:nth-of-type(16)
      animation-delay .75s

  @keyframes piece
    0%
      transform rotate3d(1, 1, 1, 0deg)
    100%
      transform rotate3d(1, 1, 1, 359deg)

  @keyframes fall
    0%
      transform translate(0%, 0)
    25%
      transform translate(-200%, 25%)
    50%
      transform translate(0%, 50%)
    75%
      transform translate(200%, 75%)
    100%
      transform translate(0%, 100%)

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
      transform: scale(1)

  @keyframes ballDrop
    60%
      transform translate(0, 20px) rotate(-180deg) scale(.5);
    100%
      transform translate(0) rotate(0deg) scale(1)
      opacity 1

</style>
