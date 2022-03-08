import { createApp } from 'vue'
import service from '@/js/service'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import windUi from '@/components/wind-ui'
import utils from '@/js/utils'
import App from './App.vue'
import store from './store'
import router from './router'
import 'element-plus/dist/index.css'
import '@/assets/styles/main.scss'

createApp(App)
	.use(ElementPlus, {
		locale: zhCn
	})
	.use(windUi)
	.use(utils)
	.use(store)
	.use(router)
	.use(service)
	.mount('#app')
