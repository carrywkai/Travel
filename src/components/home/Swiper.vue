<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in imgList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [
        {
          id: '001',
          imgUrl: '//img1.qunarzz.com/vc/c4/af/5c/7b5c474b2d55284477bcc775cc.png'
        },
        {
          id: '002',
          imgUrl: '//img1.qunarzz.com/vc/2f/8e/51/cb4d31b360c836f7d1bbe83c13.jpg'
        },
        {
          id: '003',
          imgUrl: '//img1.qunarzz.com/vc/a5/e0/64/c6bd8680fb67247db15df6057b.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper-img
    width:100%

</style>
