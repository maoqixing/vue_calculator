import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		count:0//初始化数据
  },
	//更新状态的变化
  mutations: {//处理同步 如果是同步的操作可以不经过actions 再到mutations 从而改变state里的count，就直接mutations从而改变state里的count，
		INCREMENT(state){//加方法
			state.count++;
		},
		DECREMENT(state){//减方法
			state.count--;
		}
  },
  actions: {//处理异步  如果是异步的操作必须经过actions 再到mutations 再改变state里的count ，因为actions可以将异步的转为同步再到mutations，而异步不能在mutations使用，但是同步的操作也可以经过action，只是多了点操作
			increment({commit}){
				commit('INCREMENT')//转同步
			},
			decrement({commit}){
				commit('INCREMENT')//转同步
			}
  },
  modules: {
  }
})
