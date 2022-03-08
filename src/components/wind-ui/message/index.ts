import { ElMessage } from 'element-plus'

interface MessageOptions {
	message: string,
	type: 'success' | 'warning' | 'error'
}

const $Message = function (message: string | MessageOptions): void {
	if (typeof message == 'string') {
		ElMessage(message)
	} else {
		ElMessage({
			message: message.message,
			type: message.type
		})
	}
}

$Message.success = function (message: string) {
	return new Promise(resolve => {
		ElMessage({
			message,
			type: 'success'
		})
		window.setTimeout(() => {
			resolve(message)
		}, 500)
	})
}
$Message.warning = function (message: string) {
	return new Promise(resolve => {
		ElMessage({
			message,
			type: 'warning'
		})
		window.setTimeout(() => {
			resolve(message)
		}, 500)
	})
}
$Message.error = function (message: string) {
	return new Promise(resolve => {
		ElMessage({
			message,
			type: 'error'
		})
		window.setTimeout(() => {
			resolve(message)
		}, 500)
	})
}

export default $Message