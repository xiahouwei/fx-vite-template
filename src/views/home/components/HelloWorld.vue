<template>
	<h1 class="msg ">{{ msg }}</h1>
	<div class="img"></div>
	<el-button type="primary" @click="onCountAddClick">count++</el-button>
	<div>count is: {{ count }}</div>
	<el-button type="primary" @click="onApiClick">测试请求</el-button>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { getFxInstance, FxInstance } from '@/js/instance'
import { useStore } from 'vuex'
export default defineComponent({
	name: 'helloWorld',
	props: {
		msg: String
	},
	setup () {
		const fxInstance = getFxInstance()
		const store = useStore()
		const count = ref(0)
		const onApiClick = function () {
			(fxInstance as FxInstance).$fxRequestGet({
				url: '/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a 0b2bdeda43b5688921839c8ecb20399b'
			}).then((res) => {
				(fxInstance as FxInstance).$fxMessage.success('请求成功')
				console.log(res)
			}).catch(error => {
				(fxInstance as FxInstance).$fxMessage.error(error.msg)
			})
		}
		const onCountAddClick = function () {
			count.value++
		}
		onMounted(() => {
			store.commit('SET_LOGINER', {
				token: '123'
			})
		})
		return {
			count,
			onApiClick,
			onCountAddClick
		}
	}
})
</script>
<style lang="scss" scope>
.msg {
	color: red;
}
.img {
  width:100px;
  height: 100px;
  background-image: url('$images/img/image.png');
  background-size: 100%;
}
</style>
