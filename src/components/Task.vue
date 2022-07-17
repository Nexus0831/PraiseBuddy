<template>
  <div id="task">
    <div class="task-checkbox-container">
      <input type="checkbox" id="task-checkbox" class="task-checkbox" />
      <label for="task-checkbox"></label>
    </div>
    <div class="task-detail-container">
      <div class="task-title">
        ここにタスクのタイトル
      </div>
      <div class="task-term">
        期限: 2022/7/7
      </div>
      <div class="task-body">
        ここはタスクの詳細概要が表示されます
      </div>
      <div class="task-menu">
        <MaterialIcon
          icon="edit"
          style="color: #303030"
          rippleColor="rgba(0, 0, 0, 0.5)"
          hoverColor="rgba(0, 0, 0, 0.2)"
          size="30px"
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
import { Component, Vue } from 'vue-property-decorator';
import MaterialIcon from '@/components/MaterialIcon.vue';

@Component({
  components: {
    MaterialIcon,
  },
})
export default class Task extends Vue {}
</script>

<style lang="stylus" scoped>
  #task
    width 100%
    height 150px
    background-color #F2CFBB
    display grid
    grid-template-columns 60px 1fr

    .task-checkbox-container
      grid-column 1 / 2
      display flex
      align-items center
      justify-content center

      .task-checkbox
        display none

      .task-checkbox + label
        display block
        position relative
        font 14px/20px 'Open Sans', Arial, sans-serif
        color #ddd
        cursor pointer
        -webkit-user-select none
        -moz-user-select none
        -ms-user-select none

      .task-checkbox + label:last-child
        margin-bottom 0

      .task-checkbox + label:before
        content ''
        display block
        width 24px
        height 24px
        border-radius 50%
        border 1px solid #BF4545
        opacity .6
        -webkit-transition all .12s, border-color .08s
        transition all .12s, border-color .08s

      .task-checkbox:checked + label:before
        width 10px
        top -5px
        left 5px
        border-radius 0
        opacity 1
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
        font-size 24px
        color #303030

      .task-term
        height 20
        color rgba(0, 0, 0, 0.6)

      .task-body
        height 40px
        color rgba(0, 0, 0, 0.6)

      .task-menu
        height 35px
        display flex
        flex-direction row-reverse
        padding-right 16px
        gap 24px
</style>
