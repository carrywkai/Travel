<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeSwiper from './Swiper'
import HomeIcon from './Icon'
import HomeRecommend from './HomeRecommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  }
}
</script>

<style scoped>

</style>
