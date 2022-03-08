<template>
	<img alt="Vue logo" src="@/assets/images/img/logo.png" />
	<HelloWorld :msg="msg" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/views/home/components/HelloWorld.vue'
export default defineComponent({
	name: 'appHome',
	components: {
		HelloWorld
	},
	setup () {
		const msg = ref('Vite + Vue3 + ts + elementUiPlus + Vue-router + vuex + Sass')
		return {
			msg
		}
	}
})
</script>