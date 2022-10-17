<template>
  <div class="root">
    <div class="message-animation-container">
      <h1 class="message-animation">
        Congratulations!
      </h1>
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
    font-size 56px
    font-weight 500
    color white
    animation pic linear infinite
    animation-duration 2s

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

  @keyframes pic
    0%
      transform scale(1)
    25%
      transform scale(1.5)
    50%
      transform scale(1)
    75%
      transform scale(1.5)
    100%
      transform scale(1)

</style>
