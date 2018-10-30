<template>
  <div>
    <div class="hot-recommend">热门推荐</div>
    <ul>
      <li class="recommend-box" v-for="item of list" :key="item.id">
        <img class="recommend-img" :src="item.imgUrl">
        <div class="recommend-info">
           <p class="title">{{ item.title }}</p>
           <p class="text">{{ item.text }}</p>
           <button class="btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl" //代码优化，在style引入文件要加 ~
  .hot-recommend
    padding-left .3rem
    font-size .3rem
    height: .6rem
    line-height .6rem
    background #eee
  .recommend-box
    display: flex
    height: 1.9rem
    overflow hidden
    border: .01rem solid #ccc
    .recommend-img
      height: 1.7rem
      width: 1.7rem
      margin: .1rem
    .recommend-info
      flex:1
      min-width: 0 // 出现省略点
      .title
        ellipse()
        font-size .4rem
        margin .1rem 0
      .text
        ellipse()
        font-size .3rem
        color: #ccc
        margin .1rem 0
      .btn
        background skyblue
        border-radius .08rem
        color: #fff

</style>
