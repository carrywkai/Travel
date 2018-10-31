<template>
  <div ref="wrapper" style="height: 100px;">
    <div>
      <section class="area">
        <div class="area-city">当前城市</div>
        <ul class="now-city-box">
          <li class="now-city">南京</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">热门城市</div>
        <ul class="hot-city-box">
           <li class="hot-city" v-for="(item, index) of hotCity" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">字母表</div>
        <ul class="area-alphabet-box">
          <li class="alphabet" @click="handleLetterClick" v-for="item in alphabetList" :key="item">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">A</div>
        <ul class="classify-city-box">
          <li class="classify-city" v-for="(item, index) in cityA" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">B</div>
        <ul class="classify-city-box">
          <li class="classify-city" v-for="(item, index) in cityB" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">C</div>
        <ul class="classify-city-box">
          <li class="classify-city" v-for="(item, index) in cityC" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">D</div>
        <ul class="classify-city-box">
          <li class="classify-city" v-for="(item, index) in cityD" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">E</div>
        <ul class="classify-city-box">
          <li class="classify-city" v-for="(item, index) in cityE" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">F</div>
        <ul class="classify-city-box">
          <li class="classify-city" v-for="(item, index) in cityF" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">G</div>
        <ul class="classify-city-box">
          <li class="classify-city" v-for="(item, index) in cityG" :key="index">{{ item }}</li>
        </ul>
      </section>
      <section class="area">
        <div class="area-city">H</div>
        <ul class="classify-city-box">
          <li class="classify-city" v-for="(item, index) in cityH" :key="index">{{ item }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  data () {
    return {
      alphabetList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      hotCity: ['北京', '上海', '广州', '深圳', '南京', '杭州'],
      cityA: ['阿克苏', '阿里', '安庆', '安顺', '安阳', '澳门', '安康', '鞍山', '安阿拉善盟'],
      cityB: ['北京', '北海', '白山', '白沙', '宝鸡', '保定', '亳州'],
      cityC: ['重庆', '长安', '常州', '长春', '长沙'],
      cityD: ['大连', '丹阳', '丹东', '大庆', '东莞', '大兴安岭', '大同'],
      cityE: ['鄂尔多斯', '鄂州', '恩施'],
      cityF: ['佛山', '阜阳', '福州', '抚顺', '抚州'],
      cityG: ['广州', '贵阳', '桂林', '高雄', '赣州', '赣南'],
      cityH: ['杭州', '惠州', '合肥', '黄山', '葫芦岛', '哈密', '哈尔滨'],
      letter: ''
    }
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerHTML)
      this.letter = e.target.innerHTML
    }
  },
  watch: {
    letter () {
      console.log(this.letter)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  @import "~styles/mixins.styl"
  .area
    overflow hidden
    .area-city
      height: .7rem
      line-height .7rem
      background: #eee
      font-size .3rem
      padding-left: .2rem
    .now-city-box
      width: 100%
      .now-city
        width: 33%
        height: .8rem
        line-height .8rem
        text-align center
        color: $travelColor
    .hot-city-box
      width: 100%
      .hot-city
        float: left
        width: 33%
        height: .8rem
        line-height .8rem
        text-align center
        border-right .02rem solid #eee
        border-bottom .02rem solid #eee
    .classify-city-box
      width: 100%
      .classify-city
        float: left
        width: 24.7%
        height: .8rem
        line-height .8rem
        text-align center
        font-size .3rem
        border-right .02rem solid #eee
        border-bottom .02rem solid #eee
        ellipse()
    .area-alphabet-box
      width: 100%
      .alphabet
        float: left
        width: 24.7%
        height: .8rem
        line-height .8rem
        text-align center
        font-size .3rem
        border-right .02rem solid #eee
        border-bottom .02rem solid #eee
        ellipse()

</style>
