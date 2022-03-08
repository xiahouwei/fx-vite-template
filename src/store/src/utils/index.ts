import utils from '@/js/utils'

const log = utils.fxDebug('fxVuex')
const normalizationKey = function (key:string):string {
	return `${window.location.host}__${key}`
}
const getLocalStorage = function <T>(lname:string, defaultValue:T,  validity = 0):T|string {
	lname = normalizationKey(lname)
	if (validity) {
		return getLocalStorageTimeStamp(lname, validity) || defaultValue
	} else {
		return window.localStorage[lname] || defaultValue
	}
}
const getLocalStorageNumber = function <T>(lname:string, defaultValue:T):T|number {
	lname = normalizationKey(lname)
	return parseFloat(window.localStorage[lname]) || defaultValue
}
const getLocalStorageBoolean = function <T>(lname:string, defaultValue:T):T|boolean {
	lname = normalizationKey(lname)
	if (window.localStorage[lname] === '' || window.localStorage[lname] === undefined) {
		return defaultValue
	} else {
		return window.localStorage[lname] === 'true'
	}
}
const getLocalStorageJson = function <T>(lname:string, defaultValue:T):T|object|undefined {
	lname = normalizationKey(lname)
	return utils.JSONparse(window.localStorage[lname]) || defaultValue
}
const setLocalStorage = function <T>(key:string, val:T):void {
	key = normalizationKey(key)
	if (utils.toRawType(val) === 'Object' || utils.toRawType(val) === 'Array') {
		window.localStorage.setItem(key, JSON.stringify(val))
	} else {
		const _val = `${val}`
		window.localStorage.setItem(key, _val)
	}
}
const setLocalStorageTimeStamp = function <T>(key:string, val:T):void {
	key = normalizationKey(key)
	const time = new Date().getTime()
	let _val = ''
	if (utils.toRawType(val) === 'Object' || utils.toRawType(val) === 'Array') {
		_val = JSON.stringify(val)
	}
	window.localStorage.setItem(key, `fxVal=${_val}&fxTimeStamp=${time}`)
}
const getLocalStorageTimeStamp = function (key:string, validity = 0):string {
	key = normalizationKey(key)
	const currentTime = new Date().getTime()
	const valObj = parseTimeStampValue(window.localStorage[key])
	const time = valObj.fxTimeStamp || 0
	const interval = utils.ms2d(currentTime - time)
	const _val = valObj.fxVal || ''
	if (!validity || validity > interval) {
		return _val
	} else {
		return ''
	}
}
const parseTimeStampValue = function (val:string) {
	if (!val || !/^fxVal=/.test(val)) {
		return {}
	}
	try {
		const [valPair, timeStampPair] = val.split('&')
		const fxVal = valPair.split('=')[1]
		const fxTimeStamp = timeStampPair.split('=')[1]
		return {
			fxVal,
			fxTimeStamp: Number(fxTimeStamp)
		}
	} catch (error) {
		log('时间戳解析失败, 返回空值')
		return {}
	}
}
export {
	getLocalStorage,
	getLocalStorageNumber,
	getLocalStorageBoolean,
	getLocalStorageJson,
	setLocalStorage,
	setLocalStorageTimeStamp,
	getLocalStorageTimeStamp
}
