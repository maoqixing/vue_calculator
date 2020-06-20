import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		count:0//初始化数据
  },
  mutations: {//同步
		INCREMENT(state){//加方法
			state.count++;
		},
		DECREMENT(state){//减方法
			state.count--;
		}
  },
  actions: {//异步
  },
  modules: {
  }
})
