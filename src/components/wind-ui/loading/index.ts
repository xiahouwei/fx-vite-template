import { ElLoading } from 'element-plus'

interface FxLoadingInstance {
	close: Function
}

let loadingInstance:FxLoadingInstance | null = null

const show = function ():void {
	loadingInstance = ElLoading.service({ fullscreen: true, background: '#3031330f' })
}

const close = function ():void {
	if (loadingInstance) {
		loadingInstance.close()
	}
}

export default {
	show,
	close
}