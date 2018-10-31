<template>
  <div ref="wrapper" style="height: 100px;">
    <div>
      <section class="area">
        <div class="area-city">当前城市</div>
        <ul class="now-city-box">
          <li class="now-city">南京</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">热门城市</div>
        <ul class="hot-city-box">
          <li class="hot-city">南京</li>
          <li class="hot-city">北京</li>
          <li class="hot-city">上海</li>
          <li class="hot-city">广州</li>
          <li class="hot-city">深圳</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">字母表</div>
        <ul class="area-alphabet-box">
          <li class="alphabet">A</li>
          <li class="alphabet">A</li>
          <li class="alphabet">A</li>
          <li class="alphabet">A</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">A</div>
        <ul class="classify-city-box">
          <li class="classify-city">阿克苏阿克苏阿克苏阿克苏阿克苏阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">A</div>
        <ul class="classify-city-box">
          <li class="classify-city">阿克苏阿克苏阿克苏阿克苏阿克苏阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">A</div>
        <ul class="classify-city-box">
          <li class="classify-city">阿克苏阿克苏阿克苏阿克苏阿克苏阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">A</div>
        <ul class="classify-city-box">
          <li class="classify-city">阿克苏阿克苏阿克苏阿克苏阿克苏阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
          <li class="classify-city">阿克苏</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  @import "~styles/mixins.styl"
  .area
    overflow hidden
    .area-city
      height: .7rem
      line-height .7rem
      background: #eee
      font-size .3rem
      padding-left: .2rem
    .now-city-box
      width: 100%
      .now-city
        width: 33%
        height: .8rem
        line-height .8rem
        text-align center
        color: $travelColor
    .hot-city-box
      width: 100%
      .hot-city
        float: left
        width: 33%
        height: .8rem
        line-height .8rem
        text-align center
        border-right .02rem solid #eee
        border-bottom .02rem solid #eee
    .classify-city-box
      width: 100%
      .classify-city
        float: left
        width: 24.7%
        height: .8rem
        line-height .8rem
        text-align center
        font-size .3rem
        border-right .02rem solid #eee
        border-bottom .02rem solid #eee
        ellipse()
    .area-alphabet-box
      width: 100%
      .alphabet
        float: left
        width: 24.7%
        height: .8rem
        line-height .8rem
        text-align center
        font-size .3rem
        border-right .02rem solid #eee
        border-bottom .02rem solid #eee
        ellipse()

</style>
