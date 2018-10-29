<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon-box" v-for="item of page" :key="item.id">
            <img class="icon-img" :src="item.iconUrl">
            <p class="icon-text">{{ item.iconText }}</p>
          </div>
        </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      iconList: [
        {
          id: '0001',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          iconText: '旅游景点旅游景点旅游景点旅游景点'
        },
        {
          id: '0002',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          iconText: '北京必游'
        },
        {
          id: '0003',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          iconText: '一日游'
        },
        {
          id: '0004',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          iconText: '文化古迹'
        },
        {
          id: '0005',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          iconText: '动植物园'
        },
        {
          id: '0006',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          iconText: '故宫'
        },
        {
          id: '0007',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          iconText: '野生动物园'
        },
        {
          id: '0008',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          iconText: '泡温泉'
        },
        {
          id: '0009',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          iconText: '全部玩乐'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl" //代码优化，在style引入文件要加 ~
  .wrapper
    width: 100%
    margin: .1rem
    .icon-box
      width: 25%
      float: left
      text-align: center
      margin-bottom: .1rem
      .icon-img
        width: 1.1rem
        height: 1.1rem
      .icon-text
        ellipse()
        /*overflow: hidden*/
        /*white-space: nowrap*/
        /*text-overflow: ellipsis*/

</style>
