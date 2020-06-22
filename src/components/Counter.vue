<template>
	<div>
				<p>点击了{{count}}次</p>
		<button @click="increment">增加+1</button>
		<button @click="decrement">减-1</button>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		name:"Counter",
		computed:{//计算属性  多个行为操作一个数据
			count(){
				return this.$store.state.count
			}
		},
		methods:{
			// 第一种方法
			// ...mapMutations(['INCREMENT','DECREMENT']),
			// increment(){
			// 	this.INCREMENT();
			// },
			// decrement(){
			// 	this.DECREMENT();
			// },
			
			// 第二种方法
		
			// increment(){
			// 	this.$store.commit('INCREMENT')
			// },
			// decrement(){
			// 	this.$store.commit('DECREMENT')
			// },
			
				// 第三种方法
				 increment(){
				 	this.$store.dispatch('increment')
				},
				decrement(){
					this.$store.dispatch('decrement')
				},
		}
	}
</script>

<style scoped="scoped"></style>
