import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '南京'
  },
  // actions: { // 仓库接受组件改变的数据
  //   changeCity (ctx, city) {
  //     // console.log(city)
  //     // 调用mutations里面的changeCityMutation函数来改变state的值，通过commit
  //     ctx.commit('changeCityMutation', city)
  //   }
  // },
  mutations: { // 改变state里面的数据值的
    changeCityMutation (state, city) {
      state.city = city
      // 使用localStorage来记录数据
      localStorage.city = city
    }
  }
})
