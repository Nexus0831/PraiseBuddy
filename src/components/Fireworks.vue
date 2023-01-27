<template>
  <div id="fireworks">
    <template v-for="i of 6">
      <div
        class="c-firework"
        :key="i"
      >
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState([
      'isFireWorks',
    ]),
  },
})
export default class Fireworks extends Vue {
}
</script>

<style scoped lang="stylus">
#fireworks
  position absolute
  height 100%
  width 100%
  overflow hidden

  .c-firework,
  .c-firework::before,
  .c-firework::after
    content ""
    position absolute
    aspect-ratio 1
    top 50%
    left 50%
    background radial-gradient(circle, #FFF176 10px, #000000 0) 50% 00%,
    radial-gradient(circle, #FFF176 10px, #000000 0) 00% 50%,
    radial-gradient(circle, #FFF176 10px, #000000 0) 50% 99%,
    radial-gradient(circle, #FFEB3B 10px, #000000 0) 99% 50%,
    radial-gradient(circle, #FFEB3B 10px, #000000 0) 80% 90%,
    radial-gradient(circle, #FFEB3B 10px, #000000 0) 95% 90%,
    radial-gradient(circle, #FBC02D 10px, #000000 0) 10% 60%,
    radial-gradient(circle, #FBC02D 10px, #000000 0) 31% 80%,
    radial-gradient(circle, #FBC02D 10px, #000000 0) 80% 10%,
    radial-gradient(circle, #F57F17 10px, #000000 0) 90% 23%,
    radial-gradient(circle, #F57F17 10px, #000000 0) 45% 20%,
    radial-gradient(circle, #F57F17 10px, #000000 0) 13% 24%
    background-size 6px 6px
    background-repeat no-repeat
    transform translate(-50%, -50%)
    animation fireworks-animation 6s infinite

  .c-firework:before
    transform translate(-50%, -50%) rotate(25deg) !important

  .c-firework:after
    transform translate(-50%, -50%) rotate(-37deg) !important

  .c-firework:nth-of-type(2),
  .c-firework:nth-of-type(2)::before,
  .c-firework:nth-of-type(2)::after
    top 30%
    left 16%
    background radial-gradient(circle, #AB47BC 10px, #000000 0) 50% 00%,
      radial-gradient(circle, #AB47BC 10px, #000000 0) 00% 50%,
      radial-gradient(circle, #AB47BC 10px, #000000 0) 50% 99%,
      radial-gradient(circle, #9C27B0 10px, #000000 0) 99% 50%,
      radial-gradient(circle, #9C27B0 10px, #000000 0) 80% 90%,
      radial-gradient(circle, #9C27B0 10px, #000000 0) 95% 90%,
      radial-gradient(circle, #8E24AA 10px, #000000 0) 10% 60%,
      radial-gradient(circle, #8E24AA 10px, #000000 0) 31% 80%,
      radial-gradient(circle, #8E24AA 10px, #000000 0) 80% 10%,
      radial-gradient(circle, #6A1B9A 10px, #000000 0) 90% 23%,
      radial-gradient(circle, #6A1B9A 10px, #000000 0) 45% 20%,
      radial-gradient(circle, #6A1B9A 10px, #000000 0) 13% 24%
    background-size 6px 6px
    background-repeat no-repeat
    transform translate(-50%, -50%)
    animation-duration 3.8s

  .c-firework:nth-of-type(3),
  .c-firework:nth-of-type(3)::before,
  .c-firework:nth-of-type(3)::after
    top 10%
    left 72%
    background radial-gradient(circle, #64B5F6 10px, #000000 0) 50% 00%,
      radial-gradient(circle, #64B5F6 10px, #000000 0) 00% 50%,
      radial-gradient(circle, #64B5F6 10px, #000000 0) 50% 99%,
      radial-gradient(circle, #2196F3 10px, #000000 0) 99% 50%,
      radial-gradient(circle, #2196F3 10px, #000000 0) 80% 90%,
      radial-gradient(circle, #2196F3 10px, #000000 0) 95% 90%,
      radial-gradient(circle, #1976D2 10px, #000000 0) 10% 60%,
      radial-gradient(circle, #1976D2 10px, #000000 0) 31% 80%,
      radial-gradient(circle, #1976D2 10px, #000000 0) 80% 10%,
      radial-gradient(circle, #0D47A1 10px, #000000 0) 90% 23%,
      radial-gradient(circle, #0D47A1 10px, #000000 0) 45% 20%,
      radial-gradient(circle, #0D47A1 10px, #000000 0) 13% 24%
    background-size 6px 6px
    background-repeat no-repeat
    transform translate(-50%, -50%)
    animation-duration 4.2s

  .c-firework:nth-of-type(4),
  .c-firework:nth-of-type(4)::before,
  .c-firework:nth-of-type(4)::after
    top 28%
    left 32%
    background radial-gradient(circle, #81C784 10px, #000000 0) 50% 00%,
      radial-gradient(circle, #81C784 10px, #000000 0) 00% 50%,
      radial-gradient(circle, #81C784 10px, #000000 0) 50% 99%,
      radial-gradient(circle, #4CAF50 10px, #000000 0) 99% 50%,
      radial-gradient(circle, #4CAF50 10px, #000000 0) 80% 90%,
      radial-gradient(circle, #4CAF50 10px, #000000 0) 95% 90%,
      radial-gradient(circle, #388E3C 10px, #000000 0) 10% 60%,
      radial-gradient(circle, #388E3C 10px, #000000 0) 31% 80%,
      radial-gradient(circle, #388E3C 10px, #000000 0) 80% 10%,
      radial-gradient(circle, #1B5E20 10px, #000000 0) 90% 23%,
      radial-gradient(circle, #1B5E20 10px, #000000 0) 45% 20%,
      radial-gradient(circle, #1B5E20 10px, #000000 0) 13% 24%
    background-size 6px 6px
    background-repeat no-repeat
    transform translate(-50%, -50%)
    animation-duration 3.6s

  .c-firework:nth-of-type(5),
  .c-firework:nth-of-type(5)::before,
  .c-firework:nth-of-type(5)::after
    top 32%
    left 84%
    background radial-gradient(circle, #F06292 10px, #000000 0) 50% 00%,
      radial-gradient(circle, #F06292 10px, #000000 0) 00% 50%,
      radial-gradient(circle, #F06292 10px, #000000 0) 50% 99%,
      radial-gradient(circle, #E91E63 10px, #000000 0) 99% 50%,
      radial-gradient(circle, #E91E63 10px, #000000 0) 80% 90%,
      radial-gradient(circle, #E91E63 10px, #000000 0) 95% 90%,
      radial-gradient(circle, #C2185B 10px, #000000 0) 10% 60%,
      radial-gradient(circle, #C2185B 10px, #000000 0) 31% 80%,
      radial-gradient(circle, #C2185B 10px, #000000 0) 80% 10%,
      radial-gradient(circle, #880E4F 10px, #000000 0) 90% 23%,
      radial-gradient(circle, #880E4F 10px, #000000 0) 45% 20%,
      radial-gradient(circle, #880E4F 10px, #000000 0) 13% 24%
    background-size 6px 6px
    background-repeat no-repeat
    transform translate(-50%, -50%)
    animation-duration 4.4s

  .c-firework:nth-of-type(6),
  .c-firework:nth-of-type(6)::before,
  .c-firework:nth-of-type(6)::after
    top 38%
    left 40%
    background radial-gradient(circle, #FF8A65 10px, #000000 0) 50% 00%,
      radial-gradient(circle, #FF8A65 10px, #000000 0) 00% 50%,
      radial-gradient(circle, #FF8A65 10px, #000000 0) 50% 99%,
      radial-gradient(circle, #FF5722 10px, #000000 0) 99% 50%,
      radial-gradient(circle, #FF5722 10px, #000000 0) 80% 90%,
      radial-gradient(circle, #FF5722 10px, #000000 0) 95% 90%,
      radial-gradient(circle, #E64A19 10px, #000000 0) 10% 60%,
      radial-gradient(circle, #E64A19 10px, #000000 0) 31% 80%,
      radial-gradient(circle, #E64A19 10px, #000000 0) 80% 10%,
      radial-gradient(circle, #BF360C 10px, #000000 0) 90% 23%,
      radial-gradient(circle, #BF360C 10px, #000000 0) 45% 20%,
      radial-gradient(circle, #BF360C 10px, #000000 0) 13% 24%
    background-size 6px 6px
    background-repeat no-repeat
    transform translate(-50%, -50%)
    animation-duration 4.1s

@keyframes fireworks-animation
  0%
    transform translate(-50%, 90vh)
    width 6px
    opacity 1
  50%
    width 6px
    opacity 1
  100%
    width 700px
    opacity 0
</style>
