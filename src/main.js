import Vue from 'vue'
import App from './App'
import router from './router'
// 引入重置样式
import 'styles/reset.css'
// 在移动端存在 1px像素问题
import 'styles/border.css'
// 在移动端的点击事件存在 300毫秒的延迟，影响用户体验
// 借用fastclick库来解决: npm install fastcliak --save
import fastClick from 'fastclick'
// 引入字体图标
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
