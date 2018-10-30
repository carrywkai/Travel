<template>
  <div class="header">
    <div class="header-left">
      <i class="icon iconfont icon-fanhui"></i>
    </div>
    <div class="header-input">
      <i class="icon iconfont icon-sousuo"></i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <i class="icon iconfont icon-jiantouxia"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style  lang="stylus" scoped>
   @import "~styles/common.styl" //代码优化，在style引入文件要加 ~
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    background: $travelColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .icon-fanhui
        font-size .4rem
        margin-left .2rem
     .header-input
       flex:1
       height: .62rem
       line-height: .62rem
       margin-top .12rem
       margin-left .2rem
       padding-left .2rem
       background: #ffffff
       border-radius .1rem
       color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
</style>
