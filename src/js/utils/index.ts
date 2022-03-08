import { App } from 'vue'
import utilsDate from './src/date'
import { fxDebug } from './src/debug'
import utilsType from './src/type'

export interface FxUtils {
	newData: Function
	setDateTime: Function
}

const utils = {
	fxDebug,
	...utilsDate,
	...utilsType
}

const install = (app: App): void => {
	app.config.globalProperties.$fxUtils = utils
}

export default {
	install,
	...utils
}
