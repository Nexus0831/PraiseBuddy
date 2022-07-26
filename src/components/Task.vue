<template>
  <div class="task" :class="checked ? 'checked-task' : 'non-checked-task'" >
    <div class="task-checkbox-container">
      <input type="checkbox" :id="keyNumber"/>
      <label :for="keyNumber" @click="checkedAction"></label>
    </div>
    <div class="task-detail-container">
      <div class="task-title" :class="{'checked-text': checked}">
        {{ title }}
      </div>
      <div class="task-term" :class="{'checked-text': checked}">
        期限: {{ term }}
      </div>
      <div class="task-body" :class="{'checked-text': checked}">
        {{ memo }}
      </div>
      <div class="task-menu">
        <MaterialIcon
          icon="edit"
          style="color: #303030"
          rippleColor="rgba(0, 0, 0, 0.5)"
          hoverColor="rgba(0, 0, 0, 0.2)"
          size="30px"
          @click-action="editAction"
        />
        <MaterialIcon
          icon="delete"
          style="color: #B00020; margin-left: 8px"
          rippleColor="rgba(176, 0, 32, 0.5)"
          hoverColor="rgba(227, 51, 83, 0.2)"
          size="30px"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MaterialIcon from '@/components/MaterialIcon.vue';

@Component({
  components: {
    MaterialIcon,
  },
})
export default class Task extends Vue {
  @Prop() private keyNumber!: string;

  @Prop() private title!: string;

  @Prop() private memo!: string;

  @Prop() private term!: string;

  @Prop() private done!: boolean;

  checked = this.done;

  checkedAction() {
    this.checked = !this.checked;
  }

  editAction() {
    this.$emit('update-action', this.keyNumber);
  }
}
</script>

<style lang="stylus" scoped>
  .checked-task
    background-color #a480f2

  .non-checked-task
    background-color #F2CFBB

  .task
    width 100%
    height 150px
    display grid
    grid-template-columns 60px 1fr
    border-bottom 1px solid #BF4545
    transition all 0.2s

    .task-checkbox-container
      grid-column 1 / 2
      display flex
      align-items center
      justify-content center

      input[type="checkbox"]
        display none

      input[type="checkbox"] + label
        display block
        position relative
        font 14px/20px 'Open Sans', Arial, sans-serif
        color #fff
        cursor pointer
        -webkit-user-select none
        -moz-user-select none
        -ms-user-select none

      input[type="checkbox"] + label:last-child
        margin-bottom 0

      input[type="checkbox"] + label:before
        content ''
        display block
        width 30px
        height 30px
        border-radius 50%
        border 2px solid #303030
        opacity .6
        -webkit-transition all .12s, border-color .08s
        transition all .12s, border-color .08s

      input[type="checkbox"]:checked + label:before
        width 12px
        top -5px
        left 5px
        border-radius 0
        opacity 1
        border 3px solid #45BF45
        border-top-color transparent
        border-left-color transparent
        -webkit-transform rotate(45deg)
        transform rotate(45deg)

    .task-detail-container
      grid-column 2 / 3

      .task-title
        height 40px
        display flex
        align-items center
        font-weight 600
        font-size 20px
        color #BF4545

      .task-term
        height 20
        color rgba(191, 69, 69, 1)

      .task-body
        height 40px
        color rgba(191, 69, 69, 1)

      .task-menu
        height 35px
        display flex
        flex-direction row-reverse
        padding-right 16px
        gap 24px

      .checked-text
        color #F2CFBB
        text-decoration line-through
</style>
