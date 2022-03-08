// new Data 解决ios识别问题 by shw
const newData = function (date:string): Date {
	return date ? new Date(date.replace(/-/g, '/')) : new Date()
}
// 获取年月日小时分钟秒  by shw
const setDateTime = function (date = new Date(), formatter?:string|Function): string {
	const pushZero = (val:number) => {
		return val < 10 ? '0' + val : val
	}
	const y = date.getFullYear()
	const m = pushZero(date.getMonth() + 1)
	const d = pushZero(date.getDate())
	const myH = pushZero(date.getHours())
	const myM = pushZero(date.getMinutes())
	const myS = pushZero(date.getSeconds())
	if (typeof formatter === 'function') {
		return formatter(y, m, d, myH, myM, myS)
	}
	switch (formatter) {
	case '年月日':
		return `${y}年${m}月${d}日 ${myH}:${myM}:${myS}`
	case '年月日时分':
		return `${y}年${m}月${d}日 ${myH}:${myM}`
	case '时分':
		return `${y}-${m}-${d} ${myH}:${myM}`
	default:
		return `${y}-${m}-${d} ${myH}:${myM}:${myS}`
	}
}

// 毫秒转化分钟
const ms2m = function (ms:number):number {
	return Math.floor(ms / 1000 / 60)
}
// 毫秒转天
const ms2d = function (ms:number):number {
	return ms / 1000 / 60 / 60 / 24
}
// 小时转毫秒
const h2ms = function (h:number):number {
	return Math.floor(h * 60 * 60 * 1000)
}
// 天转毫秒
const d2ms = function (d:number):number {
	return Math.floor(d * 24 * 60 * 60 * 1000)
}

export default {
	newData,
	setDateTime,
	ms2m,
	ms2d,
	h2ms,
	d2ms
}
