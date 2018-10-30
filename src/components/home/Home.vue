<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="imgList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeSwiper from './Swiper'
import HomeIcon from './Icon'
import HomeRecommend from './HomeRecommend'
import axiox from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  },
  data () {
    return {
      city: '北京',
      imgList: [],
      iconList: [],
      recommendList: []
    }
  },
  methods: {
    requestData () {
      axiox.get('../../../static/index.json')
        .then(res => {
          // console.log(res.data.data.city)
          res = res.data
          this.city = res.data.city
          this.imgList = res.data.imgList
          this.iconList = res.data.iconList
          this.recommendList = res.data.recommendList
        })
    }
  },
  mounted () {
    this.requestData()
  }
}
</script>

<style scoped>

</style>
