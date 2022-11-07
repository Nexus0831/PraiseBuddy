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
    <div
      class="scene"
      :class="[
        { 'morning-background': 6 <= nowHour && nowHour <= 9 },
        { 'noon-background': 10 <= nowHour && nowHour <= 16 },
        { 'sunset-background': 17 <= nowHour && nowHour <= 19 },
        { 'night-background': nowHour <= 5 || 20 <= nowHour },
      ]"
    >
      <div class="mountain-1"></div>
      <div class="mountain-2"></div>
      <div class="sun-container">
        <div
          class="sun"
          :class="[
            { morning: 6 <= nowHour && nowHour <= 9 },
            { noon: 10 <= nowHour && nowHour <= 16},
            { sunset: 17 <= nowHour && nowHour <= 19},
          ]"
          v-if="6 <= nowHour && nowHour <= 19"
        >
        </div>
        <div
          class="moon"
          v-if="nowHour <= 5 || 20 <= nowHour"
        >
        </div>
        <div class="cloud one"></div>
        <div class="cloud two"></div>
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

  private nowHour = 0;

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
    this.nowHour = hour;
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

    .noon-background
      background-color #B2EBF2

    .sunset-background
      background-color #FB8C00

    .night-background
      background-color #1A237E

    .scene
      grid-row 4 / 5
      display grid
      grid-template-columns 50% 50%
      grid-template-rows 50% 50%
      overflow hidden

      .mountain-1
        grid-column 1 / 2
        grid-row 2 / 3
        background-color #4CAF50
        margin-right -20px
        border-radius 40% 60% 0 0
        z-index 4000
        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
          0px 24px 38px 3px rgba(0, 0, 0, 0.14),
          0px 9px 46px 8px rgba(0, 0, 0, 0.12);

      .mountain-2
        grid-column 2 / 3
        grid-row 1 / 3
        background-color #4CAF50
        border-radius 90% 0 0 0
        z-index 5000
        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
          0px 24px 38px 3px rgba(0, 0, 0, 0.14),
          0px 9px 46px 8px rgba(0, 0, 0, 0.12);

      .sun-container
        grid-column 1 / 3
        grid-row 1 / 2
        display flex
        align-items flex-end

        .sun
          width 128px
          height 128px
          border-radius 50%
          z-index 2000
          box-shadow 9px 11px 20px -10px rgba(0,0,0,0.6)

        .moon
          width 100px
          height 100px
          border-radius 50%
          box-shadow -26px 0px 0px 20px #FDD835;
          transform translate(100px, -100px) rotate(-160deg)
          filter drop-shadow(0 0 12px #FDD835)
          z-index 2000
          /*background-color #FDD835*/

        .morning
          background-color #FFF59D
          filter drop-shadow(0 0 24px #FFF59D)

        .noon
          background-color #FFF176
          filter drop-shadow(0 0 24px #FFF176)
          transform translate(150px, -90px)

        .sunset
          background-color #FDD835
          filter drop-shadow(0 0 12px #FDD835)
          transform translate(210px, 50px)

        .cloud
          width 204px
          height 64px
          background-color #ffffff
          border-radius 100px
          position relative

          &::before
            content ''
            position absolute
            top -35px
            left 25px
            width 70px
            height 70px
            background #ffffff
            border-radius 50%
            box-shadow 57px 0 0 19px #ffffff
        .one
          transform translate(-90px, -110px)
          z-index 1000
          box-shadow 8px 12px 18px -10px rgba(0,0,0,0.6)
          opacity .7
        .two
          transform translate(-90px, -50px)
          z-index 3000
          box-shadow 8px 12px 15px -7px rgba(0,0,0,0.4)
          opacity .9
</style>
