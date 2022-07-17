<template>
  <button
    class="fab"
    @click="(event) => clickAction(event, rippleColor)"
    @click.capture.stop="$emit('click-action')"
    @mouseover="hoverIn"
    @mouseout="hoverOut"
    v-bind:style="{ backgroundColor: color}"
  >
    <span class="icon-container">
      <i class="material-icons fab-icon">{{ icon }}</i>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import rippleEffect from '@/functions/ripple';

@Component({
  methods: {
    clickAction: (event, rippleColor) => {
      rippleEffect(event, rippleColor);
    },
  },
})
export default class FloatingActionButton extends Vue {
  @Prop() private icon!: string;

  @Prop() private rippleColor!: string;

  @Prop() private hoverColor!: string;

  @Prop() private backgroundColor!: string;

  private color = 'transparent';

  mounted() {
    this.color = this.backgroundColor;
  }

  hoverIn() {
    this.color = this.hoverColor;
  }

  hoverOut() {
    this.color = this.backgroundColor;
  }
}
</script>

<style lang="stylus" scoped>
  .fab
    /*--- style ---*/
    margin 8px
    width 56px
    height 56px
    padding 0
    border 0
    cursor pointer
    outline none
    overflow hidden
    user-select none
    text-decoration none
    font-size 0.875em
    box-sizing border-box
    min-width 0px
    min-height 36px
    transition background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
    box-shadow 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12)
    font-weight 500
    line-height 1.5
    border-radius 50%
    letter-spacing 0.02857em
    text-transform uppercase
    z-index 500
    /*--- end ---*/
    /*--- layout ---*/
    display inline-flex
    align-items center
    vertical-align middle
    justify-content center
    /*--- end *---*/
    /*--- position ---*/
    position fixed
    bottom 30px
    right 5px
    /*--- end ---*/
    .icon-container
      width 100%
      display inherit
      align-items inherit
      justify-content inherit
    .fab-icon
      /*--- style ---*/
      width 1em
      height 1em
      overflow hidden
      font-size 24px
      user-select none
      flex-shrink 0
  /*--- end ---*/
</style>
