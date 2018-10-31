<template>
  <div class="city-option">
    <router-link to="/" class="icon iconfont icon-fanhui"></router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .city-option
    position relative
    height: .86rem
    line-height: .86rem
    text-align center
    background $travelColor
    color: #fff
    z-index 10000
    .icon-fanhui
      position absolute
      top 0
      left: .1rem
      color: #fff
</style>
