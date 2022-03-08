
import { App } from 'vue'
import $Message from './message'
import $Loading from './loading'

const install = (app: App): void => {
	app.config.globalProperties.$fxMessage = $Message
}

export default {
	install,
	$fxMessage: $Message,
	$fxLoading: $Loading
}
