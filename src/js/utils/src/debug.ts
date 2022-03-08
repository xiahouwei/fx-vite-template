/**
 * @name debug
 * @desc 警告输出
 * @author shw
 * @date 2021/10/08
 * @param {String} moduleName 模块名称
 */
const APP_NAME = 'FX-WARN'
export const fxDebug = function (moduleName:string) {
	return function (message:string):void {
		console.warn(`${APP_NAME}-${moduleName}:${message}`)
	}
}
