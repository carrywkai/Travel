<template>
  <div>
    <div class="hot-recommend">热门推荐</div>
    <ul>
      <li class="recommend-box" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
          title: '南京中山陵',
          text: '藏经楼又名孙中山纪念馆，位于中山陵与灵谷寺之间的茫茫林海中。此楼专为收藏孙中山的物品而建，是这位国父人生的缩影。'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
          title: '南京中山陵',
          text: '藏经楼又名孙中山纪念馆，位于中山陵与灵谷寺之间的茫茫林海中。此楼专为收藏孙中山的物品而建，是这位国父人生的缩影。'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
          title: '南京中山陵',
          text: '藏经楼又名孙中山纪念馆，位于中山陵与灵谷寺之间的茫茫林海中。此楼专为收藏孙中山的物品而建，是这位国父人生的缩影。'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
          title: '南京中山陵',
          text: '藏经楼又名孙中山纪念馆，位于中山陵与灵谷寺之间的茫茫林海中。此楼专为收藏孙中山的物品而建，是这位国父人生的缩影。'
        }
      ]
    }
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
