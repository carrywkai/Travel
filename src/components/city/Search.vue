<template>
  <div class="city-search">
    <input class="search-input" type="text" placeholder="请输入城市名字或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .city-search
    height:.72rem
    background: $travelColor
    padding: .1rem
    .search-input
      height: .64rem
      width: 100%
      line-height .64rem
      border-radius .1rem
      box-sizing border-box
      padding: 0 .1rem
      text-align center
      color: #666
</style>
