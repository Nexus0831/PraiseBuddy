<template>
  <div id="counter-dialog-form" @click.self="$emit('dialog-close')">
    <div class="surface">
      <div class="dialog-form-title">
        Todo
      </div>
      <div class="dialog-form-title error" v-if="!validate">
        Memo以外は必ず入力してください
      </div>
      <div class="dialog-form-input">
        <MaterialInput
          idName="Title"
          labelText="Title"
          :value="titleValue"
          @change-action="titleChangeAction"
        />
      </div>
      <div class="dialog-form-input">
        <MaterialInput
          idName="Memo"
          labelText="Memo"
          :value="memoValue"
          @change-action="memoChangeAction"
        />
      </div>
      <div class="dialog-form-input">
        <input
          id="todo-term"
          class="term"
          type="date"
          v-model="term"
          @change="termChangeAction(term)"
          :min="new Date().toISOString().split('T')[0]"
          onkeydown="return false"
        >
      </div>
      <div class="button-container">
        <Button
          buttonText="CANCEL"
          style="color: #424242"
          rippleColor="rgba(0, 0, 0, 0.5)"
          hoverColor="rgba(0, 0, 0, 0.08)"
          @click-action="$emit('dialog-close')"
        />
        <Button
          buttonText="SUBMIT"
          style="color: #BF4545"
          rippleColor="rgba(191, 69, 69, 0.5)"
          hoverColor="rgba(191, 69, 69, 0.2)"
          @click-action="$emit('submit-action')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import MaterialInput from '@/components/MaterialInput.vue';
import Button from '@/components/Button.vue';

// import { mapState } from 'vuex';
@Component({
  components: {
    MaterialInput,
    Button,
  },
})
export default class CounterDialogForm extends Vue {
  @Prop() private formTitle!: string;

  @Prop() private validMessage!: string;

  @Prop() private titleValue!: string;

  @Prop() private memoValue!: string;

  @Prop() private termValue!: string;

  @Prop() private validate!: boolean;

  term = '';

  mounted() {
    if (this.termValue !== '') {
      this.term = this.termValue;
    }
  }

  titleChangeAction(title: string) {
    this.$store.commit('SET_TODO_CREATE_FIELDS_TITLE', title);
  }

  memoChangeAction(memo: string) {
    this.$store.commit('SET_TODO_CREATE_FIELDS_MEMO', memo);
  }

  termChangeAction(term: string) {
    this.$store.commit('SET_TODO_CREATE_FIELDS_TERM', term);
  }
}
</script>

<style lang="stylus" scoped>
  #counter-dialog-form
    /*--- style ---*/
    position fixed
    left 0
    top 0
    background-color rgba(0, 0, 0, 0.3)
    width 100%
    height calc(100vh + 20px)
    z-index 99999
    backdrop-filter blur(6px)
    /*--- end ---*/
    /*--- layout ---*/
    display flex
    justify-content center
    align-items center
    /*--- end ---*/
    &:hover
      cursor default
    .surface
      /*--- style ---*/
      background-color #F2CFBB
      max-height: calc(100% - 96px);
      width 80%
      max-width 600px
      box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
      border-radius 4px
      margin 48px
      position relative
      overflow-y auto
      /*--- end --- */
      /*--- layout ---*/
      display flex
      flex-direction column
    /*--- end ---*/
    .dialog-form-title
      /*--- style ---*/
      font-size 1.25rem
      font-weight 500
      letter-spacing: 0.0075em;
      line-height 1.6
      margin 0
      padding 24px 24px 20px
      text-align center
      color #BF4545
    /*--- end ---*/
    .error
      /*--- style ---*/
      color #B00020
    /*--- end ---*/
    .dialog-form-input
      /*--- style ---*/
      padding 0 24px 24px
    /*--- end ---*/
    .color-list
      width 100%
    .color-value-text
      font-size 1rem
      line-height 1
      padding 0 24px 12px
    .color-list-container
      padding 0 24px 24px
      display grid
      grid-auto-flow column
      grid-template-rows: repeat(12, 1fr);
      grid-template-columns: repeat(17, 1fr);
    .color-box
      width 100%
      padding-top 100%
      position relative
      transition all 0.2s
      &:hover
        cursor pointer
        transform scale(0.8, 0.8)
    .color-contents
      top 0
      bottom 0
      left 0
      right 0
      position absolute
      width 100%
    .color-selected-contents
      top 0
      bottom 0
      left 0
      right 0
      position absolute
      width 100%
      visibility hidden
    .button-container
      /*--- style ---*/
      margin 8px 12px
      /*--- end ---*/
      /*--- layout ---*/
      display flex
      align-items center
      justify-content flex-end
      /*--- end ---*/
    .term
      color #BF4545
      background-color transparent
      border none
</style>
