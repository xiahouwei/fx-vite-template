import { App } from 'vue'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError }  from 'axios'
import { requestConfig, AxiosCreateConfig } from './config'
import windUi from '@/components/wind-ui'
import vuex from '@/store'

interface RequestParams {
	url: string,
	data?: object,
	successToast?: boolean
}

export const fxLoading = {
	fxIsLoading: false
}
let loadingQueue = 0
const showLoading = (loadingFlag = true) => {
	loadingQueue++
	if (!loadingFlag) {
		return false
	}
	windUi.$fxLoading.show()
	fxLoading.fxIsLoading = true
}
const hideLoading = () => {
	loadingQueue--
	if (loadingQueue === 0) {
		windUi.$fxLoading.close()
		fxLoading.fxIsLoading = false
	}
}

const successToast = function (message:string) {
	return new Promise(resolve => {
		windUi.$fxMessage.success(message).then(resolve)
	})
}

const errorToast = function (error: AxiosError) {
	return new Promise(resolve => {
		windUi.$fxMessage.error(error.message || 'has not error message').then(resolve)
	})
}

const config:AxiosCreateConfig = requestConfig

const service: AxiosInstance = axios.create(config)
service.defaults.headers.post['Content-Type'] = 'application/json'
service.interceptors.request.use(
	(config?: AxiosRequestConfig) => {
		if (config && config.headers) {
			config.headers.Authorization = vuex.getters.getToken
		}
		return config
	},
	(error:AxiosError) => {
		return Promise.reject(error)
	}
)
service.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response && response.data && response.data.result) {
			return response.data
		} else {
			return Promise.reject(response.data)
		}
	},
	(error) => {
		return Promise.reject(error.response.data)
	}
)

enum RequestMethod {
    get = 'get',
    post = 'post',
    put = 'put',
	delete = 'delete'
}

const $fxRequest = function (type:RequestMethod):Function {
	return function <T>(requestParams:RequestParams ):Promise<T> {
		return new Promise((resolve, reject) => {
			showLoading()
			service<T>({
				method: type,
				url: requestParams.url,
				data: requestParams.data || null
			}).then(res => {
				hideLoading()
				if (requestParams.successToast) {
					successToast(res.message)
				}
				resolve(res.data)
			}).catch(error => {
				hideLoading()
				errorToast(error).then(() => {
					reject(error)
				})
			})
		})
	}
}

export const $fxRequestGet = $fxRequest(RequestMethod.get)
export const $fxRequestPost = $fxRequest(RequestMethod.post)
export const $fxRequestPut = $fxRequest(RequestMethod.put)
export const $fxRequestDel = $fxRequest(RequestMethod.delete)

const install = (app: App): void => {
	app.config.globalProperties.$fxRequestGet = $fxRequestGet
	app.config.globalProperties.$fxRequestPut = $fxRequestPut
	app.config.globalProperties.$fxRequestPost = $fxRequestPost
	app.config.globalProperties.$fxRequestDel = $fxRequestDel
}

export default {
	install
}