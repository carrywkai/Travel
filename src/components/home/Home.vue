<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="imgList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>s
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeSwiper from './Swiper'
import HomeIcon from './Icon'
import HomeRecommend from './HomeRecommend'
import axios from 'axios'
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
      imgList: [],
      iconList: [],
      recommendList: []
    }
  },
  methods: {
    requestData () {
      axios.get('../../../static/index.json')
        .then(res => {
          // console.log(res.data.data.city)
          res = res.data
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
