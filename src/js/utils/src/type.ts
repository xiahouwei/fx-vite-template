const _toString = Object.prototype.toString
// 类型检查  by shw
const toRawType = function <T>(value:T):string {
	return _toString.call(value).slice(8, -1)
}

// 判断是数组
const isArray = Array.isArray

// 判断是map
const isMap = <T>(val:T):boolean => toRawType(val) === 'Map'

// 判断是set
const isSet = <T>(val:T):boolean => toRawType(val) === 'Set'

// 判断是日期对象
const isDate = (val:Date):boolean => val instanceof Date

// 判断是function
const isFunction = (val:Function):boolean => typeof val === 'function'

// 判断是string
const isString = (val:string):boolean => typeof val === 'string'

// 判断是symbol
const isSymbol = (val:symbol):boolean => typeof val === 'symbol'

// 判断是Boolean
const isBoolean = (val:boolean):boolean => typeof val === 'boolean'

// 判断是对象
const isObject = (val:object):boolean => val !== null && typeof val === 'object'

// 判断是否为一个纯粹对象
const isPlainObject = (val:object):boolean => toRawType(val) === 'Object'

// 判断空对象 by shw
const isEmptyObj = function (obj:object):boolean {
	if (toRawType(obj) !== 'Object') {
		throw new Error('this is not object')
	}
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			return false
		}
	}
	return true
}
// JSON解析 by shw
const JSONparse = function (jsonStr:string, type?:string):object|undefined {
	try {
		const obj = JSON.parse(jsonStr)
		if (type === 'object' && typeof obj !== 'object') {
			return {}
		}
		return obj
	} catch (error) {
		if (type === 'object') {
			return {}
		}
		return undefined
	}
}
// 判断undefined/null by shw
const isDef = function <T>(value:T):boolean {
	return value !== undefined && value !== null
}

export default {
	toRawType,
	isArray,
	isMap,
	isSet,
	isDate,
	isFunction,
	isString,
	isSymbol,
	isBoolean,
	isObject,
	isPlainObject,
	isEmptyObj,
	JSONparse,
	isDef
}
