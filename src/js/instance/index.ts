import { getCurrentInstance, ComponentInternalInstance } from 'vue'
import { AxiosInstance }  from 'axios'
import { FxUtils } from '@/js/utils'

interface FxMessage {
	success: Function
	warning: Function
	error: Function
}

export interface FxInstance {
	$fxMessage: FxMessage
	$fxRequestGet: AxiosInstance
	$fxRequestPut: AxiosInstance
	$fxRequestPost: AxiosInstance
	$fxRequestDel: AxiosInstance
	$fxUtils: FxUtils
}

export const getFxInstance = function ():unknown {
	const { appContext } = getCurrentInstance() as ComponentInternalInstance
	return appContext.config.globalProperties
}