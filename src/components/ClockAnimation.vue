<template>
  <div class="clock-root">
    <div class="clock">
      <div class="day">
        {{ nowToDay }}
      </div>
      <div class="time">
        {{ nowTime }}
      </div>
    </div>
    <div class="scene morning-background">
      <div class="mountain-1"></div>
      <div class="mountain-2"></div>
      <div class="sun-container morning">
        <div class="sun"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ClockAnimation extends Vue {
  private nowToDay = '';

  private nowTime = '';

  showClock() {
    const d = new Date();

    // 年を取得
    const year = d.getFullYear();
    // 月を取得
    let month: string | number = d.getMonth() + 1;
    // 日を取得
    let date: string | number = d.getDate();
    // 曜日を取得
    const dayNum = d.getDay();
    const weekday = ['日', '月', '火', '水', '木', '金', '土'];
    const day = weekday[dayNum];
    // 時を取得
    let hour: string | number = d.getHours();
    // 分を取得
    let min: string | number = d.getMinutes();
    // 秒を取得
    let sec: string | number = d.getSeconds();

    // 1桁の場合は0を足して2桁に
    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    // 日付・時刻の文字列を作成
    this.nowToDay = `${year}/${month}/${date}(${day})`;
    this.nowTime = `${hour}:${min}:${sec}`;
  }

  mounted() {
    setInterval(this.showClock, 1000);
  }
}
</script>

<style lang="stylus" scoped>
  .clock-root
    width 100%
    height 100%
    display grid
    grid-template-rows 36px 168px 248px 1fr
    overflow hidden

    .clock
      padding-top 12px
      color #F2CFBB
      grid-row 2 / 3
      display flex
      justify-content center
      align-items center
      flex-direction column

      .day
        font-size 36px
        color #e91e63
      .time
        font-size 78px
        color #e91e63

    .morning-background
      background linear-gradient(#B2EBF2, #FFE082)

    .scene
      grid-row 4 / 5
      display grid
      grid-template-columns 50% 50%
      grid-template-rows 50% 50%

      .mountain-1
        grid-column 1 / 2
        grid-row 2 / 3
        background-color #4CAF50
        margin-right -20px
        border-radius 40% 60% 0 0
        z-index 4000
      .mountain-2
        grid-column 2 / 3
        grid-row 1 / 3
        background-color #4CAF50
        border-radius 90% 0 0 0
        z-index 5000

      .morning
        display flex
        align-items flex-end
        filter drop-shadow(0 0 24px #FFFF00)
      .sun-container
        grid-column 1 / 2
        grid-row 1 / 2

        .sun
          width 128px
          height 128px
          border-radius 50%
          background-color #FFEB3B
          z-index 3000
</style>
