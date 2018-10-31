import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './components/store/index'
// 引入重置样式
import 'styles/reset.css'
// 在移动端存在 1px像素问题
import 'styles/border.css'
// 在移动端的点击事件存在 300毫秒的延迟，影响用户体验
// 借用fastclick库来解决: npm install fastcliak --save
import fastClick from 'fastclick'
// 引入字体图标
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
